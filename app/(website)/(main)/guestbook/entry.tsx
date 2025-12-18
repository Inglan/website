import { FormattedDateTime } from "@/components/formatted-date";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { FunctionReturnType } from "convex/server";

export default function Entry({
  entry,
}: {
  entry: FunctionReturnType<typeof api.guestbook.get>[number];
}) {
  return (
    <div className="p-4 border-b border-dashed" key={entry.id}>
      <div className="text-primary text-xl">{entry.name}</div>
      <div className="text-sm">
        <FormattedDateTime
          date={new Date(entry.creationTime).toISOString()}
          format="DATETIME"
        />
      </div>
      <div className="text-lg">{entry.message}</div>
    </div>
  );
}
