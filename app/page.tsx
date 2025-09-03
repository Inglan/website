"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { Building, Building2, Earth, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col gap-4 items-start max-w-96 p-4">
        <h1 className="text-4xl">
          <span className="text-xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hi,
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I&apos;m
            </motion.span>
          </span>
          <br />
          <span className="text-4xl text-primary font-bold">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ingo
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Wolf
            </motion.span>
          </span>
        </h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build websites, webapps, and other random stuff
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full flex flex-row gap-2 items-center"
        >
          <Earth className="size-4" />
          Australia
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full flex flex-row gap-2 items-center"
        >
          <Building className="size-4" />
          Cloud Earth
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full flex flex-row gap-2 items-center"
        >
          <Mail className="size-4" />
          me@ingo.au
        </motion.div>
        <div className="flex flex-row gap-2 flex-wrap min-w-full">
          {[
            { title: "Github", href: "https://github.com/Inglan" },
            { title: "Email", href: "mailto:me@ingo.au" },
            {
              title: "Signal",
              href: "https://signal.me/#eu/aON_wvkns7bfeU-UAj_09B1Yym8WVC2QIWWV8rIhYZzPc2xGLUtBeLWMc9LJoWNB",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <Button variant="secondary" asChild>
                <Link href={item.href} target="_blank">
                  {item.title}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
