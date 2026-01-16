import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";
import Toolbar from "@/components/productManagement/toolbar/Toolbar";

export default function ProductManagement() {
  return (
    <>
      <ProductManagementHeader />
      <Toolbar />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-4xl font-bold">Product Management</h1>
      </div>
    </>
  );
}
