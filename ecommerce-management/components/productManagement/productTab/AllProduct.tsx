"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";
import { getJSON } from "@/lib/https";
import type { ProductTable } from "@/types/ProductManagement";
import ProductTableSkeleton from "@/components/skeletons/ProductTableSkeleton";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const PAGE_LIMIT = 10;
const SELECT = "title,price,sku,stock,category,thumbnail,meta";

export default function AllProduct() {
  const [skip, setSkip] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ["products", skip],
    queryFn: () =>
      getJSON<{
        products: ProductTable[];
        total: number;
      }>(
        `${BASE_URL}/products?limit=${PAGE_LIMIT}&skip=${skip}&select=${SELECT}`,
      ),
  });

  function handlePageIndexClick(page: number) {
    setSkip(page);
  }

  return (
  
      <div className="flex-1 overflow-auto">
        {isLoading ? (
          <ProductTableSkeleton />
        ) : (
          <DataTable
            columns={columns}
            data={data?.products ?? []}
            pageIndex={skip}
            pageCount={Math.ceil((data?.total ?? 0) / PAGE_LIMIT)}
            setPageIndex={handlePageIndexClick}
            skip={skip}
            pageLimit={PAGE_LIMIT}
            total={data?.total ?? 0}
          />
        )}
      </div>
    
  );
}
