import { getJSON } from "@/lib/https";
import EditProductClient from "./EditProductClient";
import type { ProductTable } from "@/types/ProductManagement";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = await params; 

  const product = await getJSON<ProductTable>(`${BASE_URL}/products/${id}`);

  return <EditProductClient initialData={product} id={id} />;
}