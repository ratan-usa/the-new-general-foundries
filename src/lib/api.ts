'use client'; // We mark this as client because it uses localStorage (except for the Server Action below)

// --- CONFIGURATION ---
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

// =========================================================
// 1. SERVER ACTIONS (Running on Node.js)
// =========================================================

export async function sendSignupLink(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const rawSlug = formData.get("tenantCode") as string; 
  const apiTenantCode = TENANT_ID_MAP[rawSlug] || "MEGAFOUNDRY";

  console.log(`🚀 Signup: Mapping '${rawSlug}' -> '${apiTenantCode}'`);

  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
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

// =========================================================
// 2. AUTHENTICATION (Login, Verify, Passwords)
// =========================================================

// --- LOGIN ---
export async function loginUser(email: string, pass: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass }),
    });
    if (!res.ok) return { success: false, message: "Invalid credentials" };
    return { success: true, message: "OTP Sent" };
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}

// --- VERIFY OTP & GET TOKEN ---
export async function verifyTwoFactor(email: string, pass: string, code: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/two-factor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass, code }),
    });
    const data = await res.json();
    if (!res.ok) return { success: false, message: data.message || "Invalid Code" };
    
    // Normalize Token location
    const finalToken = data.token || data.accessToken || data.jwt || (data.data && data.data.token);
    return { success: true, token: finalToken }; 
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}

// --- COMPLETE REGISTRATION (After clicking email link) ---
export async function completeRegistration(clientId: string, tenantSlug: string, data: any) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  console.log("🚀 Registering:", { clientId, apiTenantCode, email: data.email });

  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/register/${clientId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
       const errorData = await res.json().catch(() => ({}));
       // Handle .NET specific validation errors
       if (errorData.errors) {
         const detailedMessages = Object.values(errorData.errors).flat().join(", ");
         return { success: false, message: detailedMessages };
       }
       return { success: false, message: errorData.message || "Validation failed." };
    }
    return { success: true };
  } catch (error) {
    return { success: false, message: "Network connection failed" };
  }
}
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


// --- FORGOT PASSWORD ---
export async function sendForgotPasswordEmail(email: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
        return { success: true, message: "If an account exists, a reset link has been sent." };
    }
    return { success: true, message: "Reset link sent! Check your inbox." };
  } catch (error) {
    return { success: false, message: "Network error." };
  }
}

// --- RESET PASSWORD ---
export async function resetPassword(clientId: string, email: string, newPass: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/reset-password/${clientId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword: newPass }),
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

// =========================================================
// 3. PROFILE & TOKEN HELPERS (Crucial for Dashboard)
// =========================================================

// Helper: Manually decode JWT Token (Backup Plan)
function parseJwt(token: string) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

// --- GET CURRENT USER PROFILE (Robust Version) ---
export async function getUserProfile(token: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "MEGAFOUNDRY";

  // 1. Try to fetch from API (Primary Strategy)
  try {
    const res = await fetch(`${BASE_URL}/${apiTenantCode}/auth/me`, { 
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    });

    if (res.ok) {
        const data = await res.json();
        return { success: true, data: data.data || data };
    }
  } catch (err) {
    console.warn("API Profile fetch failed, falling back to Token decoding...");
  }

  // 2. FALLBACK: Decode the Token manually (Secondary Strategy)
  const decoded = parseJwt(token);
  
  if (decoded) {
      console.log("🔓 RAW DECODED TOKEN:", decoded); 

      // 3. UNIVERSAL ID SEARCH (Fixes missing ID issue)
      const userId = 
        decoded.id || decoded.sub || decoded.uid || decoded.UserId || decoded.oid || 
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

      const email = 
        decoded.email || decoded.upn || decoded.unique_name || 
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];

      const name = 
        decoded.name || decoded.given_name || 
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

      if (userId) {
          return { 
              success: true, 
              data: {
                  id: userId, // Normalized ID
                  email: email || "user@example.com",
                  fullName: name || "User",
                  role: decoded.role || "Member"
              }
          };
      }
  }

  return { success: false, message: "Could not retrieve user profile." };
}

// =========================================================
// 4. DATA API HELPERS (Vendors, Products, etc.)
// =========================================================

// Generic Authenticated Fetcher
async function fetchWithAuth(endpoint: string, method: string = 'GET', body?: any) {
  // Safety check for server-side rendering
  if (typeof window === 'undefined') return null; 

  const token = localStorage.getItem('authToken');
  const tenant = localStorage.getItem('tenantSlug') || 'team';
  const apiTenant = TENANT_ID_MAP[tenant] || "MEGAFOUNDRY";

  if (!token) {
    // Optional: Redirect logic if needed
    return null;
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  };

  try {
    const res = await fetch(`${BASE_URL}/${apiTenant}/${endpoint}`, config);
    
    if (res.status === 401) {
       console.warn("Token expired.");
       // localStorage.removeItem('authToken'); // Optional: auto-logout
       return null;
    }

    if (!res.ok) {
        const errorTxt = await res.text();
        console.error(`API Error ${res.status}:`, errorTxt);
        // Try to return JSON error if possible
        try { return JSON.parse(errorTxt); } catch { return { success: false, message: errorTxt }; }
    }

    return await res.json();
  } catch (error) {
    console.error(`Network Error (${endpoint}):`, error);
    return null;
  }
}

// --- PRODUCTS ---
export async function getProducts(page = 1, limit = 10) {
  return await fetchWithAuth(`products?pageNumber=${page}&pageSize=${limit}`); 
}

export async function createProduct(data: any) {
  return await fetchWithAuth('products', 'POST', data);
}

export async function deleteProduct(id: string) {
  return await fetchWithAuth(`products/${id}`, 'DELETE');
}

// --- VENDORS ---
export async function registerVendor(data: any) {
  // Use 'vendors' endpoint (POST)
  return await fetchWithAuth('vendors', 'POST', data);
}

export async function getVendorProfile(vendorId: string) {
    return await fetchWithAuth(`vendors/${vendorId}/profile`, 'GET');
}