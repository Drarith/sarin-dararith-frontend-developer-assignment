"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import type { ProductTable } from "@/types/ProductManagement";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductActions } from "@/components/productActions/ProductionAction";

export const columns: ColumnDef<ProductTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
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
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: () => (
      <span className="flex justify-between">
        Product <span className="text-black/70 mr-3">&#9660;</span>
      </span>
    ),
    cell: ({ row }) => {
      const image = row.original.thumbnail;
      const title = row.getValue("title") as string;

      return (
        <div className="flex items-center gap-4 min-w-[150px]">
          <Image
            src={image}
            alt={title}
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover border"
          />
          <span className="font-medium truncate">{title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "sku",
    header: () => <span className="hidden md:block">SKU</span>,
    cell: ({ row }) => (
      <span className="hidden md:block text-my-primary">
        {row.getValue("sku")}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: () => <span className="hidden md:block">Category</span>,
    cell: ({ row }) => (
      <span className="hidden md:block">{row.getValue("category")}</span>
    ),
  },
  {
    accessorKey: "stock",
    header: () => <span className="hidden md:block">Stock</span>,
    cell: ({ row }) => (
      <span className="hidden md:block">{row.getValue("stock")}</span>
    ),

  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => <span>${(getValue() as number).toFixed(2)}</span>,
  },
  {
    accessorKey: "added",
    header: () => <span className="hidden lg:block">Added</span>,
    accessorFn: (row) => row.meta?.createdAt,
    cell: ({ row }) => {
      const date = new Date(row.getValue("added"));
      return (
        <span className="hidden lg:block">
          {date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const product = row.original;
      return <ProductActions id={String(product.id)} />;
    },
  },
];
