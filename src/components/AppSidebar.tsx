import { Link, useLocation, useMatch } from "react-router-dom";
import {
  FileText,
  FileSpreadsheet,
  Settings,
  Table,
  Palette,
  Download,
  Upload
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Upload Files", url: "/", icon: Upload },
  { title: "Data Preview", url: "/preview", icon: FileSpreadsheet },
  { title: "Template Selection", url: "/mapping", icon: Settings },
  { title: "Edit Data", url: "/edit", icon: Table },
  { title: "Styling", url: "/styling", icon: Palette },
  { title: "Export", url: "/export", icon: Download },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  
  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            {!collapsed && (
              <h1 className="font-semibold text-lg">PDF Filler</h1>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Workflow</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                  const match = useMatch({ path: item.url, end: true });
                  const cls = match
                    ? "bg-primary text-primary-foreground font-medium shadow-soft"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors";

                return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={cls}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}