'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
 import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Plus, Trash2, Edit } from 'lucide-react';
import { deleteProduct, getProducts } from '@/lib/api';

export default function InventoryPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data on Load
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const res = await getProducts();
    
    // Check console to see actual API structure!
    console.log("📦 Products API Response:", res); 
    
    // Adjust 'res.data' or 'res.items' based on your API response
    if (res && res.data) {
        setProducts(res.data); 
    } else if (Array.isArray(res)) {
        setProducts(res);
    }
    
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if(!confirm("Are you sure you want to delete this product?")) return;
    
    const res = await deleteProduct(id);
    if(res) {
        alert("Product deleted");
        loadData(); // Refresh table
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
        <Button className="bg-[#cc2221] hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Products List</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-10"><Loader2 className="animate-spin" /></div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>SKU/Code</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length > 0 ? (
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name || product.title}</TableCell>
                      <TableCell>{product.sku || product.code || "N/A"}</TableCell>
                      <TableCell>{product.category || "General"}</TableCell>
                      <TableCell className="text-right">${product.price || "0.00"}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4 text-slate-500" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
                            <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                            No products found. Start by adding one.
                        </TableCell>
                    </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}