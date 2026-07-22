'use client'; // We mark this as client because it uses localStorage (except for the Server Action below)

// --- CONFIGURATION ---
const BASE_URL = "https://precastxchange-api.azurewebsites.net/api/v1";
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';
import axios from 'axios';
const DEFAULT_TENANT = "canadaFOUNDRY";
// ✅ UPDATED: All paths now point to "canadaFOUNDRY"
const TENANT_ID_MAP: Record<string, string> = {
  "team": "canadaFOUNDRY",
  "customer": "canadaFOUNDRY",
  "logistics": "canadaFOUNDRY",
  "foundry": "canadaFOUNDRY",
  "forge": "canadaFOUNDRY",
  "fabricator": "canadaFOUNDRY",
  "vendor": "canadaFOUNDRY",
  "engineer": "canadaFOUNDRY",
};

// =========================================================
// 1. SERVER ACTIONS (Running on Node.js)
// =========================================================

export async function sendSignupLink(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const rawSlug = formData.get("tenantCode") as string;
  const apiTenantCode = TENANT_ID_MAP[rawSlug] || "canadaFOUNDRY";

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
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "canadaFOUNDRY";
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
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "canadaFOUNDRY";
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
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "canadaFOUNDRY";
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

  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "canadaFOUNDRY";



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
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "canadaFOUNDRY";
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
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "canadaFOUNDRY";
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
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

// --- GET CURRENT USER PROFILE (Robust Version) ---
export async function getUserProfile(token: string, tenantSlug: string) {
  const apiTenantCode = TENANT_ID_MAP[tenantSlug] || "canadaFOUNDRY";

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
  const apiTenant = TENANT_ID_MAP[tenant] || "canadaFOUNDRY";

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
// export async function getProducts(page = 1, limit = 10) {
//   return await fetchWithAuth(`products?pageNumber=${page}&pageSize=${limit}`); 
// }

// export async function createProduct(data: any) {
//   return await fetchWithAuth('products', 'POST', data);
// }

export async function deleteProduct(id: string) {
  return await fetchWithAuth(`products/${id}`, 'DELETE');
}

// --- VENDORS ---
export async function registerVendor(data: any) {
  // Use 'vendors' endpoint (POST)
  return await fetchWithAuth('vendors', 'POST', data);
}

// export async function getVendorProfile(vendorId: string) {
//     return await fetchWithAuth(`vendors/${vendorId}/profile`, 'GET');
// }
// --- 1. CORE VENDOR (List, Create, Delete) ---

// GET /api/v1/{tenantCode}/vendors
export const getVendors = async (tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors`);
  return res.data;
};

// POST /api/v1/{tenantCode}/vendors
export const createVendor = async (data: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.post(`${API_URL}/${tenantCode}/vendors`, data);
  return res.data;
};

// PUT /api/v1/{tenantCode}/vendors/{id}
export const updateVendor = async (vendorId: string, data: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.put(`${API_URL}/${tenantCode}/vendors/${vendorId}`, data);
  return res.data;
};

// DELETE /api/v1/{tenantCode}/vendors/{id}
export const deleteVendor = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.delete(`${API_URL}/${tenantCode}/vendors/${vendorId}`);
  return res.data;
};


// --- 2. PROFILE & MARKETPLACE (Showcase) ---

// GET & PUT /profile
export const getVendorProfile = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors/${vendorId}/profile`);
  return res.data;
};

export const updateVendorProfile = async (vendorId: string, data: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.put(`${API_URL}/${tenantCode}/vendors/${vendorId}/profile`, data);
  return res.data;
};

// GET & PUT /marketplace
export const getVendorMarketplace = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors/${vendorId}/marketplace`);
  return res.data;
};

export const updateVendorMarketplace = async (vendorId: string, data: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.put(`${API_URL}/${tenantCode}/vendors/${vendorId}/marketplace`, data);
  return res.data;
};


// --- 3. DETAILS (Contact, Address, Compliance) ---

// GET & PUT /contact
export const getVendorContact = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors/${vendorId}/contact`);
  return res.data;
};

export const updateVendorContact = async (vendorId: string, data: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.put(`${API_URL}/${tenantCode}/vendors/${vendorId}/contact`, data);
  return res.data;
};

// GET & PUT /address
export const getVendorAddress = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors/${vendorId}/address`);
  return res.data;
};

export const updateVendorAddress = async (vendorId: string, data: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.put(`${API_URL}/${tenantCode}/vendors/${vendorId}/address`, data);
  return res.data;
};

// GET & PUT /compliance (Status)
export const getVendorCompliance = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors/${vendorId}/compliance`);
  return res.data;
};

export const updateVendorCompliance = async (vendorId: string, data: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.put(`${API_URL}/${tenantCode}/vendors/${vendorId}/compliance`, data);
  return res.data;
};


// --- 4. SUB-RESOURCES (Locations, Documents) ---

