"use client";

import * as React from "react";

import { Nav } from "@/components/nav";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import {
  GitPullRequestArrowIcon,
  HouseIcon,
  LayersPlusIcon,
} from "lucide-react";

// This is sample data.
const data = {
  projects: [
    {
      name: "Home",
      url: "/",
      icon: <HouseIcon />,
    },
    {
      name: "Github",
      url: "/github",
      icon: <GitPullRequestArrowIcon />,
    },
    {
      name: "Tech Stack",
      url: "/tech-stack",
      icon: <LayersPlusIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <Nav nav={data.projects} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
