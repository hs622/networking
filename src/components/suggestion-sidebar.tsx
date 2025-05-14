import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

const SuggestionSidebar = () => {
  return (
    <Card className="rounded-md shadow-none gap-0 p-0">
      <CardTitle className="p-4">Suggestions</CardTitle>
      <CardContent className="p-2">
        <div className="flex flex-col gap-4 p-2">
          <GroupItem />
          <GroupItem />
          <GroupItem />
        </div>

        <div className="flex justify-end mt-5">
          <Link
            href={"#"}
            className="text-xs text-gray-700 hover:bg-gray-100 hover:no-underline p-2 outline-none h-6 cursor-pointer inline-flex items-center gap-2 rounded-md"
          >
            View all recommendations <ArrowRight />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuggestionSidebar;

const GroupItem = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-2">
        <Avatar className="w-10 h-10">
          <AvatarImage src={"/user_male_2.jpg"} />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-xs font-semibold">group name</div>
          <div className="text-xs">admin name</div>
        </div>
      </div>
      <Button
        variant={"link"}
        className="hover:bg-gray-100 rounded-4xl text-gray-700 hover:no-underline cursor-pointer inline-flex items-center justify-center gap-0"
      >
        <Plus />
        Join
      </Button>
    </div>
  );
};
