import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs, ProductTabItems } from "@/config/productManagementTabs";
import AllProduct from "./AllProduct";
import ProductFilters from "./ProductFilters";

export default function ProductTab() {
  return (
    <div className="w-full">
      <Tabs defaultValue={ProductTabItems.AllProducts} className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList className="bg-transparent border">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="font-light data-[state=active]:bg-my-primary/20
    data-[state=active]:text-my-primary
    data-[state=active]:shadow-sm"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <ProductFilters />
        </div>
        <TabsContent value={ProductTabItems.AllProducts}>
          <AllProduct />
        </TabsContent>

        <TabsContent value={ProductTabItems.Published}>
          Published page content
        </TabsContent>
        <TabsContent value={ProductTabItems.LowStock}>
          Low Stock page content
        </TabsContent>
        <TabsContent value={ProductTabItems.Draft}>
          Draft page content
        </TabsContent>
      </Tabs>
    </div>
  );
}
