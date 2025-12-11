'use server';

const BASE_URL = "https://precastxchange-api.azurewebsites.net/api/v1";

// ✅ UPDATED: All paths now point to "MEGAFOUNDRY"
const TENANT_ID_MAP: Record<string, string> = {
  "team":           "MEGAFOUNDRY",
  "customer":       "MEGAFOUNDRY", 
  "logistics":      "MEGAFOUNDRY",
  "foundry":        "MEGAFOUNDRY",
  "forge":          "MEGAFOUNDRY",
  "fabricator":     "MEGAFOUNDRY",
  "vendor":         "MEGAFOUNDRY",
  "engineer":       "MEGAFOUNDRY",
};

export async function sendSignupLink(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const rawSlug = formData.get("tenantCode") as string; // e.g., "customer"

  // 1. Resolve the ID. 
  // If the slug is in our map, it returns "MEGAFOUNDRY". 
  // If not, it falls back to the slug itself (just in case).
  const apiTenantCode = TENANT_ID_MAP[rawSlug] || "MEGAFOUNDRY";

  console.log(`🚀 Signup: Mapping '${rawSlug}' -> '${apiTenantCode}'`);

  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
        // If it fails now, it's likely "User already exists" or "Invalid Email", NOT "Tenant not found"
        const txt = await res.text();
        console.error(`❌ API Error: ${txt}`);
        return { success: false, message: `Request failed: ${txt}` };
    }

    return { success: true, message: "Link sent! Check your inbox." };
    
  } catch (err) {
    console.error("🔥 Network Error:", err);
    return { success: false, message: "Network connection failed." };
  }
}

// lib/auth-api.ts
// --- CHANGE PASSWORD ---
export async function changePassword(email: string, oldPass: string, newPass: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/change-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email, 
        oldPassword: oldPass, 
        newPassword: newPass 
      }),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return { success: false, message: errorData.message || "Failed to update password." };
    }

    return { success: true, message: "Password updated successfully." };
  } catch (error) {
    return { success: false, message: "Network error." };
  }
}

// --- UPDATE PROFILE (Mockup) ---
export async function updateProfile(email: string, fullName: string, tenantSlug: string) {
    // Similar structure to changePassword if your API supports it
    return { success: true, message: "Profile updated." };
}
export async function completeRegistration(clientId: string, tenantSlug: string, data: any) {
  // Map 'customer' -> 'MEGAFOUNDRY'
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  
  console.log("🚀 Registering:", { clientId, apiTenantCode, username: data.username });

  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/register/${clientId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
       const errorData = await res.json().catch(() => ({}));
       console.error("❌ API Validation Error:", JSON.stringify(errorData, null, 2));

       // 1. Check for specific validation "errors" object (Common in .NET APIs)
       if (errorData.errors) {
         // Join all error messages into a single string
         const detailedMessages = Object.values(errorData.errors).flat().join(", ");
         return { success: false, message: detailedMessages };
       }

       // 2. Fallback to standard message
       return { success: false, message: errorData.message || errorData.title || "Validation failed at API level." };
    }
    return { success: true };
  } catch (error) {
    console.error("🔥 Network Error:", error);
    return { success: false, message: "Network connection failed" };
  }
}
// --- Step 1: Trigger OTP ---
// --- Step 1: Login (Accepts strings) ---
export async function loginUser(email: string, pass: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass }),
    });

    if (!res.ok) {
        return { success: false, message: "Invalid credentials" };
    }
    return { success: true, message: "OTP Sent" };
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}

// --- Step 2: Verify (Requires Password) ---
export async function verifyTwoFactor(email: string, pass: string, code: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";

  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/two-factor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass, code }),
    });

    const data = await res.json(); // Parse JSON first to inspect it

    if (!res.ok) {
        return { success: false, message: data.message || "Invalid Code" };
    }

    // 🔍 DEBUG: Check where the token actually is
    // Sometimes APIs return { token: "..." }
    // Sometimes { data: { token: "..." } }
    // Sometimes { accessToken: "..." }
    
    const finalToken = data.token || data.accessToken || data.jwt || (data.data && data.data.token);

    return { success: true, token: finalToken }; 
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}

// --- FORGOT PASSWORD (Step 1) ---
export async function sendForgotPasswordEmail(email: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
        // Even if email is not found, security best practice is to say "If account exists, email sent"
        // But for debugging, let's log the error.
        const txt = await res.text();
        console.error("❌ Forgot Password Error:", txt);
        // We still return true to prevent user enumeration attacks, or return false if you prefer strict errors
        return { success: true, message: "If an account exists, a reset link has been sent." };
    }

    return { success: true, message: "Reset link sent! Check your inbox." };
  } catch (error) {
    return { success: false, message: "Network error." };
  }
}

// --- RESET PASSWORD (Step 2) ---
export async function resetPassword(clientId: string, email: string, newPass: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/reset-password/${clientId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email, 
        newPassword: newPass 
      }),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return { success: false, message: errorData.message || "Failed to reset password." };
    }

    return { success: true, message: "Password reset successful." };
  } catch (error) {
    return { success: false, message: "Network error." };
  }
}

// --- GET CURRENT USER PROFILE ---
export async function getUserProfile(token: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";

  try {
    // ⚠️ CHECK SWAGGER: Endpoint might be '/auth/me', '/users/profile', or similar
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/profile`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Send the token
      },
    });

    if (!res.ok) {
        return { success: false, message: "Failed to fetch profile" };
    }

    const data = await res.json();
    return { success: true, data: data }; // data should contain fullName, email, etc.
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}