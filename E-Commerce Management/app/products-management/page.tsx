import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";

export default function ProductManagement() {
  return (
    <>
      <ProductManagementHeader />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-4xl font-bold">Product Management</h1>
      </div>
    </>
  );
}
