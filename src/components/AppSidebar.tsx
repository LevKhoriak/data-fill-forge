import { Link, useLocation, useMatch } from "react-router-dom";
import {
  FileText,
  FileSpreadsheet,
  Settings,
  Table,
  Palette,
  Download,
  Upload,
  Languages,
  Globe
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
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { titleKey: "sidebar.uploadFiles", url: "/", icon: Upload },
  { titleKey: "sidebar.dataPreview", url: "/preview", icon: FileSpreadsheet },
  { titleKey: "sidebar.templateSelection", url: "/mapping", icon: Settings },
  { titleKey: "sidebar.editData", url: "/edit", icon: Table },
  { titleKey: "sidebar.styling", url: "/styling", icon: Palette },
  { titleKey: "sidebar.export", url: "/export", icon: Download },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  const { language, setLanguage, t } = useLanguage();
  
  const handleLanguageChange = (newLanguage: 'en' | 'ru') => {
    setLanguage(newLanguage);
  };

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {!collapsed && (
                <h1 className="font-semibold text-lg">{t('sidebar.title')}</h1>
              )}
            </div>
            {!collapsed && <LanguageSwitch />}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>{t('sidebar.workflow')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                  const match = useMatch({ path: item.url, end: true });
                  const cls = match
                    ? "bg-primary text-primary-foreground font-medium shadow-soft"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors";

                return (
                <SidebarMenuItem key={item.titleKey}>
                  <SidebarMenuButton asChild className={cls}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{t(item.titleKey)}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Language toggle for collapsed state */}
        {collapsed && (
          <div className="mt-auto p-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 w-full"
                  title={t('common.language')}
                >
                  <Languages className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="right">
                <DropdownMenuItem
                  onClick={() => handleLanguageChange('en')}
                  className={language === 'en' ? 'bg-accent' : ''}
                >
                  🇺🇸 {t('common.english')}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLanguageChange('ru')}
                  className={language === 'ru' ? 'bg-accent' : ''}
                >
                  🇷🇺 {t('common.russian')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}