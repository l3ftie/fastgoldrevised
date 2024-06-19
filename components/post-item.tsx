import { format } from "date-fns";
import Link from "next/link";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}
export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article className=" h-full col-span-1 bg-slate-600/30 rounded-md p-4 flex flex-col gap-2 border-border border-b py-3 ">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className=" max-w-none text-muted-foreground">{description}</div>
      <div className="flex flex-col justify-between ">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className=" text-sm sm:text-base font-medium flex items-center gap-1">
            <time dateTime={date}>{format(new Date(date), "MM/dd/yyyy")}</time>
          </dd>
        </dl>
        <Link href={slug} className=" text-black bg-yellow-400 w-fit rounded-lg mt-5 py-2 px-5">
          Read More →
        </Link>
      </div>
    </article>
  );
}
