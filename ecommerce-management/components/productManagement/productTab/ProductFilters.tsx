import { Search, Calendar, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductFilters() {
  return (
    <div className="flex items-center gap-2 w-full min-[900px]:w-auto">
      
      <div className="relative flex-1 min-[900px]:flex-none">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-9 w-full min-[900px]:w-[250px] bg-background"
        />
      </div>

      <Button 
        variant="outline" 
        className="w-10 px-0 min-[900px]:w-[180px] min-[900px]:justify-start min-[900px]:px-4 text-left font-normal bg-background text-muted-foreground"
      >
        <Calendar className="h-4 w-4 min-[900px]:mr-2" />
        <span className="hidden min-[900px]:inline">Select Date</span>
      </Button>

      <Button 
        variant="outline" 
        className="w-10 px-0 min-[900px]:w-auto min-[900px]:px-4 bg-background"
      >
        <SlidersHorizontal className="h-4 w-4 min-[900px]:mr-2" />
        <span className="hidden min-[900px]:inline">Filters</span>
      </Button>
    </div>
  );
}