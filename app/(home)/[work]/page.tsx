import { works } from "@/data/works";

export function generateStaticParams() {
  return works.map((work) => ({ work: work.title.replaceAll(" ", "-") }));
}

interface PageProps {
  params: { work: string };
}

export default function Page({ params }: PageProps) {
  return <>{params.work}</>;
}
