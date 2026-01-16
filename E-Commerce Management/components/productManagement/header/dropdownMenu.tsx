import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { UserMenu } from "@/types/ProductManagement";

const userMenuDetails: UserMenu = {
  name: "Nik's Shop",
  label: "My Account",
  groups: [
    {
      items: [
        { label: "Profile", shortcut: "⇧⌘P" },
        { label: "Billing", shortcut: "⌘B" },
        { label: "Settings", shortcut: "⌘S" },
      ],
    },
    {
      items: [{ label: "Support" }, { label: "API", disabled: true }],
    },
    {
      items: [{ label: "Log out", shortcut: "⇧⌘Q" }],
    },
  ],
};

export default function HeaderDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-my-secondary">
        <Button variant="outline">
          {userMenuDetails.name}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 " align="start">
        <DropdownMenuLabel>{userMenuDetails.label}</DropdownMenuLabel>
        {userMenuDetails.groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {groupIndex > 0 && <DropdownMenuSeparator />}
            <DropdownMenuGroup>
              {group.items.map((item, itemIndex) => (
                <DropdownMenuItem key={itemIndex} disabled={item.disabled}>
                  {item.label}
                  {item.shortcut && (
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
