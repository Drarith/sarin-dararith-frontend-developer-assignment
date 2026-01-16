"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import type { ProductTable } from "@/types/ProductManagement";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<ProductTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          // Handle when some but not all rows are selected
          // set state to indeterminate to handle Minus sign logic in Checkbox component
          table.getIsSomePageRowsSelected() && "indeterminate"
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Product",
    cell: ({ row }) => {
      // Going to have to get the image from the row original data which returned the entire JSON
      const image = row.original.thumbnail;
      const title = row.getValue("title") as string;

      return (
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={title}
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover border"
          />

          <span className="font-medium">{title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => `$${(getValue() as number).toFixed(2)}`,
  },
  {
    accessorKey: "added",
    header: "Added",
    accessorFn: (row) => row.meta?.createdAt,
    cell: ({ row }) => {
      const date = new Date(row.getValue("added"));
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
