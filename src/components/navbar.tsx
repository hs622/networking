"use client";

import { Search } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const onlineUserImage = "/user_male_1.jpg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="border-b-1">
      <div className="flex md:w-[80%] mx-auto justify-between items-center h-[4rem]">
        <div className="flex items-center gap-2">
          <div>logo</div>
          <div>
            <Button variant={"link"} className="cursor-pointer">
              <Search />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <Link
              href={"/messaging"}
              className={`inline-flex items-center hover:underline text-sm font-medium cursor-pointer text-gray-500 hover:text-gray-700 p-0 underline-offset-4 ${
                pathname == "/messaging" && "text-gray-700"
              }`}
            >
              Messaging
            </Link>
            <Link
              href={"#"}
              className={`inline-flex items-center hover:underline text-sm font-medium cursor-pointer text-gray-500 hover:text-gray-700 p-0 underline-offset-4 ${
                pathname == "/notifications" && "text-gray-700"
              }`}
            >
              Notifications
            </Link>
            <Link
              href={"#"}
              className={`inline-flex items-center hover:underline text-sm font-medium cursor-pointer text-gray-500 hover:text-gray-700 p-0 underline-offset-4 ${
                pathname == "/network" && "text-gray-700"
              }`}
            >
              Network
            </Link>
          </div>
          <Avatar>
            <AvatarImage src={onlineUserImage} alt="example" />
            <AvatarFallback>HE</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
