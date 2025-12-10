'use client';

import { useActionState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { loginUser } from '@/lib/api';

export default function LoginPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state?.success) {
      // Redirect to OTP page with the tenant code
      router.push(`/login/verify?tenant=${type}`);
    }
  }, [state, router, type]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login to {type.toUpperCase()}</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <input type="hidden" name="tenantCode" value={type} />
            <div className="space-y-2">
              <Label>Email</Label>
              <Input name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input name="password" type="password" required />
            </div>
            {state?.success === false && (
              <p className="text-red-500 text-sm font-medium">{state.message}</p>
            )}
            <Button className="w-full bg-[#cc2221] hover:bg-red-700" disabled={isPending}>
              {isPending ? "Verifying..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t pt-4">
          <a href={`/signup/${type}`} className="text-sm text-slate-500 hover:text-[#cc2221]">
            Need an account? Sign up
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}