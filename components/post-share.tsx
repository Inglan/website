"use client";

import { Check, Share, TriangleAlert } from "lucide-react";
import { Button } from "./ui/button";
import { SanityDocument } from "sanity";
import { useState } from "react";
import { toast } from "sonner";

export default function PostShare({ post }: { post: SanityDocument }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
      <Button
        variant="ghost"
        className="border-l border-dashed"
        onClick={() => {
          setTimeout(() => {
            setSuccess(false);
            setError(false);
          }, 2000);
          if (!navigator.canShare || !navigator.share) {
            if (!navigator.clipboard) {
              setError(true);
              toast.error("Failed to share");
              return;
            }
            navigator.clipboard.writeText(location.href).then(() => {
              setSuccess(true);
              toast.success("Copied to clipboard");
            });
          } else {
            navigator
              .share({
                url: location.href,
              })
              .then(() => {
                setSuccess(true);
              })
              .catch((error) => {
                if (error == "AbortError: Share canceled") return;
                setError(true);
                toast.error("Failed to share");
              });
          }
        }}
      >
        {success ? (
          <Check />
        ) : error ? (
          <TriangleAlert className="text-red-400" />
        ) : (
          <Share />
        )}
        Share
      </Button>
    </div>
  );
}
