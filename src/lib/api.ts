// lib/auth-api.ts
'use server';

const BASE_URL = "https://precastxchange-api.azurewebsites.net/api/v1";

export interface SignupState {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

// 1. SIGNUP (Send Magic Link)
export async function sendSignupLink(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const tenantCode = formData.get("tenantCode") as string;

  try {
    const res = await fetch(`${BASE_URL}/${tenantCode}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error("Failed to send link");
    return { success: true, message: "Link sent! Check your email." };
    
  } catch (error) {
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

// 2. REGISTER (Complete Profile)
export async function completeRegistration(clientId: string, tenantCode: string, data: any) {
  try {
    const res = await fetch(`${BASE_URL}/${tenantCode}/auth/register/${clientId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
       const errorData = await res.json();
       throw new Error(errorData.message || "Registration failed");
    }
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// 3. LOGIN (First Step)
export async function loginUser(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const tenantCode = formData.get("tenantCode") as string;

  try {
    const res = await fetch(`${BASE_URL}/${tenantCode}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Invalid credentials");
    
    // Note: Assuming API triggers an OTP email here or returns a temp token
    // If it returns a JWT directly, you would set cookies here.
    return { success: true, message: "Credentials valid. Enter OTP." };
  } catch (error) {
    return { success: false, message: "Invalid email or password" };
  }
}