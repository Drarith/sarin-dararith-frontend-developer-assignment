import * as z from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  basePrice: z.string().min(1, "Price is required"),
  discountPercentage: z.string().min(1, "Discount is required"),
  sku: z.string().min(1, "SKU is required"),
  quantity: z.string().min(1, "Quantity is required"),
  category: z.string().min(1, "Category is required"),
});