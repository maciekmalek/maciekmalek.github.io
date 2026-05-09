"use client";

import * as React from "react";

import { Nav } from "@/components/nav";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import {
  ContactRoundIcon,
  FileUserIcon,
  GitPullRequestArrowIcon,
  HouseIcon,
  LayersPlusIcon,
} from "lucide-react";

type LinkData = {
  name: string;
  url: string;
  icon: React.ReactNode;
  isExternal?: boolean;
};
const data: LinkData[] = [
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
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maciek-malek/",
    icon: <ContactRoundIcon />,
    isExternal: true,
  },
  {
    name: "CV",
    url: "/cv",
    icon: <FileUserIcon />,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <Nav nav={data} />
      </SidebarContent>
    </Sidebar>
  );
}
