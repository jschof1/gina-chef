export function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-stone-500">
        {label}
      </span>
      {children}
    </label>
  );
}
