"use client";

import { Work } from "@/data/interfaces";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function WorkItem({ work }: { work: Work }) {
  const router = useRouter();

  return (
    <div
      className="hover:cursor-pointer break-inside-avoid"
      onClick={() => {
        router.push(work.title.replaceAll(" ", "-"), { scroll: false });
      }}
    >
      <div
        className={clsx(
          "w-full bg-slate-400",
          ~~((Math.random() * 10) % 2) === 0
            ? "h-32"
            : ~~((Math.random() * 10) % 2) === 0
            ? "h-44"
            : "h-40"
        )}
      ></div>

      {work.title}
    </div>
  );
}
