"use client";
import {
  AlignJustify,
  Bell,
  ChevronDown,
  LayoutGrid,
  LucideHistory,
  LucidePlus,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import { setShowSidebar } from "@/app/(backend)/layout";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { generateInitials } from "@/lib/generateInitials";

export default function Header({ setShowSidebar }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading User...</p>;
  }
  if (status === "unauthenticated") {
    return <Login />;
  }

  const username = session?.user?.name.split(" ")[0] ?? "";
  const initials = generateInitials(session?.user?.name);
  function handleClick() {
    console.log("BTN CLICKED");
  }
  return (
    <div className="bg-slate-300 h-12 flex items-center justify-between px-8 border-b border-gray-300">
      <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
        <AlignJustify className="w-6 h-6" />
      </button>
      <div className="flex gap-3">
        <button className="hidden lg:block">
          <LucideHistory className="w-6 h-6" />
        </button>
        <SearchInput />
      </div>
      <div className=" items-center gap-3 hidden lg:flex">
        <div className="pr-2 border-r border-gray-250">
          <button className="p-1 rounded-lg bg-blue-500">
            <Plus className="text-slate-60 w-4 h-4" />
          </button>
        </div>
        <div className="flex border-r border-gray-250 space-x-2">
          <button className="p-1 rounded-lg hover:bg-slate-250">
            <Users className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-250">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-250">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex items-center">
                <span>{username}</span>
                <ChevronDown className="w-4 h-4 " />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button onClick={() => signOut()}>Logout</button>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <button>
            <LayoutGrid className='w-6 h-6 text-slate-900'/>
          </button> */}
        </div>
        <div className="w-8 h-8  rounded-full border border-slate-900 bg-white flex justify-center align-center">
          <button>{initials}</button>
        </div>
      </div>

      <button className="lg:hidden w-8 h-8  rounded-full border border-slate-900 bg-white flex justify-center align-center">
        {initials}
      </button>
    </div>
  );
}
