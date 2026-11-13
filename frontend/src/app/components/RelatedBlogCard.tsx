
import Link from "next/link";

interface RelatedBlogCardProps {
  title: string;
  date: string;
  href: string;
}

export default function RelatedBlogCard({
  title,
  date,
  href,
}: RelatedBlogCardProps) {
  return (
    <div className="min-h-[156px] overflow-hidden rounded-xl bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">

      <h3 className="mb-2 mt-3 text-base font-normal leading-6 text-gray-700">
        {title}
      </h3>

      <div className="mb-3 mt-4 flex items-center justify-between gap-3">

        <div className="flex items-center gap-2 text-sm text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path
              strokeLinecap="round"
              d="M16 3v4M8 3v4M3 10h18"
            />
          </svg>

          <time dateTime={date}>{date}</time>
        </div>

        <Link
          href={href}
          className="whitespace-nowrap rounded-lg bg-blue-900 p-2 text-sm text-white hover:bg-blue-800"
        >
          Read More →
        </Link>

      </div>
    </div>
  );
}
