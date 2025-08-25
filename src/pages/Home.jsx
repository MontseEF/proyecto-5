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

  // Preview desde iTunes
  const [preview, setPreview] = useState(null); // { url, track, artist, artwork } | null
  const [previewLoading, setPreviewLoading] = useState(false);

  // Cargar historial guardado
  useEffect(() => {
    const saved = localStorage.getItem("genreHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  // Guardar historial cuando cambie
  useEffect(() => {
    localStorage.setItem("genreHistory", JSON.stringify(history));
  }, [history]);

  // Busca una pista en iTunes por el texto del género
  async function fetchPreviewFor(genreText) {
    try {
      setPreviewLoading(true);
      setPreview(null);
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
        genreText
      )}&media=music&limit=1`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        const r = data.results[0];
        setPreview({
          url: r.previewUrl, 
          track: r.trackName,
          artist: r.artistName,
          artwork: r.artworkUrl100?.replace("100x100bb", "300x300bb"),
        });
      } else {
        setPreview(null); 
      }
    } catch {
      setPreview(null);
    } finally {
      setPreviewLoading(false);
    }
  }

  // Crea género (Binary Jazz) y luego pedir preview a iTunes
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

      // Buscar preview para ese texto
      fetchPreviewFor(genre);
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

        {/* Ahora suena + Reproductor (derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NowPlayingCard genre={currentGenre} loading={loading} error={error} />
          </div>

          {/* Reproductor iTunes */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-gray-200 space-y-4">
            <p className="text-sm text-gray-400">Reproductor (iTunes preview)</p>

            {previewLoading ? (
              <p className="text-gray-400 text-sm">Buscando una pista…</p>
            ) : !preview ? (
              <p className="text-gray-400 text-sm">
                Lo sentimos. Crea otro género hasta que encontremos una pista.
              </p>
            ) : (
              <div className="flex items-center gap-4">
                {preview.artwork && (
                  <img
                    src={preview.artwork}
                    alt=""
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                )}
                <div className="min-w-0 w-full">
                  <p className="font-medium text-gray-100 truncate">{preview.track}</p>
                  <p className="text-gray-400 text-sm truncate">{preview.artist}</p>
                  <audio controls src={preview.url} className="mt-2 w-full" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Historial */}
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

