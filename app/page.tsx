"use client";

import { MdOutlineSportsEsports, MdOutlineCameraAlt } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import img_0305 from "../public/assets/photos/IMG_0305.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

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
  const hero = useRef(null);

  useGSAP(() => {
    const loadTimeline = gsap.timeline();

    loadTimeline.from(".box", {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scale: 0.9,
    });
  });
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3 grow">
          <div
            className="flex flex-col justify-end from-mauve to-blue bg-gradient-to-br text-white p-6 text-6xl gap-3 rounded-xl w-80 h-full relative overflow-hidden"
            ref={hero}
          >
            <div className="z-10">Hi,</div>
            <div className="z-10">I'm Ingo</div>

            <Turbulence />
          </div>
          <div className="flex flex-col gap-3 grow">
            <div className="flex flex-row gap-3 grow">
              <div className="rounded-xl w-64 h-40 flex flex-col overflow-hidden relative box">
                <div className="z-10 from-surface0 to-surface0/75 text-4xl bg-gradient-to-r w-full h-full flex flex-col pl-4 justify-center">
                  <div className="z-10">I build for</div>
                  <div className="z-10">the web</div>
                </div>
                <Turbulence />
                <div className="absolute top-0 left-0 w-[125%] h-full wrap-anywhere text-right select-none">{`<div className="flex flex-col gap-3 grow"><div className="flex flex-row gap-3 grow"><div className="rounded-xl w-64 h-40 flex flex-col overflow-hidden relative"><div className="z-10 from-surface0 to-transparent text-4xl bg-gradient-to-r w-full h-full flex flex-col pl-4 justify-center">
                `}</div>
              </div>
              <div className="from-crust to-base bg-gradient-to-br rounded-xl w-64 h-40 relative overflow-hidden text-3xl p-4 box">
                <div className="flex flex-col z-10 relative">
                  <div>I make games</div>
                  <div>(sometimes)</div>
                </div>
                <MdOutlineSportsEsports className="z-10 h-24 w-24 absolute -bottom-5 -right-3 -rotate-5" />
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                  <Turbulence />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 grow">
              <div className="bg-base rounded-xl grow h-40 relative overflow-hidden text-4xl flex p-4 box">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 z-20">
                  <Turbulence />
                </div>
                <div className="absolute top-0 left-0 w-full h-full from-base to-transparent bg-gradient-to-r z-10"></div>

                <Image
                  src={img_0305}
                  width={6000}
                  height={4000}
                  className="absolute top-0 left-0 z-0 scale-200 translate-x-[20%]"
                  alt=""
                />
                <div className="z-30 relative">I take photos</div>
                <MdOutlineCameraAlt className="z-30 h-24 w-24 absolute -bottom-5 -left-3 rotate-5" />
              </div>
              <div className="bg-mantle justify-center items-center text-4xl flex flex-col rounded-xl w-56 h-40 box">
                <div className="flex flex-col">
                  <div>I also</div>
                  <div>use Vim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 grow links">
          <Link
            href="/about"
            className="flex bg-surface0 rounded-xl grow h-32 overflow-hidden relative text-4xl justify-center items-center w-full"
          >
            <div className="relative z-10">About</div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <Turbulence />
            </div>
          </Link>
          <Link
            href="/contact"
            className="flex bg-surface0 rounded-xl grow h-32 overflow-hidden relative text-4xl justify-center items-center w-full"
          >
            <div className="relative z-10">Contact</div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <Turbulence />
            </div>
          </Link>
          <Link
            href="/projects"
            className="flex bg-surface0 rounded-xl grow h-32 overflow-hidden relative text-4xl justify-center items-center w-full"
          >
            <div className="relative z-10">Projects</div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <Turbulence />
            </div>
          </Link>
          <Link
            href="/more"
            className="flex bg-surface0 rounded-xl grow h-32 overflow-hidden relative text-4xl justify-center items-center w-full"
          >
            <div className="relative z-10">More</div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <Turbulence />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
