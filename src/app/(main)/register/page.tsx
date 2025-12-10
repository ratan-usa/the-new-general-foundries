'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
 import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Loader2, LogIn, LockKeyhole, ArrowLeft } from 'lucide-react';
import { loginUser, verifyTwoFactor } from '@/lib/api';

export default function LoginPage({ params }: { params: Promise<{ type: string }> }) {
  // 1. Unwrap params safely
  const unwrappedParams = use(params);
  const type = unwrappedParams?.type || 'portal'; // Fallback to prevent crash

  const router = useRouter();

  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [otp, setOtp] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Pass the safe 'type' variable
    const res = await loginUser(formData.email, formData.password, type);

    if (res.success) {
      setStep('otp');
      setLoading(false);
    } else {
      setError(res.message || "Invalid email or password.");
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (otp.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    setLoading(true);
    setError('');

    const res = await verifyTwoFactor(formData.email, formData.password, otp, type);

    if (res.success) {
      router.push('/dashboard'); 
    } else {
      setError(res.message || "Verification failed. Please try again.");
      setLoading(false);
    }
  };

  // Helper to safely uppercase the title
  const displayTitle = type ? type.toUpperCase() : 'PORTAL';

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="max-w-md w-full shadow-xl border-t-4 border-t-[#cc2221]">
        
        <CardHeader className="text-center">
          <div className="mx-auto bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            {step === 'credentials' ? (
               <LogIn className="w-6 h-6 text-[#cc2221]" />
            ) : (
               <LockKeyhole className="w-6 h-6 text-[#cc2221]" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">
            {/* ✅ SAFE RENDERING HERE */}
            {step === 'credentials' ? `Login to ${displayTitle}` : 'Two-Factor Auth'}
          </CardTitle>
          <CardDescription>
            {step === 'credentials' 
              ? "Enter your credentials to continue." 
              : `Enter the code sent to ${formData.email}`
            }
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step === 'credentials' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="name@company.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-[#cc2221] hover:underline">Forgot password?</a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  disabled={loading}
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium bg-red-50 p-2 rounded text-center border border-red-100">
                  {error}
                </p>
              )}

              <Button className="w-full bg-[#cc2221] hover:bg-red-700 py-6 text-md font-bold" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Sign In"}
              </Button>
            </form>
          )}

          {step === 'otp' && (
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={(val) => setOtp(val)}>
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      <InputOTPSlot key={idx} index={idx} className="w-10 h-10 sm:w-12 sm:h-12 text-lg border-slate-300" />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium bg-red-50 px-4 py-2 rounded">
                    {error}
                </p>
              )}

              <Button 
                onClick={handleVerify} 
                className="w-full bg-[#cc2221] hover:bg-red-700 py-6 text-lg font-bold"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Verify & Login"}
              </Button>
              
              <button 
                onClick={() => { setStep('credentials'); setError(''); }} 
                className="flex items-center text-sm text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Login
              </button>
            </div>
          )}
        </CardContent>

        {step === 'credentials' && (
           <CardFooter className="justify-center border-t pt-4">
              <p className="text-sm text-slate-500">
                  {/* ✅ Safe URL generation */}
                  Don't have an account? <a href={`/signup/${type || 'customer'}`} className="text-[#cc2221] font-semibold hover:underline">Sign up</a>
              </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}