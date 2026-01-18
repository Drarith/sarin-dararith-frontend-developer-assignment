import {
  LayoutDashboard,
  BoxIcon,
  Handbag,
  Users,
  FolderClosed
} from "lucide-react";

export const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Product Management",
    url: "/products-management",
    icon: BoxIcon,
  },
  {
    title: "Order Management",
    url: "/orders-management",
    icon: Handbag,
  },
  {
    title: "Customer Management",
    url: "/customers-management",
    icon: Users,
  },
  {
    title: "Reports",
    url: "/reports-management",
    icon: FolderClosed,
  },
];