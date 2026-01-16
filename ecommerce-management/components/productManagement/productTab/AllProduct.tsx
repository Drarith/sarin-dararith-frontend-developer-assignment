"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import React, { useState } from "react";
import DataTablePagination from "@/components/pagination/Pagination";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const PAGE_LIMIT = 10;
const SELECT = "title,price,sku,stock,category,thumbnail,meta";

export default function AllProduct() {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", skip],
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}/products?limit=${PAGE_LIMIT}&skip=${skip}&select=${SELECT}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  function handlePageIndexClick(page: number) {
    setSkip(page);
  }

  console.log("Fetched data:", data, isLoading, error);
  console.log("Current skip value:", skip);
  return (
    <div>
      <DataTable columns={columns} data={data?.products ?? []} />
      <div className="flex items-center justify-end space-x-2 py-4 px-5">
        <div className="space-x-2">

          <DataTablePagination
            pageIndex={skip}
            pageCount={Math.ceil((data?.total ?? 0) / PAGE_LIMIT)}
            setPageIndex={handlePageIndexClick}
          />
        </div>
      </div>
    </div>
  );
}
