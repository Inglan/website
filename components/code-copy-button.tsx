"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      onClick={copyToClipboard}
      className="text-foreground/75"
    >
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}
