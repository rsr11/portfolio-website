import Image from "next/image";
import { author } from "@/lib/blog";

export default function AuthorRow({ readingTime }: { readingTime?: string }) {
  return (
    <div className="flex items-center gap-3">
      <Image src={author.avatar} alt="" width={36} height={36} className="size-9 rounded-full object-cover" />
      <p className="text-sm font-semibold">{author.name}</p>
      {readingTime && (
        <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted">{readingTime}</span>
      )}
    </div>
  );
}