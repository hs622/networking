import FeedSidebar from "@/components/feed-sidebar";
import Navbar from "@/components/navbar";
import Post from "@/components/post";
import SuggestionSidebar from "@/components/suggestion-sidebar";

import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Feed",
  description: "networking feed screen",
};

const Feedpage = () => {
  return (
    <Fragment>
      <Navbar />

      {/* section */}
      <div className="bg-muted min-h-svh">
        <div className="grid grid-cols-16 gap-6 mx-auto w-full md:w-[70%] py-5">
          {/* feed-sidebar */}
          <FeedSidebar />

          {/* feeds */}
          <div className="sm:col-span-full md:col-span-8">
            <div className="flex flex-col gap-2">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>

          {/* suggentions-bar */}
          <div className="col-span-4 sm:hidden md:block">
            <SuggestionSidebar />
          </div>
        </div>
      </div>

      {/* <div className="flex min-h-svh flex-col items-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6"></div>
      </div> */}
    </Fragment>
  );
};

export default Feedpage;
