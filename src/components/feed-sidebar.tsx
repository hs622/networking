import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { onlineUserImage } from "./navbar";
import { Button } from "./ui/button";
import { Calendar, Group } from "lucide-react";

const FeedSidebar = () => {
  return (
    <div className="col-start-2 col-span-3 flex flex-col gap-4">
      <Card className="rounded-md shadow-none p-0">
        <CardContent className="flex flex-col p-0">
          <div className="flex justify-center border-b-1 px-4 pt-8 pb-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={onlineUserImage} alt="example" />
              <AvatarFallback>HE</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col py-4 px-6">
            <div className="font-medium">Ethan</div>
            <div className="text-xs">Diplomat</div>
            <div className="text-xs">Ontario, Canada</div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-md shadow-none p-0">
        <CardContent className="flex flex-col items-start px-4 py-2">
          <Button
            variant={"link"}
            className="cursor-pointer text-gray-500 hover:text-gray-700 hover:no-underline p-0"
          >
            <Group />
            Groups
          </Button>
          <Button
            variant={"link"}
            className="cursor-pointer text-gray-500 hover:text-gray-700 hover:no-underline p-0"
          >
            <Calendar />
            Events
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedSidebar;
