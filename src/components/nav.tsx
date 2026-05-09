"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export function Nav({
  nav,
}: {
  nav: {
    name: string;
    url: string;
    icon: React.ReactNode;
    isExternal?: boolean;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {nav.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <a href={item.url}>
                {item.icon}
                <span>{item.name}</span>
                {item.isExternal && (
                  <SidebarMenuBadge>
                    <SquareArrowOutUpRightIcon />
                  </SidebarMenuBadge>
                )}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
