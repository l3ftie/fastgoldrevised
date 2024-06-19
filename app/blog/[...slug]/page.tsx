import { posts } from "#site/content";
import Contact from "@/components/Contact";
import InnerNavigation from "@/components/InnerNavigation";
import { MDXContent } from "@/components/mdx-components";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug.join("/");
  const post = posts.find((posts) => posts.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }
  return (
    <>
      <InnerNavigation />
      <div className="relative h-80">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image fill className="object-cover" src={post.image || ""} alt={post.title} />
        <div className="max-w-7xl mx-auto relative z-20 flex flex-col items-center justify-end pb-10 px-6 md:px-0 h-full">
          <span className="bg-yellow-500/80 w-fit  py-2 rounded-full px-6">{post.country}</span>
          <h4 className="text-3xl md:text-5xl fancy-font">{post.subtext}</h4>
        </div>
      </div>
      <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
        <h1 className="mb-2">{post.title}</h1>
        {post.description ? <p className="text-xl mt-0 text-muted-foreground">{post.description}</p> : null}
        <p>{format(new Date(post.date), "MM/dd/yyyy")}</p>
        <hr className="my-4" />
        <MDXContent code={post.body} />
      </article>
      <Contact />
    </>
  );
}
