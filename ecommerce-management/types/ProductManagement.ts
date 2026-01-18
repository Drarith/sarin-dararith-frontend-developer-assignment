import { ColumnDef } from "@tanstack/table-core";
import { UseFormReturn } from "react-hook-form";

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
  description?: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
};

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

export interface EditProductClientProps {
  initialData: ProductTable;
  id: string;
}

export interface DataTablePaginationProps {
  pageIndex: number;
  pageCount: number;
  setPageIndex: (page: number) => void;
}

export interface ProductActionsProps {
  id: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageIndex?: number;
  pageCount?: number;
  setPageIndex?: (page: number) => void;
  skip?: number;
  pageLimit?: number;
  total?: number;
}
