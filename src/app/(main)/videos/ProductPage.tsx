'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Save, ChevronLeft, FileText, Box, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { createProduct, CreateProductRequest } from '@/lib/api';
import Image from 'next/image';

// --- DYNAMIC IMPORT FOR 3D VIEWER ---
const ModelViewer = dynamic(() => import('./ModelViewer'), { 
  ssr: false,
  loading: () => <div className="h-full flex items-center justify-center bg-gray-100 text-xs">Loading 3D Engine...</div>
});

// --- MOCK JSON DATA (Your "Video" / 3D Asset List) ---
// --- MOCK JSON DATA (10 Mega Foundries Assets) ---
const ASSET_LIBRARY = [
  {
    id: '1',
    name: '1 FT Leaching Galley',
    type: 'MODEL',
    // REPLACE 'url' with your actual file: '/assets/models/galley_1ft.glb'
    url: '/gib files/1 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image1.jpeg'
  },
  {
    id: '2',
    name: '4 FT Concrete Leaching Galley',
    type: 'MODEL',
    url: '/gib files/2 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image2.jpeg'
  },
  {
    id: '3',
    name: 'Heavy Duty Manhole Frame & Cover',
    type: 'MODEL',
    url: '/gib files/3 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image3.jpeg'
  },
  {
    id: '4',
    name: 'Ductile Iron Storm Grate (24x24)',
    type: 'MODEL',
    url: '/gib files/1250 monogrease trap.glb', 
    thumbnail: '/assets/image4.jpg'
  },
  {
    id: '5',
    name: 'Concrete Distribution Box (7-Hole)',
    type: 'MODEL',
    url: '/gib files/d bix.glb', 
    thumbnail: '/assets/image5.jpeg'
  },
  {
    id: '6',
    name: 'Septic Tank Riser System',
    type: 'MODEL',
    url: '/gib files/1250 monogrease trap.glb', 
    thumbnail: '/assets/image6.jpg'
  },
  {
    id: '7',
    name: 'Cast Iron Valve Body (Flanged)',
    type: 'MODEL',
    url: '/gib files/3 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image7.jpg'
  },
  {
    id: '8',
    name: 'Trench Drain Channel Segment',
    type: 'MODEL',
    url: '/gib files/2 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image8.jpg'
  },
  {
    id: '9',
    name: 'Industrial Pipe Fitting (Elbow 90°)',
    type: 'MODEL',
    url: '/gib files/1 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image9.jpeg'
  },
  {
    id: '10',
    name: 'Precast Catch Basin',
    type: 'MODEL',
    url: '/gib files/2 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image10.jpeg'
  }
];

// Helper for UUIDs
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> (+c / 4)).toString(16)
  );
}

export default function ProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // === SELECTION STATE ===
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'IMAGE' | 'VIDEO' | 'MODEL'>('IMAGE');

  const { register, handleSubmit, watch, setValue } = useForm<CreateProductRequest>({
    defaultValues: {
      status: 'DRAFT',
      pricing: { currency: 'USD', unitOfMeasure: 'EA', unitPrice: 0 },
      availability: { inStock: true, stockQuantity: 0, leadTimeDays: 7 },
      dimensions: { dimensionUnit: 'IN', weightUnit: 'LB', length: 0, width: 0, height: 0, weight: 0 },
      documents: [] 
    }
  });

  const productName = watch('productName');
  useEffect(() => {
    if (productName) {
      const slug = productName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      setValue('productSlug', slug);
    }
  }, [productName, setValue]);

  // === HANDLER: SELECT ASSET FROM LIST ===
  const handleSelectAsset = (asset: typeof ASSET_LIBRARY[0]) => {
    setSelectedAssetId(asset.id);
    setPreviewUrl(asset.url);
    setMediaType('MODEL'); // Force 3D mode
  };

  const onSubmit = async (data: CreateProductRequest) => {
    setIsSubmitting(true);
    try {
        if (!previewUrl) {
            alert("Please select a 3D model first!");
            setIsSubmitting(false);
            return;
        }

        console.log("Selected Model URL:", previewUrl);
        
        // Construct Payload with the selected URL
        const payload = { 
            ...data, 
            id: uuidv4(),
            documents: [{
                url: previewUrl,
                type: 'MODEL',
                isPrimary: true,
                title: data.productName
            }]
        };

        // await createProduct(payload);
        alert(`Success! Product created with model: ${previewUrl}`);
        
    } catch (error) {
        console.error(error);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="  bg-gray-50 pb-4">
      {/* Header */}
      {/* <div className="bg-white border-b border-gray-200 sticky top-0 z-30 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/private/member/products" className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Add New Product</h1>
        </div>
        <button onClick={handleSubmit(onSubmit)} className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-[#cc2221] rounded-lg hover:bg-red-700">
           <Save className="w-4 h-4" /> Save
        </button>
      </div> */}
 {/* === 3D ASSET SELECTION === */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Box className="w-5 h-5 text-gray-400" /> Select 3D Model
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 
                 {/* 1. PREVIEW WINDOW (The 360 Viewer) */}
                 <div className="h-[300px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative">
                    {previewUrl && mediaType === 'MODEL' ? (
                       <ModelViewer src={previewUrl} />
                    ) : (
                       <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                          <Box className="w-10 h-10 mb-2 opacity-50" />
                          <span className="text-sm">Select a model from the list</span>
                       </div>
                    )}
                 </div>

                 {/* 2. ASSET LIST (The JSON Data) */}
                 <div className="flex flex-col gap-3 h-[300px] overflow-y-auto pr-2">
                    {ASSET_LIBRARY.map((asset) => (
                       <div 
                         key={asset.id}
                         onClick={() => handleSelectAsset(asset)}
                         className={`
                           flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all
                           ${selectedAssetId === asset.id 
                             ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' 
                             : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                           }
                         `}
                       >
                          {/* Thumbnail */}
                          <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <Image width={1200} height={600} src={asset.thumbnail} alt={asset.name} className="w-full h-full object-cover" />
                          </div>
                          
                          {/* Info */}
                          <div className="flex-1">
                             <p className="text-sm font-bold text-gray-800">{asset.name}</p>
                             <p className="text-xs text-gray-500">{asset.type}</p>
                          </div>

                          {/* Checkmark */}
                          {selectedAssetId === asset.id && (
                             <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          )}
                       </div>
                    ))}
                 </div>

              </div>
            </section>
      {/* <div className="max-w-7xl mx-auto px-6 py-8">
        <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
          <div className="lg:col-span-2 space-y-6">
             
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
               <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <FileText className="w-5 h-5 text-gray-400" /> Basic Info
               </h2>
               <div className="space-y-4">
                 <div>
                   <label className="text-sm font-medium">Product Name</label>
                   <input {...register("productName")} className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. 1 FT Leaching Galley" />
                 </div>
                 <div>
                   <label className="text-sm font-medium">SKU</label>
                   <input {...register("sku")} className="w-full px-4 py-2 border rounded-lg" />
                 </div>
               </div>
            </section>

           
          </div>
 
          <div className="space-y-6">
             <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold mb-4">Pricing</h2>
                <input type="number" {...register("pricing.unitPrice")} className="w-full border px-4 py-2 rounded-lg" placeholder="0.00" />
             </section>
          </div>
        </form>
      </div> */}
    </div>
  );
}