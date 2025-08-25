import { useState } from "react";
import { fetchGenre } from "../lib/api.js";

export default function Aleatorio() {
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const g = await fetchGenre();
    setGenre(g);
    setLoading(false);
  };

  return (
    <main className="p-6 text-gray-100 space-y-4">
      <h2 className="text-2xl font-semibold">Género Aleatorio</h2>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-xl bg-emerald-400 px-5 py-3 font-medium text-gray-900 shadow hover:scale-[1.02] hover:shadow-lg transition disabled:opacity-60"
      >
        {loading ? "Generando..." : "Generar género"}
      </button>

      {genre && (
        <p className="text-lg mt-4">
          Género generado: <span className="font-bold text-emerald-300">{genre}</span>
        </p>
      )}
    </main>
  );
}
