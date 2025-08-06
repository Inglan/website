export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-lg prose-custom md:prose-xl mx-auto p-3 prose-headings:font-normal">
      {children}
    </div>
  );
}
