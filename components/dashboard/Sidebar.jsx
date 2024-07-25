import React from "react";
import Link from "next/link";
import { ShoppingBasket, Home, X, ShoppingCart } from "lucide-react";
import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const inventoryLinks = [
    { title: "All", href: "/dashboard/inventory" },
    { title: "Items", href: "/dashboard/inventory/items" },
    { title: "Categories", href: "/dashboard/inventory/categories" },
    { title: "Brand", href: "/dashboard/inventory/brands" },
    { title: "Units", href: "/dashboard/inventory/units" },
    { title: "Warehouse", href: "/dashboard/inventory/warehouse" },
  ];

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className={`${
        showSidebar ? "w-56 min-h-screen bg-slate-600 text-slate-50 justify-between fixed lg:block z-50" : "w-56 min-h-screen bg-slate-600 text-slate-50 justify-between hidden fixed lg:block z-50"
      }`}
    >
      {/* Top part */}
      <div className="flex-col">
        {/* Logo */}
        <div className="flex space-x-2 bg-slate-950 px-3 py-2 items-center justify-between w-full">
          <Link href="#" className="bg-slate-950 flex items-center space-x-2 py-3 px-2">
            <ShoppingCart />
            <span className="text-xl font-semibold">Inventory</span>
          </Link>
          <button className="lg:hidden px-3 py-4" onClick={toggleSidebar}>
            <X className="w-6 h-6 text-slate-50" />
          </button>
        </div>
        {/* Links */}
        <nav className="flex flex-col gap-8 px-3 py-6">
          <Link
            href="http://localhost:3000/"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <SidebarDropdownLink
            title="Inventory"
            items={inventoryLinks}
            icon={ShoppingBasket}
            setShowSidebar={setShowSidebar}
          />
          <button
            className="p-2 flex items-center space-x-2"
            onClick={toggleSidebar}
          >
            <ShoppingBasket className="w-8 h-8 p-2" />
            <span>Sale</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
