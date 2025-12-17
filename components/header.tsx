export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full mx-auto flex h-fit p-4 border border-t-0 border-dashed">
      <h1 className="text-6xl text-primary">{children}</h1>
    </div>
  );
}
