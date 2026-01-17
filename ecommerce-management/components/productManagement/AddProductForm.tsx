"use client";

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

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Category {
  slug: string;
  name: string;
  url: string;
}

export default function AddProductForm() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getJSON<Category[]>(`${BASE_URL}/products/categories`),
  });
  console.log("Categories data:", data?.[0], isLoading, error);
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
              <Input id="title" placeholder="Type product name here..." />
            </div>

            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Type product description here..."
                className="min-h-[150px]"
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
              <label htmlFor="title" className="text-sm font-medium">
                Base Price
              </label>
              <Input id="basePrice" placeholder="Type base price here..." />
            </div>
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">
                Discount Percentage (%)
              </label>
              <Input
                id="discountPercentage"
                placeholder="Type discount percentage here..."
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
                <Input id="sku" placeholder="Type product SKU here..." />
              </div>
              <div className="grid gap-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Quantity
                </label>
                <Input
                  id="quantity"
                  placeholder="Type product quantity here..."
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
              <Select>
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
                      <SelectItem key={category.name} value={category.name}>
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