// GET /locations
export const getVendorLocations = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors/${vendorId}/locations`);
  return res.data;
};

// POST /locations
export const addVendorLocation = async (vendorId: string, locationData: any, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.post(`${API_URL}/${tenantCode}/vendors/${vendorId}/locations`, locationData);
  return res.data;
};

// DELETE /locations/{locationId}
export const deleteVendorLocation = async (vendorId: string, locationId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.delete(`${API_URL}/${tenantCode}/vendors/${vendorId}/locations/${locationId}`);
  return res.data;
};

// GET /compliance-documents
export const getVendorDocuments = async (vendorId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.get(`${API_URL}/${tenantCode}/vendors/${vendorId}/compliance-documents`);
  return res.data;
};

// POST /compliance-documents (Upload)
export const uploadVendorDocument = async (vendorId: string, formData: FormData, tenantCode: string = DEFAULT_TENANT) => {
  // Note: Ensure your axios headers are set to 'multipart/form-data' if needed, 
  // but usually axios handles FormData automatically.
  const res = await axios.post(`${API_URL}/${tenantCode}/vendors/${vendorId}/compliance-documents`, formData);
  return res.data;
};

// DELETE /compliance-documents/{documentId}
export const deleteVendorDocument = async (vendorId: string, documentId: string, tenantCode: string = DEFAULT_TENANT) => {
  const res = await axios.delete(`${API_URL}/${tenantCode}/vendors/${vendorId}/compliance-documents/${documentId}`);
  return res.data;
};




// src/services/api.ts

// === TYPES ===
export interface ApiDocument {
  url: string;
  thumbnailUrl?: string;
  type: string;
  isPrimary: boolean;
}

export interface Product {
  id: string;
  productName: string;
  productSlug: string;
  categorySlug: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  unitPrice: number;
  stockQuantity: number;
  inStock: boolean;
  documents: ApiDocument[];
}

export interface ApiResponse {
  content: Product[];
  totalPages: number;
  totalElements: number;
  number: number;
  first: boolean;
  last: boolean;
}


// === DUMMY DATA GENERATOR (Fallback) ===
const getMockProducts = (page: number, size: number): ApiResponse => {
  const mockData = Array.from({ length: size }).map((_, i) => ({
    id: `mock-${page}-${i}`,
    productName: `Mock Product ${page * size + i + 1}`,
    productSlug: `mock-product-${i}`,
    categorySlug: 'mock-category',
    status: (i % 2 === 0 ? 'PUBLISHED' : 'DRAFT') as any,
    unitPrice: 100 + i * 10,
    stockQuantity: 50,
    inStock: true,
    documents: [{ type: 'IMAGE', isPrimary: true, url: '', thumbnailUrl: '' }]
  }));

  return {
    content: mockData,
    totalPages: 5,
    totalElements: 50,
    number: page,
    first: page === 0,
    last: page === 4
  };
};

// === MAIN FETCH FUNCTION ===
export const getProducts = async (page: number, size: number = 10, tenantCode: string = DEFAULT_TENANT): Promise<ApiResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/${tenantCode}/products?page=${page}&size=${size}`);

    if (!res.ok) {
      throw new Error(`API Error: ${res.statusText}`);
    }

    const data: ApiResponse = await res.json();
    return data;

  } catch (error) {
    console.error("Fetch failed, switching to MOCK data:", error);
    // FALLBACK: Return dummy data if API fails so the UI doesn't break
    return new Promise((resolve) => {
      setTimeout(() => resolve(getMockProducts(page, size)), 500);
    });
  }
};


export interface CreateProductRequest {
  id?: string;
  tenantId?: string;
  productName: string;
  productSlug: string;
  sku: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  shortDescription?: string;
  longDescription?: string;

  // === ADD THIS MISSING LINE ===
  tags?: string[];
  // ============================

  // Vendor / Category Info
  vendorId: string;
  vendorName: string;
  vendorSlug: string;

  categoryId: string;
  categoryName: string;
  categorySlug: string;

  subcategoryId: string;
  subcategoryName: string;
  subcategorySlug: string;

  // Nested Objects
  pricing: {
    currency: string;
    unitPrice: number;
    salePrice?: number;
    unitOfMeasure: string;
  };

  dimensions?: {
    length: number;
    width: number;
    height: number;
    dimensionUnit: 'IN' | 'CM';
    weight: number;
    weightUnit: 'LB' | 'KG';
  };

  availability?: {
    inStock: boolean;
    stockQuantity: number;
    minOrderQuantity?: number;
    leadTimeDays?: number;
  };

  documents?: {
    url: string;
    type: 'IMAGE';
    isPrimary: boolean;
    title: string;
  }[];
}



// src/services/api.ts

export const createProduct = async (productData: CreateProductRequest, tenantCode: string = "canadaFOUNDRY"): Promise<any> => {
  const BASE_URL = "https://precastxchange-api.azurewebsites.net/api/v1";

  // Get Token
  let token = '';
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('authToken') || localStorage.getItem('accessToken') || '';
  }

  if (!token) throw new Error("Authentication Error: No token found.");

  // === DEBUG: LOG THE PAYLOAD ===
  console.group("🚀 Debug: Create Product Payload");
  console.log("Target URL:", `${BASE_URL}/${tenantCode}/products`);
  console.log("Body:", JSON.stringify(productData, null, 2)); // Use this string to test in Swagger/Postman
  console.groupEnd();

  try {
    const res = await fetch(`${BASE_URL}/${tenantCode}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });

    if (!res.ok) {
      // Try to get text, sometimes 500 errors return a stack trace in HTML or text
      const errorText = await res.text();
      console.error("❌ Server 500 Details:", errorText);
      throw new Error(`Server Error (${res.status}): ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("🔥 API Error:", error);
    throw error;
  }
};