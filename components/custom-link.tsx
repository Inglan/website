import clsx from "clsx";
import NextLink from "next/link";

export default function Link({
  ...props
}: React.ComponentProps<typeof NextLink>) {
  return <NextLink className={clsx("underline", props.className)} {...props} />;
}
