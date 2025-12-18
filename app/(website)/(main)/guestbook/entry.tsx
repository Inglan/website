import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { FunctionReturnType } from "convex/server";

export default function Entry({
  entry,
}: {
  entry: {
    id: string;
    message: string;
    name: string;
  };
}) {
  return (
    <div key={entry.id}>
      {entry.name}
      <br />
      {entry.message}
    </div>
  );
}
