import { posts } from "#site/content";
import Contact from "@/components/Contact";
import InnerNavigation from "@/components/InnerNavigation";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((posts) => posts.published));
  const displayPosts = sortedPosts;

  return (
    <>
      <InnerNavigation />
      <section className="container max-w-4xl mx-auto py-6 mt-24 lg:py-10">
        <div className="">
          {displayPosts?.length > 0 ? (
            <ul className=" md:grid md:grid-cols-3 flex flex-col gap-4 ">
              {displayPosts.map((post) => {
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
        </div>
      </section>
      <Contact />
    </>
  );
}
