import HeaderDropdownMenu from "./dropdownMenu";
import NotificationDropdownMenu from "./NotificationDropdownMenu";

import Image from "next/image";

export default function ProductManagementHeader() {
  return (
    <div className="flex items-center justify-between border-b py-3">
      <h2 className="text-xl font-semibold">Product</h2>
      <div className="flex items-center gap-4">
        <HeaderDropdownMenu />

        <NotificationDropdownMenu />

        <div className="h-8 w-8 rounded overflow-hidden border bg-secondary">
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
