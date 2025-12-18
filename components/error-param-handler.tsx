"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ErrorParamHandler() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const error = searchParams.get("error");
    setError(error || "");

    if (error === "banned") {
      setOpen(true);
      router.push("/");
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {error == "banned" && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You have been banned</DialogTitle>
            <DialogDescription>Skill issue</DialogDescription>
          </DialogHeader>
        </DialogContent>
      )}
    </Dialog>
  );
}
