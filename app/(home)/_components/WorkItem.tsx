"use client";

import { Work } from "@/data/interfaces";
import { useRouter } from "next/navigation";

export default function WorkItem({ work }: { work: Work }) {
  const router = useRouter();

  return (
    <div
      className="hover:cursor-pointer"
      onClick={() => {
        router.push(work.title.replaceAll(" ", "-"), { scroll: false });
      }}
    >
      <div className="aspect-square bg-slate-400"></div>

      {work.title}
    </div>
  );
}
