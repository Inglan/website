import Content from "@/components/content";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen p-3">
        <div className="w-full h-full flex justify-center items-center rounded-4xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-8xl">Hi, I'm Ingo</h1>
            <h2 className="text-4xl">And I build for the web</h2>
          </div>
        </div>
      </div>
      <Content>
        <h2>I know</h2>
        <div className="not-prose grid grid-cols-3 gap-2">
          {[
            { name: "React" },
            { name: "NextJS" },
            { name: "Svelte" },
            { name: "TypeScript" },
            { name: "Python" },
            { name: "Godot" },
          ].map((item, index) => (
            <div
              className="bg-card p-2 rounded-md flex flex-col justify-center items-center"
              key={index}
            >
              {item.name}
            </div>
          ))}
        </div>
      </Content>
    </>
  );
}
