import { posts } from "@/.velite";
import { sortPosts } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { PostItem } from "./post-item";

const BLogList = () => {
  const sortedPosts = sortPosts(posts.filter((posts) => posts.published));
  const displayPosts = sortedPosts;

  return (
    <section className="h-full max-w-7xl mx-auto  lg:px-6 z-10">
      <div className=" mb-10 flex md:flex-row flex-col justify-between items-end">
        <h5 className="fancy-font text-3xl ">Ways to buy gold from Africa</h5>
        <Link href="/blog" className="fancy-font text-yellow-400 underline underline-offset-8 text-base ">
          View More
        </Link>
      </div>
      {displayPosts?.length > 0 ? (
        <ul className=" flex flex-col md:grid grid-cols-3 gap-4">
          {displayPosts.slice(0, 8).map((post) => {
            const { slug, title, description, date } = post;
            return (
              <li key={slug}>
                <PostItem slug={slug} title={title} date={date} description={description} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p> Nothing to see here yet...</p>
      )}
    </section>
  );
};

export default BLogList;
