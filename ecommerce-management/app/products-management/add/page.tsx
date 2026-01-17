"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";
import Toolbar from "@/components/productManagement/toolbar/Toolbar";
import AddProductForm from "@/components/productManagement/AddProductForm";

export default function AddProductPage() {
  const router = useRouter();
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleSaveProduct = () => {
    console.log("Saving product data...");
    router.push("/products-management");
  };

  return (
    <div className="px-3">
      <ProductManagementHeader />
      <Toolbar
        mode="add"
        onCancel={() => router.push("/products-management")}
        isFormComplete={isFormComplete}
        onSave={handleSaveProduct}
      />
      <AddProductForm onFormComplete={setIsFormComplete} />
    </div>
  );
}
