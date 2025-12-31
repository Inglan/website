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
        <AccordionItem key={ip.ip} value={ip.ip} className="border-dashed">
          <AccordionTrigger className="px-4">{ip.ip}</AccordionTrigger>
          <AccordionContent className="bg-card p-0">
            {ip.incidents.map((incident) => (
              <div
                key={incident.id}
                className="p-2 border-t border-dashed whitespace-pre"
              >
                {incident.details}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
