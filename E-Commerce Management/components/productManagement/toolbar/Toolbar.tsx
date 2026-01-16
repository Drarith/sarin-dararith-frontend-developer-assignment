import { Search, Download, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Toolbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 w-full gap-4">
      <div className="relative text-black/50 flex-1 ">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 " />
        <input
          type="text"
          placeholder="Search orders..."
          className="border rounded-md px-3 py-2 pl-9 w-full"
        />
      </div>
      <div className="flex gap-3 ">
        <Button
          variant="secondary"
          className="text-my-primary bg-my-primary/20"
        >
          <Download className="h-4 w-4 " />
          Export
        </Button>
        <Button variant="default" className="text-white bg-my-primary">
          <Plus className="h-10 w-10" />
          Add Product
        </Button>
      </div>
    </div>
  );
}
