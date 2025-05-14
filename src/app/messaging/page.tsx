"use client";

import { ChatSidebar } from "@/components/chat-sidebar";
import Chatbox from "@/components/chat-box";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";

export interface ChatHeader {
  id: string;
  opponent: string;
}

export interface ChatData {
  id: string;
  body: string;
  timestamp: string;
  fromSelf: boolean;
}

export type Chats = {
  head: ChatHeader;
  data: ChatData[];
};

const chatsData: Chats[] = [
  {
    head: {
      id: "",
      opponent: "hassan ali",
    },
    data: [
      {
        id: "645a9c18f1c2a1d3b4e9fa01",
        body: "Hey! Long time no see. How have you been?",
        timestamp: "2025-05-11T09:00:12Z",
        fromSelf: true,
      },
      {
        id: "645a9c24f1c2a1d3b4e9fa02",
        body: "Hey! Yeah, it’s been a while. I’ve been good, just really busy with work lately.",
        timestamp: "2025-05-11T09:01:08Z",
        fromSelf: false,
      },
      {
        id: "645a9c31f1c2a1d3b4e9fa03",
        body: "Totally get that. Same here. Deadlines are killing me this month.",
        timestamp: "2025-05-11T09:02:15Z",
        fromSelf: true,
      },
      {
        id: "645a9c3cf1c2a1d3b4e9fa04",
        body: "Ugh, tell me about it. I barely had time to sleep last week.",
        timestamp: "2025-05-11T09:02:59Z",
        fromSelf: false,
      },
      {
        id: "645a9c49f1c2a1d3b4e9fa05",
        body: "That sounds rough. Do you at least have the weekend off?",
        timestamp: "2025-05-11T09:03:40Z",
        fromSelf: true,
      },
      {
        id: "645a9c56f1c2a1d3b4e9fa06",
        body: "Sort of. I have a few things to wrap up Saturday morning, but I’m free after that.",
        timestamp: "2025-05-11T09:04:12Z",
        fromSelf: false,
      },
      {
        id: "645a9c63f1c2a1d3b4e9fa07",
        body: "Nice! Want to grab coffee or lunch on Sunday?",
        timestamp: "2025-05-11T09:04:48Z",
        fromSelf: true,
      },
      {
        id: "645a9c6ff1c2a1d3b4e9fa08",
        body: "I’d love that. There’s this new cafe near the park—heard great things about it.",
        timestamp: "2025-05-11T09:05:30Z",
        fromSelf: false,
      },
      {
        id: "645a9c7cf1c2a1d3b4e9fa09",
        body: "Perfect! Let’s meet there around 1pm?",
        timestamp: "2025-05-11T09:06:05Z",
        fromSelf: true,
      },
      {
        id: "645a9c88f1c2a1d3b4e9fa0a",
        body: "Sounds like a plan. Looking forward to catching up 😊",
        timestamp: "2025-05-11T09:06:37Z",
        fromSelf: false,
      },
    ],
  },
  {
    head: {
      id: "",
      opponent: "alishah saleem",
    },
    data: [
      {
        id: "645a9c18f1c2a1d3b4e9fa01",
        body: "Hey! Long time no see. How have you been?",
        timestamp: "2025-05-11T09:00:12Z",
        fromSelf: true,
      },
      {
        id: "645a9c24f1c2a1d3b4e9fa02",
        body: "Hey! Yeah, it’s been a while. I’ve been good, just really busy with work lately.",
        timestamp: "2025-05-11T09:01:08Z",
        fromSelf: false,
      },
      {
        id: "645a9c31f1c2a1d3b4e9fa03",
        body: "Totally get that. Same here. Deadlines are killing me this month.",
        timestamp: "2025-05-11T09:02:15Z",
        fromSelf: true,
      },
      {
        id: "645a9c3cf1c2a1d3b4e9fa04",
        body: "Ugh, tell me about it. I barely had time to sleep last week.",
        timestamp: "2025-05-11T09:02:59Z",
        fromSelf: false,
      },
      {
        id: "645a9c49f1c2a1d3b4e9fa05",
        body: "That sounds rough. Do you at least have the weekend off?",
        timestamp: "2025-05-11T09:03:40Z",
        fromSelf: true,
      },
      {
        id: "645a9c56f1c2a1d3b4e9fa06",
        body: "Sort of. I have a few things to wrap up Saturday morning, but I’m free after that.",
        timestamp: "2025-05-11T09:04:12Z",
        fromSelf: false,
      },
      {
        id: "645a9c63f1c2a1d3b4e9fa07",
        body: "Nice! Want to grab coffee or lunch on Sunday?",
        timestamp: "2025-05-11T09:04:48Z",
        fromSelf: true,
      },
      {
        id: "645a9c6ff1c2a1d3b4e9fa08",
        body: "I’d love that. There’s this new cafe near the park—heard great things about it.",
        timestamp: "2025-05-11T09:05:30Z",
        fromSelf: false,
      },
      {
        id: "645a9c7cf1c2a1d3b4e9fa09",
        body: "Perfect! Let’s meet there around 1pm?",
        timestamp: "2025-05-11T09:06:05Z",
        fromSelf: true,
      },
    ],
  },
  {
    head: {
      id: "",
      opponent: "ferid hamid",
    },
    data: [
      {
        id: "645a9c18f1c2a1d3b4e9fa01",
        body: "Hey! Long time no see. How have you been?",
        timestamp: "2025-05-11T09:00:12Z",
        fromSelf: true,
      },
      {
        id: "645a9c24f1c2a1d3b4e9fa02",
        body: "Hey! Yeah, it’s been a while. I’ve been good, just really busy with work lately.",
        timestamp: "2025-05-11T09:01:08Z",
        fromSelf: false,
      },
      {
        id: "645a9c31f1c2a1d3b4e9fa03",
        body: "Totally get that. Same here. Deadlines are killing me this month.",
        timestamp: "2025-05-11T09:02:15Z",
        fromSelf: true,
      },
      {
        id: "645a9c3cf1c2a1d3b4e9fa04",
        body: "Ugh, tell me about it. I barely had time to sleep last week.",
        timestamp: "2025-05-11T09:02:59Z",
        fromSelf: false,
      },
      {
        id: "645a9c49f1c2a1d3b4e9fa05",
        body: "That sounds rough. Do you at least have the weekend off?",
        timestamp: "2025-05-11T09:03:40Z",
        fromSelf: true,
      },
      {
        id: "645a9c56f1c2a1d3b4e9fa06",
        body: "Sort of. I have a few things to wrap up Saturday morning, but I’m free after that.",
        timestamp: "2025-05-11T09:04:12Z",
        fromSelf: false,
      },
      {
        id: "645a9c63f1c2a1d3b4e9fa07",
        body: "Nice! Want to grab coffee or lunch on Sunday?",
        timestamp: "2025-05-11T09:04:48Z",
        fromSelf: true,
      },
      {
        id: "645a9c6ff1c2a1d3b4e9fa08",
        body: "I’d love that. There’s this new cafe near the park—heard great things about it.",
        timestamp: "2025-05-11T09:05:30Z",
        fromSelf: false,
      },
      {
        id: "645a9c7cf1c2a1d3b4e9fa09",
        body: "Perfect! Let’s meet there around 1pm?",
        timestamp: "2025-05-11T09:06:05Z",
        fromSelf: true,
      },
      {
        id: "645a9c56f1c2a1d3b4e9fa06",
        body: "Sort of. I have a few things to wrap up Saturday morning, but I’m free after that.",
        timestamp: "2025-05-11T09:04:12Z",
        fromSelf: false,
      },
    ],
  },
];

export default function ConsolePage() {
  const [chat, setChat] = useState<number | null>(null);
  
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "360px",
        } as React.CSSProperties
      }
    >
      <ChatSidebar chats={chatsData} setChat={setChat} />
      <SidebarInset className="h-screen overflow-hidden">
        <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              {/* <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem> */}
              {/* <BreadcrumbSeparator className="hidden md:block" /> */}
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4">
          <div className="w-[50em] mx-auto">
            {chat ? (
              <Chatbox chat={chatsData[chat as number]} />
            ) : (
              "start conversion."
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
