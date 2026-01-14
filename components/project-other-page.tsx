import Link from "next/link";

export default function ProjectPage({
  name,
  description,
  links,
}: {
  name: string;
  description: string | React.ReactNode;
  links: { title: string; icon: React.ReactNode; url: string }[];
}) {
  return (
    <div className="flex-col p-8 absolute w-full h-screen flex items-center">
      <div className="border border-dashed w-full max-w-2xl">
        <div className="p-4 border-b border-dashed flex flex-col gap-2">
          <p>
            <Link href="/">
              <span className="text-primary">ingo.au</span>/
            </Link>
          </p>
          <h1 className="text-4xl lg:text-5xl text-primary">{name}</h1>
        </div>
        <p className="border-b border-dashed">{description}</p>
      </div>
    </div>
  );
}
