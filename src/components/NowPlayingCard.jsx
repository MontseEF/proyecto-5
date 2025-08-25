export default function NowPlayingCard({ genre }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <p className="text-xs uppercase tracking-widest text-gray-400">Ahora suena</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-100">
        {genre || "—"}
      </h2>
      <p className="mt-2 text-sm text-gray-400">
        Presiona “Generar género” para empezar.
      </p>
    </section>
  );
}
