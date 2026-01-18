"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { items } from "@/config/sidebarItems";

export default function AppSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 left-7 z-50 min-[1100px]:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-my-primary text-white rounded-md shadow-lg hover:bg-my-primary/90 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={15} />}
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 min-[1100px]:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          bg-my-primary text-white flex flex-col h-full
          w-72 transition-transform duration-300 ease-in-out
          max-[1100px]:fixed max-[1100px]:top-0 max-[1100px]:left-0 max-[1100px]:z-50
          min-[1100px]:static min-[1100px]:translate-x-0
          ${isOpen ? "max-[1100px]:translate-x-0" : "max-[1100px]:-translate-x-full"}
        `}
      >
        <div className="h-20 flex items-center px-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full mr-2 border-6 border-white bg-transparent"></div>
            <span className="text-xl font-bold tracking-wide">Logo</span>
          </div>
        </div>

        <nav className="flex-1 py-6 flex flex-col gap-1">
          {items.map((item) => {
            // inside your map function...
            const isActive = pathname === item.url;

            return (
              <Link
                key={item.url}
                href={item.url}
                className="relative group flex items-center gap-4 px-6 py-3.5 transition-all duration-200 ease-in-out"
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-1 bg-white rounded-r-full " />
                )}

                <item.icon
                  className={`
        w-5 h-5 transition-colors
        ${isActive ? "text-white" : "text-my-primary-200 group-hover:text-white"}
      `}
                />
                <span className="font-medium text-sm tracking-wide">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
