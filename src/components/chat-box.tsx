"use client";

import React, { Fragment, KeyboardEvent, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SendHorizontal } from "lucide-react";
import { Chats } from "@/app/console/page";
import { capitalize, initials } from "@/lib/helper";

const Chatbox = ({ chat }: { chat: Chats }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    if (event.key == "Enter" && !event.shiftKey) {
      console.log(message);

      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.value = "";
      }
    }
  };

  return (
    <Fragment>
      {/* Chat header */}
      <div className="border-b-1 mb-2 p-4 flex justify-between items-center">
        {/* right side */}
        <div className="flex gap-2 justify-center items-center">
          <Avatar>
            <AvatarImage src={""} />
            <AvatarFallback className="text-xs font-medium">
              {initials(chat.head.opponent)}
            </AvatarFallback>
          </Avatar>
          <div className="font-semibold">{capitalize(chat.head.opponent)}</div>
        </div>

        {/* Left side */}
        {/* <div>contact menu</div> */}
      </div>

      {/* Chat section */}
      <div className="h-[calc(100vh-220px)] overflow-y-auto scrollbar-hidden">
        {chat.data.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.fromSelf ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`max-w-sm py-3 rounded-lg text-sm ${
                msg.fromSelf
                  ? "bg-green-600 p-4 text-white"
                  : "bg-gray-600 p-4 text-white"
              }`}
            >
              <div>{msg.body}</div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-sm text-right mt-1 opacity-70">
        {formatChatTime(msg.timestamp)}
      </div> */}

      {/* Chat footer */}
      <div className="flex gap-2 items-end py-4">
        <Textarea
          className="max-h-10 resize-none"
          placeholder={"Type a message"}
          ref={textareaRef}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button className="bg-green-600">
          <SendHorizontal />
        </Button>
      </div>
    </Fragment>
  );
};

export default Chatbox;
