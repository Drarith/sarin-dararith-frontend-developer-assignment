import ProductManagementHeader from "@/components/productManagement/header/ProductManagementHeader";
import Toolbar from "@/components/productManagement/toolbar/Toolbar";
import ProductTab from "@/components/productManagement/productTab/ProductTab";

export default function ProductManagement() {
  return (
    <div className="px-3">
      <ProductManagementHeader />
      <Toolbar />
      <ProductTab />
    </div>
  );
}
