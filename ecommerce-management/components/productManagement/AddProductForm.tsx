"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getJSON } from "@/lib/https";
import type {
  Category,
  ProductFormData,
  AddProductFormProps,
} from "@/types/ProductManagement";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AddProductForm({
  onFormComplete,
}: AddProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: "",
    description: "",
    basePrice: "",
    discountPercentage: "",
    sku: "",
    quantity: "",
    category: "",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getJSON<Category[]>(`${BASE_URL}/products/categories`),
  });

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  useEffect(() => {
    onFormComplete?.(isFormComplete);
  }, [isFormComplete, onFormComplete]);

  const handleInputChange =
    (field: keyof ProductFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  return (
    <div className="w-[1128px] h-[800px] flex gap-6">
      <div className="flex flex-col gap-6 mb-10 flex-1">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">General Information</h2>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">
                Product Name
              </label>
              <Input
                id="title"
                placeholder="Type product name here..."
                value={formData.title}
                onChange={handleInputChange("title")}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Type product description here..."
                className="min-h-[150px]"
                value={formData.description}
                onChange={handleInputChange("description")}
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          {" "}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Pricing</h2>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="basePrice" className="text-sm font-medium">
                Base Price
              </label>
              <Input
                id="basePrice"
                placeholder="Type base price here..."
                value={formData.basePrice}
                onChange={handleInputChange("basePrice")}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="discountPercentage"
                className="text-sm font-medium"
              >
                Discount Percentage (%)
              </label>
              <Input
                id="discountPercentage"
                placeholder="Type discount percentage here..."
                value={formData.discountPercentage}
                onChange={handleInputChange("discountPercentage")}
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          {" "}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Inventory</h2>
          </div>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label htmlFor="sku" className="text-sm font-medium">
                  SKU
                </label>
                <Input
                  id="sku"
                  placeholder="Type product SKU here..."
                  value={formData.sku}
                  onChange={handleInputChange("sku")}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity
                </label>
                <Input
                  id="quantity"
                  placeholder="Type product quantity here..."
                  value={formData.quantity}
                  onChange={handleInputChange("quantity")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Category</h2>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">
                Product Category
              </label>
              <Select
                value={formData.category}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {isLoading ? (
                    <SelectItem value="loading" disabled>
                      Loading...
                    </SelectItem>
                  ) : (
                    data?.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
