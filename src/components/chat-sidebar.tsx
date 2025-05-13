"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
} from "@/components/ui/sidebar";
import { Chats } from "@/app/console/page";
import { capitalize, truncateText } from "@/lib/helper";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function ChatSidebar({
  chats,
  setChat,
  ...props
}: {
  chats: Chats[];
  setChat: (index: number) => void;
  props?: React.ComponentProps<typeof Sidebar>;
}) {
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">Inbox</div>
            <Label className="flex items-center gap-2 text-sm">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {chats.map((chat, index) => (
                <a
                  href="#"
                  onClick={() => setChat(index)}
                  key={index}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                >
                  <div className="flex w-full items-center gap-2">
                    <span className="font-medium">
                      {capitalize(chat.head.opponent)}
                    </span>{" "}
                    <span className="ml-auto text-xs">
                      {chat.data.at(-1)?.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {chat.data.at(-1)?.fromSelf && (
                      <span className="text-xs">You: </span>
                    )}
                    <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
                      {truncateText(chat.data.at(-1)?.body as string, 40)}
                    </span>
                  </div>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
