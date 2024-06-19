import { posts } from "@/.velite";
import Link from "next/link";
import React from "react";

export const BlogSlider = () => {
  return (
    <div className="flex gap-5 overflow-x-scroll md:overflow-hidden px-6 md:px-0  ">
      {posts.map((blog) => (
        <Link className="min-w-[300px] bg-gray-700/50 p-4 rounded-lg" key={blog.slug} href={`/blog/${blog.slug}`}>
          <div className="flex items-center gap-2">
            <div>
              <h3 className="text-lg text-yellow-600 font-semibold">{blog.title}</h3>
              <p className="text-gray-300">{blog.subtext}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
