"use client";

import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function IPsList(props: {
  preloadedIPs: Preloaded<typeof api.networkingIncidents.get>;
}) {
  const ips = usePreloadedQuery(props.preloadedIPs);

  return (
    <Accordion type="multiple">
      {ips.map((ip) => (
        <AccordionItem key={ip.ip} value={ip.ip} className="border-dashed px-4">
          <AccordionTrigger>{ip.ip}</AccordionTrigger>
          <AccordionContent>{ip.ip}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
