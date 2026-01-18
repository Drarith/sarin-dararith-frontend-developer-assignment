"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";
import Toolbar from "@/components/productManagement/Form/Toolbar";
import AddProductForm from "@/components/productManagement/Form/AddProductForm";
import { productSchema } from "@/validation/productFormValidation";
import { ProductFormData } from "@/types/ProductManagement";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { postProduct } from "@/lib/https";

const BASE_URL = "https://dummyjson.com";

export default function AddProductPage() {
  const router = useRouter();

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      basePrice: "",
      discountPercentage: "",
      sku: "",
      quantity: "",
      category: "",
    },
  });

  const { isValid } = form.formState;

  const addProductMutation = useMutation({
    mutationFn: (data: ProductFormData) => postProduct(BASE_URL || "", data),
    onSuccess: () => {
      toast.success("Product added successfully");
      form.reset();
    },
    onError: () => {
      toast.error("Failed to add product. Please try again.");
    },
  });

  const onSubmit = (data: ProductFormData) => {
    addProductMutation.mutate(data);
  };

  const handleSaveProduct = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="px-3">
      <ProductManagementHeader />
      <Toolbar
        mode="add"
        onCancel={() => router.push("/products-management")}
        isFormComplete={isValid}
        onSave={handleSaveProduct}
        isSubmitting={addProductMutation.isPending}
      />
      <AddProductForm form={form} />
    </div>
  );
}
