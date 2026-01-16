import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { tabs, ProductTabItems } from "@/config/productManagementTabs";

export default function ProductTab() {
  return (
    <>
      <Tabs defaultValue={ProductTabItems.AllProducts} className="w-100">
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
          All Products
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
