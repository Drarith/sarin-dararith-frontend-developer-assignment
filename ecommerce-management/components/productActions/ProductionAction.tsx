"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import Link from "next/link";
import { deleteProduct } from "@/lib/https";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ProductActionsProps {
  id: string;
}

// 1. Renamed for clarity
export function ProductActions({ id }: ProductActionsProps) {
  const [open, setOpen] = useState(false); 
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => deleteProduct(BASE_URL || "", id),
    onSuccess: () => {
      toast.success("Deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setOpen(false); 
    },
    onError: () => {
      toast.error("Failed to delete");
    },
  });

  return (
    <div className="flex items-center gap-2">
      {/* 2. Fixed Link: Removed inner <button> */}
      <Link 
        href={`/products-management/edit/${id}`}
        className="flex items-center justify-center text-gray-500 hover:text-my-primary transition-colors"
      >
        <Pencil className="h-4 w-4" />
      </Link>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <button className="flex items-center justify-center text-gray-500 hover:text-red-600 transition-colors">
            <Trash2 className="h-4 w-4" />
          </button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              product from your database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleteMutation.isPending}>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              disabled={deleteMutation.isPending}
              onClick={(e) => {
                e.preventDefault();
                deleteMutation.mutate();
              }}
              className="bg-red-600 hover:bg-red-700 focus:ring-red-600 text-white"
            >
              {deleteMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}