export default function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/40 bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-500">
      <span className="size-1.5 rounded-full bg-green-500" />
      Working
    </span>
  );
}