import Link from "@/components/custom-link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="max-w-4xl w-full mx-auto text-sm text-center text-foreground/75 mt-4">
      <div className="flex flex-row w-fit items-center  mx-auto">
        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://ctp-webr.ing/ingo/previous"
            className="aspect-square h-full"
          >
            <span className="sr-only">Previous</span>
            <ArrowLeft />
          </Link>
        </Button>
        <Button variant="outline" className="border-dashed" asChild>
          <Link href="https://ctp-webr.ing/">Catppuccin webring</Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://ctp-webr.ing/ingo/next">
            <span className="sr-only">Next</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <br />
      This website is{" "}
      <Link href="https://github.com/Inglan/website" target="_blank">
        open source
      </Link>
    </div>
  );
}
