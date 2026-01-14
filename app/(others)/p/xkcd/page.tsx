export default function XKCDPage() {
  return (
    <div className="flex flex-col p-4 absolute w-full h-screen">
      <div className="border-r border-dashed p-4 absolute top-0 left-0 h-screen"></div>
      <div className="border-l border-dashed p-4 absolute top-0 right-0 h-screen"></div>
      <div className="border-b border-dashed p-4 absolute top-0 left-0 w-screen"></div>
      <div className="border-t border-dashed p-4 absolute bottom-0 left-0 w-screen"></div>
    </div>
  );
}
