"use client";

import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function IPsList(props: {
  preloadedIPs: Preloaded<typeof api.networkingIncidents.get>;
}) {
  const ips = usePreloadedQuery(props.preloadedIPs);

  return (
    <Accordion type="multiple" className="border-b border-dashed">
      {ips.map((ip) => (
        <AccordionItem key={ip.ip} value={ip.ip} className="border-dashed">
          <AccordionTrigger className="px-4">
            <div className="flex flex-row gap-2 items-center">
              {ip.ip}{" "}
              <Badge variant="outline">
                {ip.incidents.length} incident
                {ip.incidents.length === 1 ? "" : "s"}
              </Badge>
            </div>
          </AccordionTrigger>
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
