import { ProductFormData } from "@/types/ProductManagement";

export async function getJSON<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("getJSON failed:", error);
    throw error;
  }
}

export async function postProduct(
  url: string,
  data: ProductFormData
): Promise<void> {
  try {
    const response = await fetch(`${url}/products/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to add product");
    }
  } catch (error) {
    console.error("postProduct failed:", error);
    throw error;
  }
}
