// app/admin/vendors/[id]/_components/MarketplaceForm.tsx
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
 import { toast } from 'sonner'; // Assuming you use Sonner or similar
import { getVendorMarketplace, updateVendorMarketplace } from '@/lib/api';

export default function MarketplaceForm({ vendorId }: { vendorId: string }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  // 1. Fetch initial data
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getVendorMarketplace(vendorId);
        reset(data); // Fill the form with API data
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
  }, [vendorId, reset]);

  // 2. Handle Update
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await updateVendorMarketplace(vendorId, data);
      toast.success("Marketplace profile updated!");
    } catch (error) {
      toast.error("Failed to update.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Business Tagline</label>
        <Input {...register("tagline")} placeholder="e.g. World's best foundry" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">About Description</label>
        <Textarea {...register("description")} placeholder="Describe your capabilities..." />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
           <label className="block text-sm font-medium mb-1">Primary Industry</label>
           <Input {...register("industry")} />
        </div>
        <div>
           <label className="block text-sm font-medium mb-1">Website URL</label>
           <Input {...register("websiteUrl")} />
        </div>
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
}