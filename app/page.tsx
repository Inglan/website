import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-row gap-3 grow">
          <div className="flex bg-white rounded-xl w-80 h-full"></div>
          <div className="flex flex-col gap-3 grow">
            <div className="flex flex-row gap-3 grow">
              <div className="bg-white rounded-xl w-64 h-40"></div>
              <div className="bg-white rounded-xl w-64 h-40"></div>
            </div>
            <div className="flex flex-row gap-3 grow">
              <div className="bg-white rounded-xl grow h-40"></div>
              <div className="bg-white rounded-xl w-56 h-40"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 grow">
          <div className="flex bg-white rounded-xl grow h-32"></div>
          <div className="flex bg-white rounded-xl grow h-32"></div>
          <div className="flex bg-white rounded-xl grow h-32"></div>
          <div className="flex bg-white rounded-xl grow h-32"></div>
        </div>
      </div>
    </div>
  );
}
