function Turbulence() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3 grow">
          <div className="flex flex-col justify-end from-mauve to-blue bg-gradient-to-br text-white p-6 text-6xl gap-3 rounded-xl w-80 h-full relative overflow-hidden">
            <div className="z-10">Hi,</div>
            <div className="z-10">I'm Ingo</div>

            <Turbulence />
          </div>
          <div className="flex flex-col gap-3 grow">
            <div className="flex flex-row gap-3 grow">
              <div className="rounded-xl w-64 h-40 flex flex-col overflow-hidden relative">
                <div className="z-10 from-surface0 to-surface0/75 text-4xl bg-gradient-to-r w-full h-full flex flex-col pl-4 justify-center">
                  <div className="z-10">I build for</div>
                  <div className="z-10">the web</div>
                </div>
                <Turbulence />
                <div className="absolute top-0 left-0 w-[125%] h-full wrap-anywhere text-right select-none">{`<div className="flex flex-col gap-3 grow"><div className="flex flex-row gap-3 grow"><div className="rounded-xl w-64 h-40 flex flex-col overflow-hidden relative"><div className="z-10 from-surface0 to-transparent text-4xl bg-gradient-to-r w-full h-full flex flex-col pl-4 justify-center">
                `}</div>
              </div>
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
