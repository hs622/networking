"use client";

import * as React from "react";

import { Sidebar } from "@/components/ui/sidebar";
import { Chats } from "@/app/messaging/page";
import { capitalize, truncateText } from "@/lib/helper";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

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
    <div
      className={
        "bg-sidebar text-sidebar-foreground flex h-max w-[360px] flex-col overflow-hidden "
      }
      {...props}
    >
      <div
        className={
          "bg-sidebar text-sidebar-foreground flex h-full flex-col flex-1 md:flex"
        }
      >
        {/* header */}
        <div className="flex flex-col gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">Inbox</div>
            <Label className="flex items-center gap-2 text-sm">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <Input
            placeholder="Type to search..."
            className={cn("bg-background h-8 w-full shadow-none")}
          />
        </div>

        {/* body */}
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
          )}
        >
          <div className={cn("relative flex w-full min-w-0 flex-col p-2 px-0")}>
            <div className={cn("w-full text-sm")}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
