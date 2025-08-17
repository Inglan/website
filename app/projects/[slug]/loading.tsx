import { Skeleton } from "@/components/ui/skeleton";
import Content from "@/components/content";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Content>
      <h1>
        <Skeleton className="h-[50px] w-[300px] rounded-full" />
      </h1>
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-6 w-[full]" />
        ))}
      </div>
    </Content>
  );
}
