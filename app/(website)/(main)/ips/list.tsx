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
import { FormattedDateTime } from "@/components/formatted-date";
import { cn } from "@/lib/utils";
import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function IPsList(props: {
  preloadedIPs: Preloaded<typeof api.networkingIncidents.get>;
}) {
  const ips = usePreloadedQuery(props.preloadedIPs);

  return (
    <Accordion type="multiple" className="border-b border-dashed">
      {ips.map((ip) => (
        <AccordionItem key={ip.ip} value={ip.ip} className="border-dashed">
          <div className="flex flex-row [&>h3]:grow">
            <AccordionTrigger className="px-4 bg-card no-underline! cursor-pointer duration-200 ease-out hover:bg-card active:brightness-75 h-12 py-0 items-center">
              <div className="flex flex-row gap-2 items-center">
                {ip.ip}{" "}
                <Badge variant="outline">
                  {ip.incidents.length} incident
                  {ip.incidents.length === 1 ? "" : "s"}
                </Badge>
                <Badge variant="outline">
                  <FormattedDateTime
                    format="DATETIME"
                    date={new Date(ip.incidents[0]._creationTime).toISOString()}
                  />
                </Badge>
              </div>
            </AccordionTrigger>
            <Button
              onClick={() =>
                toast.promise(navigator.clipboard.writeText(ip.ip), {
                  success: "Copied!",
                  error: "Failed to copy",
                })
              }
              className="border-l border-dashed h-12 w-12 cursor-pointer duration-200 ease-out hover:bg-card active:brightness-75"
              variant="ghost"
            >
              <Clipboard />
            </Button>
          </div>
          <AccordionContent className="p-0">
            {ip.incidents.map((incident, index) => (
              <div
                key={incident.id}
                className={cn(
                  "p-2 border-t border-dashed whitespace-pre-line wrap-anywhere",
                  index % 2 === 0
                    ? "bg-striped-gradient bg-size-[80px_80px]"
                    : "",
                )}
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
