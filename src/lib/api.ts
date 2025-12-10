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
export async function loginUser(email: string, pass: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass }),
    });

    if (!res.ok) {
        const txt = await res.text();
        return { success: false, message: "Invalid credentials" };
    }
    return { success: true, message: "OTP Sent" };
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}

// --- Step 2: Validate OTP + Password ---
export async function verifyTwoFactor(email: string, pass: string, code: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";

  try {
    // ✅ Matches your Swagger: { email, password, code }
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/two-factor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email, 
        password: pass, 
        code: code 
      }),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return { success: false, message: errorData.message || "Invalid OTP Code" };
    }

    // Success! This usually returns your JWT Token
    const data = await res.json();
    return { success: true, token: data.token }; 
  } catch (error) {
    return { success: false, message: "Network connection failed." };
  }
}