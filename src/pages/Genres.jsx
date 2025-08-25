export default function Generos() {
  const saved = JSON.parse(localStorage.getItem("genreHistory") || "[]");

  return (
    <main className="p-6 text-gray-100 space-y-4">
      <h2 className="text-2xl font-semibold">Géneros</h2>
      {saved.length === 0 ? (
        <p className="text-gray-400">Aún no has generado géneros.</p>
      ) : (
        <ul className="list-disc pl-5 text-gray-200">
          {saved.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
      )}
    </main>
  );
}
