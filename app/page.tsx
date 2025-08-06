import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen p-3">
      <div className="w-full h-full flex justify-center items-center rounded-4xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-8xl">Hi, I'm Ingo</h1>
          <h2 className="text-4xl">And I build for the web</h2>
        </div>
      </div>
    </div>
  );
}
