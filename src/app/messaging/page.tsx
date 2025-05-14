"use client";

import Navbar from "@/components/navbar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { capitalize, truncateText } from "@/lib/helper";
import Chatbox from "@/components/chat-box";

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
      id: "645a9c18f1c2a1d3b4e9fa02",
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
      id: "645a9c18f1c2a1d3b4e9fa5",
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
      id: "645a9c18f1c2a1d3b4e9fa9",
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
  const [chat, setChat] = useState<string | null>();
  const [conversation, setConversation] = useState<Chats>();

  useEffect(() => {
    if (chat) {
      const value = chatsData.find((singleChat) => singleChat.head.id == chat);
      setConversation(value);
    }
  }, [chat]);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className={"group/sidebar-wrapper flex min-h-svh w-[80%] mx-auto"}>
        {/* sidebar */}
        <div
          className={
            "bg-sidebar border-x-1 flex flex-col h-[calc(100vh-64px)] min-w-[360px] overflow-hidden"
          }
        >
          <div className={"flex h-full flex-col flex-1 md:flex"}>
            {/* header */}
            <div className="flex flex-col gap-3.5 border-b p-4">
              <div className="flex w-full items-center justify-between">
                <div className="text-foreground text-base font-medium">
                  Inbox
                </div>
                <Label className="flex items-center gap-2 text-sm">
                  <span>Unreads</span>
                  <Switch className="shadow-none" />
                </Label>
              </div>
              <Input
                placeholder="Type to search..."
                className={"bg-background h-8 w-full shadow-none"}
              />
            </div>

            {/* body */}
            <div className={"flex min-h-0 flex-1 flex-col gap-2 overflow-auto"}>
              <div className={"relative flex w-full min-w-0 flex-col p-2 px-0"}>
                <div className={"w-full text-sm"}>
                  {chatsData.map((chat, index) => (
                    <a
                      href="#"
                      onClick={() => setChat(chat.head.id)}
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

        {/* chat box */}
        <div className="h-screen w-full overflow-hidden">
          <div className="flex flex-1 flex-col gap-4">
            <div className="w-[50em] mx-auto">
              {chat ? (
                <Chatbox chat={conversation} />
              ) : (
                <div className="flex flex-col gap-4 justify-center items-center h-[calc(100vh-65px)]">
                  <div className="font-medium text-4xl">Start conversation today!</div>
                  <div className="font-light text-3xl">build your connections</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
