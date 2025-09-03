"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant="secondary"
      onClick={() => {
        router.back();
      }}
    >
      <ChevronLeft />
      Back
    </Button>
  );
}
