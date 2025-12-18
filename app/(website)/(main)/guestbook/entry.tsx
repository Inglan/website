import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { FunctionReturnType } from "convex/server";

export default function Entry({
  entry,
}: {
  entry: FunctionReturnType<typeof api.guestbook.get>[number];
}) {
  return (
    <div key={entry.id}>
      {entry.name}
      <br />
      {entry.message}
    </div>
  );
}
