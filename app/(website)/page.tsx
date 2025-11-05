import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-auto flex flex-row h-fit border border-t-0 border-dashed max-w-4xl">
      <div className="w-52 border-r border-dashed">
        <Image
          width={255}
          height={255}
          alt=""
          className="w-full aspect-square border-b border-dashed"
          src="/icons/main.svg"
        />
        <div className="p-4">
          <h1 className="text-2xl">Ingo Wolf</h1>
        </div>
      </div>
      <div className="p-4"></div>
    </div>
  );
}
