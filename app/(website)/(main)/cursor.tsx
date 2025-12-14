export default async function Cursor() {
  try {
    const { Cursor } = await import("motion-plus/react");
    return <Cursor />;
  } catch {
    return <></>;
  }
}
