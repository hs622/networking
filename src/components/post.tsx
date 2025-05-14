import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Post = ({
  body,
  images,
  reactCount,
  commentCount,
  timestamp,
  authorImage,
  groupFollowers,
}: {
  body?: string;
  images?: string[];
  reactCount?: number;
  commentCount?: number;
  timestamp?: string;
  authorImage?: string;
  groupFollowers?: number;
}) => {
  console.log({
    body,
    images,
    reactCount,
    commentCount,
    timestamp,
    authorImage,
    groupFollowers,
  });

  return (
    <Card className="rounded-md shadow-none p-0">
      <CardContent className="p-0">
        <div className="flex items-center gap-2 px-4 py-2 border-b-1">
          <Avatar className="w-10 h-10 border-2">
            <AvatarImage src={"/user_female_1.jpg"} />
            <AvatarFallback>YZ</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-xs font-medium">XYZ.</div>
            <div className="text-xs">568 followers</div>
            <div className="text-xs">timestamp of the post</div>
          </div>
        </div>
        <div className="px-4 py-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam
          itaque sed, consectetur molestiae non modi facere dolore mollitia
          possimus asperiores libero velit odio eligendi vel quidem ab eos
          excepturi.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam
          itaque sed, consectetur molestiae non modi facere dolore.
        </div>

        <div className="px-4 pb-2 flex gap-2 text-sm text-blue-600 font-semibold">
          <div>#ontario</div>
          <div>#ontario</div>
        </div>

        {/* if any media content */}
        <div className="media">
          <div className="overflow-hidden">
            <Image
              src={"/cover.jpeg"}
              alt=""
              width={100}
              height={100}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="border-y-1 px-4 py-1 flex justify-between">
          <div className="flex items-center gap-1 text-gray-500">
            <ThumbsUp className="w-4 h-4" />
            <div className="text-sm">7</div>
          </div>
          <Button variant={"link"} className="text-sm text-gray-500 p-0">
            2 comment
          </Button>
        </div>

        <div className="flex justify-around p-2">
          <Button
            variant={"link"}
            className="cursor-pointer text-gray-500 hover:text-gray-700 hover:no-underline hover:bg-gray-200"
          >
            <ThumbsUp className="w-6 h-6" />{" "}
            <div className="font-medium">Like</div>
          </Button>
          <Button
            variant={"link"}
            className="cursor-pointer text-gray-500 hover:text-gray-700 hover:no-underline hover:bg-gray-200"
          >
            <div className="font-medium">Comment</div>
          </Button>
          {/* <div>comment box</div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
