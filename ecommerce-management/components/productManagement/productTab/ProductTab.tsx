import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { tabs, ProductTabItems } from "@/config/productManagementTabs";
import AllProduct from "./AllProduct";

export default function ProductTab() {
  return (
    <>
      <Tabs defaultValue={ProductTabItems.AllProducts} className="w-full">
        <TabsList>
          {tabs.map((tab) => {
            return (
              <TabsTrigger key={tab} value={tab}>
                {tab}
              </TabsTrigger>
            );
          })}
        </TabsList>
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
    </>
  );
}
