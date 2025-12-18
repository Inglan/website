"use client";

import { FormattedDateTime } from "@/components/formatted-date";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { FunctionReturnType } from "convex/server";
import { Trash } from "lucide-react";

export default function Entry({
  entry,
}: {
  entry: FunctionReturnType<typeof api.guestbook.get>[number];
}) {
  const user = useQuery(api.auth.getCurrentUser);

  return (
    <div
      className={cn(
        "p-4 border-b border-dashed relative",
        entry.status == "pending"
          ? "bg-striped-gradient bg-size-[80px_80px] opacity-75"
          : "",
      )}
      key={entry.id}
    >
      {entry.status == "pending" && (
        <div className="text-sm text-neutral-400">Pending Approval</div>
      )}
      <div className="text-primary text-xl">{entry.name}</div>
      <div className="text-sm">
        <FormattedDateTime
          date={new Date(entry.creationTime).toISOString()}
          format="DATETIME"
        />
      </div>
      <div className="text-lg">{entry.message}</div>
      {user?._id == entry.userId && (
        <div className="flex flex-row absolute top-0 right-0">
          <Button variant="ghost" size="icon">
            <Trash />
          </Button>
        </div>
      )}
    </div>
  );
}
