export default function RecordCard({ title, tags = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/[0.07] transition">
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}