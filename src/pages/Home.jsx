import { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import NowPlayingCard from "../components/NowPlayingCard.jsx";
import RecordCard from "../components/RecordCard.jsx";
import Footer from "../components/Footer.jsx";
import { fetchGenre } from "../lib/api.js";

export default function Inicio() {
  const [currentGenre, setCurrentGenre] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Cargar historial guardado
  useEffect(() => {
    const saved = localStorage.getItem("genreHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // Guardar historial cuando cambie
  useEffect(() => {
    localStorage.setItem("genreHistory", JSON.stringify(history));
  }, [history]);

  const handleGenerate = async () => {
    try {
      setError("");
      setLoading(true);
      const genre = await fetchGenre();
      setCurrentGenre(genre);
      setHistory((prev) => {
        const next = prev[0] === genre ? prev : [genre, ...prev];
        return next.slice(0, 12);
      });
    } catch (e) {
      setError("Ups, no pudimos crear un género. Intenta de nuevo.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0B0F14]">
      <div className="mx-auto max-w-7xl px-6 py-10 space-y-10">
        <Hero onGenerate={handleGenerate} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NowPlayingCard genre={currentGenre} loading={loading} error={error} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex items-center justify-center text-gray-400">
          <p>Próximamente podrás guardar tus favoritas</p>
         </div>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-100">Historial</h3>
          {history.length === 0 ? (
            <p className="text-gray-400">Aún no hay géneros en el historial.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {history.map((title, idx) => (
                <RecordCard key={idx} title={title} />
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}

