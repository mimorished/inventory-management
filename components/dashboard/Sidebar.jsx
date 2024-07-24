// Items.js

import React from "react";
import Link from "next/link";
import { ShoppingBasket, Home, X, ShoppingCart } from "lucide-react";
import GenerateQrCode from "../PDF/qrCode";
import { getData } from "@/lib/getData";


export default function Items({ showSidebar, setShowSidebar }) {
  const inventoryLinks = [
    // Define your inventory links
  ];

  const handleGenerateQRCode = async () => {
    try {
      // Example data fetch (replace with your actual data fetching mechanism)
      const items = await getData('items'); // Ensure getData returns an array of items

      // Create a new instance of GenerateQrCode
      const qrCodeGenerator = new GenerateQrCode(items);

      // Generate QR code URL
      const qrCodeUrl = await qrCodeGenerator.generateQRCode();

      console.log('Generated QR code URL:', qrCodeUrl);

      // Open QR code in a new tab
      if (qrCodeUrl) {
        window.open(qrCodeUrl, '_blank');
      } else {
        console.error('QR code URL is empty');
      }
    } catch (error) {
      console.error('Error generating or opening QR Code:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className={`${showSidebar ? "w-56 min-h-screen bg-slate-600 text-slate-50 justify-between fixed lg:block z-50" : "w-56 min-h-screen bg-slate-600 text-slate-50 justify-between hidden fixed lg:block z-50"}`}>
      {/*Top part*/}
      <div className="flex-col">
        {/*Logo*/}
        <div className="flex space-x-2 bg-slate-950 px-3 py-2 items-center justify-between w-full">
          <Link href="#" className="bg-slate-950 flex items-center space-x-2 py-3 px-2">
            <ShoppingCart />
            <span className="text-xl font-semibold">Inventory</span>
          </Link>
          <button className="lg:hidden px-3 py-4" onClick={() => setShowSidebar(false)}>
            <X className="w-6 h-6 text-slate-50" />
          </button>
        </div>
        {/*Links*/}
        <nav className="flex flex-col gap-8 px-3 py-6">
          <Link href="http://localhost:3000/" className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <button className="p-2 flex items-center space-x-2" onClick={handleGenerateQRCode}>
            <ShoppingBasket className="w-8 h-8 p-2" />
            <span>Sale</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
