"use client";

import { useState } from "react";
import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";
import Toolbar from "@/components/productManagement/toolbar/Toolbar";
import ProductTab from "@/components/productManagement/productTab/ProductTab";
import AddProductForm from "@/components/productManagement/AddProductForm";

export default function ProductManagement() {
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  return (
    <div className="px-3">
      <ProductManagementHeader />
      <Toolbar
        isAddingProduct={isAddingProduct}
        onToggleAddingProduct={() => setIsAddingProduct(!isAddingProduct)}
      />
      {isAddingProduct ? <AddProductForm /> : <ProductTab />}
    </div>
  );
}
