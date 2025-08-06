import Content from "@/components/content";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <Content>{children}</Content>;
}
