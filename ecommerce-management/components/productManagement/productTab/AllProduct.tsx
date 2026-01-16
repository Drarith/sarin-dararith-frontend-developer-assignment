"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const PAGE_LIMIT = 10;
const SELECT = "title,price,sku,stock,category,thumbnail,meta";

export default function AllProduct() {
  const [skip, setSkip] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
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

  console.log("Fetched data:", data, isLoading, error);
  return (
    <div>
      <DataTable columns={columns} data={data?.products ?? []} />
    </div>
  );
}
