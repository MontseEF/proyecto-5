import Hero from "../components/Hero.jsx";

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <Hero />
      <h2 className="text-2xl font-semibold">Bienvenida 👋</h2>
      <p>
        Este es el Home de mi proyecto. Aquí después van a ir los datos de la API 🎉
      </p>
    </main>
  );
}

