// "use client"; // <--- Ensure this is at the top

// import Link from "next/link";
// import { usePathname } from "next/navigation"; // <--- Import this

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// export default function AppSidebar() {
//   const pathname = usePathname();

//   return (
//     <Sidebar className="text-white/80">
//       <SidebarContent className="bg-my-primary ">
//         <SidebarGroupContent>
//           <SidebarGroupLabel className="mb-10 mt-5 px-7 text-lg text-white">
//             {" "}
//             <div className="w-6 h-6 rounded-full mr-2 border-6 border-white bg-transparent"></div>
//             Logo
//           </SidebarGroupLabel>
//           <SidebarMenu className="gap-6 px-6">
//             {items.map((item) => (
//               <SidebarMenuItem key={item.title}>
//                 <SidebarMenuButton asChild isActive={pathname === item.url} >
//                   <Link href={item.url}>
//                     <item.icon />
//                     <span>{item.title}</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             ))}
//           </SidebarMenu>
//         </SidebarGroupContent>
//         {/* ... */}
//       </SidebarContent>
//     </Sidebar>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  FileBarChart,
  Settings,
  LogOut,
} from "lucide-react";
import { items } from "@/config/sidebarItems";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-72 bg-my-primary text-white flex flex-col shadow-xl">
      <div className="h-20 flex items-center px-8 border-b border-blue-500/30">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full mr-2 border-6 border-white bg-transparent"></div>
          <span className="text-xl font-bold tracking-wide">Logo</span>
        </div>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-1">
        {items.map((item) => {
         
          const isActive = pathname === item.url;

          return (
            <Link
              key={item.url}
              href={item.url}
              className={`
                group flex items-center gap-4 px-6 py-3.5 transition-all duration-200 ease-in-out
                border-l-4
                ${
                  isActive
                    ? "border-white  text-white" 
                    : "border-transparent text-blue-100 hover:bg-white/5 hover:text-white" 
                }
              `}
            >
              <item.icon
                className={`w-5 h-5 transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-my-primary-200 group-hover:text-white"
                }`}
              />
              <span className="font-medium text-sm tracking-wide">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
