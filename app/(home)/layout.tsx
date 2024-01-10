import { works } from "@/data/works";
import WorkItem from "./_components/WorkItem";
import WorkPanner from "./_components/WorkPanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-3 sm:grid-cols-5">
      <div className="col-span-3 px-4">
        <section>
          <h1 className="text-4xl">About jiyoon</h1>
        </section>

        <section className="sm:columns-3 gap-2">
          {works.map((work, index) => (
            <WorkItem key={index} work={work} />
          ))}
        </section>
      </div>

      <div className="sm:col-span-2">
        <WorkPanner>{children}</WorkPanner>
      </div>
    </main>
  );
}
