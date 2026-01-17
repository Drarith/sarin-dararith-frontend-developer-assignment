"use client";

import { Search, Download, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolbarProps {
  isAddingProduct: boolean;
  onToggleAddingProduct: () => void;
}

export default function Toolbar({
  isAddingProduct,
  onToggleAddingProduct,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between py-3 w-full gap-4">
      <div className="relative text-black/50 flex-1 h-10">
        {isAddingProduct ? (
          <div className="flex items-center px-3 h-10 gap-2">
            <p className="text-my-primary font-medium">Product</p>{" "}
            <span className="text-sm">▶&#xFE0E;</span>{" "}
            <p className="font-medium">Add Product</p>{" "}
          </div>
        ) : (
          <div className="h-10 relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 " />
            <input
              type="text"
              placeholder="Search orders..."
              className="border rounded-md px-3 pl-9 w-full h-10"
            />
          </div>
        )}
      </div>
      <div className="flex gap-3 ">
        {isAddingProduct ? (
          <Button
            variant="ghost"
            className="border-2 text-black/40 bg-none"
            onClick={onToggleAddingProduct}
          >
            <X className="h-4 w-4 " />
            Cancel
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="text-my-primary bg-my-primary/20"
          >
            <Download className="h-4 w-4 " />
            Export
          </Button>
        )}

        <Button
          variant="default"
          className="text-white bg-my-primary"
          onClick={onToggleAddingProduct}
        >
          <Plus className="h-10 w-10" />
          Add Product
        </Button>
      </div>
    </div>
  );
}
