"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getJSON } from "@/lib/https";
import type { Category, AddProductFormProps } from "@/types/ProductManagement";

const BASE_URL = "https://dummyjson.com";

export default function AddProductForm({ form }: AddProductFormProps) {
  const {
    register,
    control,
    formState: { errors },
  } = form;

  const { data, isLoading, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getJSON<Category[]>(`${BASE_URL}/products/categories`),
  });

  return (
    <div className="flex gap-6">
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
                className="bg-black/2"
                id="title"
                placeholder="Type product name here..."
                {...register("title")}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Type product description here..."
                className="min-h-[150px] bg-black/2"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
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
                className="bg-black/2"
                id="basePrice"
                type="number"
                placeholder="$ Type base price here..."
                {...register("basePrice")}
              />
              {errors.basePrice && (
                <p className="text-sm text-red-500">
                  {errors.basePrice.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="discountPercentage"
                className="text-sm font-medium"
              >
                Discount Percentage (%)
              </label>
              <Input
                className="bg-black/2"
                id="discountPercentage"
                type="number"
                placeholder="Type discount percentage here..."
                {...register("discountPercentage")}
              />
              {errors.discountPercentage && (
                <p className="text-sm text-red-500">
                  {errors.discountPercentage.message}
                </p>
              )}
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
                  className="bg-black/2"
                  id="sku"
                  placeholder="Type product SKU here..."
                  {...register("sku")}
                />
                {errors.sku && (
                  <p className="text-sm text-red-500">{errors.sku.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity
                </label>
                <Input
                  className="bg-black/2"
                  id="quantity"
                  type="number"
                  placeholder="Type product quantity here..."
                  {...register("quantity")}
                />
                {errors.quantity && (
                  <p className="text-sm text-red-500">
                    {errors.quantity.message}
                  </p>
                )}
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
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-black/2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent position="popper">
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
                )}
              />
              {errors.category && (
                <p className="text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
