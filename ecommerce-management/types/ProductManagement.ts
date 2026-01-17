export type UserMenu = {
  name: string;
  label: string;
  groups: MenuGroup[];
};

type MenuItem = {
  label: string;
  shortcut?: string;
  type?: string;
  disabled?: boolean;
  subItems?: MenuItem[];
};

type MenuGroup = {
  items: MenuItem[];
};

export type ProductTable = {
  id: number;
  title: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  thumbnail: string;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
};

import { UseFormReturn } from "react-hook-form";

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface ProductFormData {
  title: string;
  description: string;
  basePrice: string;
  discountPercentage: string;
  sku: string;
  quantity: string;
  category: string;
}

export interface AddProductFormProps {
  form: UseFormReturn<ProductFormData>;
}
