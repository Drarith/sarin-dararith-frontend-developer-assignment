import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function NotificationDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="p-4 text-sm text-muted-foreground whitespace-nowrap">
          No new notifications
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
