"use client";

import { Search, Download, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ToolbarProps } from "@/types/Toolbar";

export default function Toolbar({
  mode,
  onAdd,
  onCancel,
  onSave,
  isFormComplete = false,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between py-3 w-full gap-4">
      <div className="relative text-black/50 flex-1 h-10">
        {mode === "add" || mode === "edit" ? (
          <div className="flex items-center px-3 h-10 gap-2">
            <p className="text-my-primary font-medium">Product</p>{" "}
            <span className="text-sm">▶&#xFE0E;</span>{" "}
            <p className="font-medium">
              {mode === "add" ? "Add Product" : "Edit Product"}
            </p>{" "}
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
        {mode !== "list" ? (
          <Button
            variant="ghost"
            className="border-2 text-black/40 bg-none"
            onClick={onCancel}
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

        {mode === "list" && (
          <Button
            variant="default"
            className="text-white bg-my-primary"
            onClick={onAdd}
          >
            <Plus className="h-10 w-10" />
            Add Product
          </Button>
        )}

        {(mode === "add" || mode === "edit") && (
          <Button
            variant="default"
            className={
              isFormComplete
                ? "text-white bg-my-primary"
                : "text-gray-400 bg-gray-100 cursor-not-allowed"
            }
            disabled={!isFormComplete}
            onClick={isFormComplete ? onSave : undefined}
          >
            <Plus className="h-10 w-10" />
            {mode === "add" ? "Add Product" : "Save Changes"}
          </Button>
        )}
      </div>
    </div>
  );
}
