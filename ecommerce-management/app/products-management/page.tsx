"use client";

import { useRouter } from "next/navigation";
import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";
import Toolbar from "@/components/productManagement/Form/Toolbar";
import ProductTab from "@/components/productManagement/productTab/ProductTab";

export default function ProductManagement() {
  const router = useRouter();

  return (
    <div className="px-3">
      <ProductManagementHeader />
      <Toolbar
        mode="list"
        onAdd={() => router.push("/products-management/add")}
      />

      <ProductTab />
    </div>
  );
}
