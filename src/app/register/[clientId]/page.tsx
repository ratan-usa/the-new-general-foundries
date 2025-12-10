'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { completeRegistration } from '@/lib/api';

export default function CompleteRegistration({ params }: { params: { clientId: string } }) {
    const { clientId } = params;
    const searchParams = useSearchParams();
    const tenantCode = searchParams.get('tenant') || 'customer'; // Default if missing
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        if (data.password !== data.retype) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        // Call API
        const result = await completeRegistration(clientId, tenantCode, {
            fullName: data.fullname,
            username: data.username,
            password: data.password
            // Add other fields required by your specific API body schema
        });

        if (result.success) {
            router.push(`/login/${tenantCode}?registered=true`);
        } else {
            setError(result.error || "Registration failed");
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <Card className="max-w-lg w-full shadow-xl">
                <CardHeader className="bg-[#cc2221] text-white rounded-t-xl">
                    <CardTitle>Finalize Registration</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Full Name</Label>
                                <Input name="fullname" required placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label>Username</Label>
                                <Input name="username" required placeholder="jdoe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Password</Label>
                            <Input name="password" type="password" required />
                        </div>

                        <div className="space-y-2">
                            <Label>Retype Password</Label>
                            <Input name="retype" type="password" required />
                        </div>

                        {error && <p className="text-red-600 text-sm">{error}</p>}

                        <Button className="w-full bg-[#cc2221] hover:bg-red-700" disabled={loading}>
                            {loading && <Loader2 className="animate-spin mr-2" />}
                            Create Account
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}