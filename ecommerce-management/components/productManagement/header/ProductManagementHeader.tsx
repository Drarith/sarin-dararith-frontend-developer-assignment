"use client";

import HeaderDropdownMenu from "./dropdownMenu";
import NotificationDropdownMenu from "./NotificationDropdownMenu";
import { usePathname } from "next/navigation";

import Image from "next/image";

export default function ProductManagementHeader() {
  const pathname = usePathname();

  let title = "Product";
  if (pathname?.includes("/add")) {
    title = "Add Product";
  } else if (pathname?.includes("/edit")) {
    title = "Edit Product";
  }
  return (
    <div className="flex items-center justify-between border-b py-3">
      <h2 className="text-xl font-semibold max-[1100px]:ml-10">{title}</h2>
      <div className="flex items-center gap-4">
        <HeaderDropdownMenu />
        <NotificationDropdownMenu />
        <div className="h-8 w-8 rounded-md overflow-hidden border bg-secondary">
          <Image
            src="https://github.com/drarith.png"
            alt="Profile"
            width={50}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
