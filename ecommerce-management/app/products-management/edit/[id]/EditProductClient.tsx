"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";
import Toolbar from "@/components/productManagement/Form/Toolbar";
import AddProductForm from "@/components/productManagement/Form/AddProductForm";
import { productSchema } from "@/validation/productFormValidation";
import { ProductFormData, ProductTable } from "@/types/ProductManagement";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { putProduct } from "@/lib/https";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface EditProductClientProps {
  initialData: ProductTable;
  id: string;
}

export default function EditProductClient({
  initialData,
  id,
}: EditProductClientProps) {
  const router = useRouter();

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    mode: "onChange",
    defaultValues: {
      title: initialData.title,
      description: initialData.description || "",
      basePrice: String(initialData.price),
      discountPercentage: String(initialData.discountPercentage || "0"),
      sku: initialData.sku,
      quantity: String(initialData.stock),
      category: initialData.category,
    },
  });

  const { isValid } = form.formState;

  const updateProductMutation = useMutation({
    mutationFn: (data: ProductFormData) => putProduct(BASE_URL || "", id, data),
    onSuccess: () => {
      toast.success("Product updated successfully");
      router.push("/products-management");
    },
    onError: () => {
      toast.error("Failed to update product.");
    },
  });

  const onSubmit = (data: ProductFormData) => {
    updateProductMutation.mutate(data);
  };

  const handleSaveProduct = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="px-3">
      <ProductManagementHeader />
      <Toolbar
        mode="edit"
        onCancel={() => router.push("/products-management")}
        isFormComplete={isValid}
        onSave={handleSaveProduct}
        isSubmitting={updateProductMutation.isPending}
      />
      <AddProductForm form={form} />
    </div>
  );
}
