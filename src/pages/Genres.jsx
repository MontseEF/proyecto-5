import RecordCard from "../components/RecordCard.jsx";

export default function Generos() {
  const saved = JSON.parse(localStorage.getItem("genreHistory") || "[]");

  return (
    <main className="p-6 text-gray-100 space-y-4">
      <h2 className="text-2xl font-semibold">Géneros creados</h2>
      {saved.length === 0 ? (
        <p className="text-gray-400">Aún no has creado géneros. Ve a “Inicio” y crea algunos 😊</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {saved.map((title, idx) => (
            <RecordCard key={`${title}-${idx}`} title={title} />
          ))}
        </div>
      )}
    </main>
  );
}
