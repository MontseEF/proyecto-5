export default function Hero({ onGenerate }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#0B0F14] p-10 md:p-16">
      {/* Gradiente suave de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-[35%] animate-pulse-slow rounded-full bg-gradient-to-tr from-[#22C55E1a] via-[#F59E0B1a] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
          Binary Jazz • Generador musical
        </p>

        {/* Título con la onda pasando entre las letras */}
        <div className="relative mt-3">
          <svg
            className="pointer-events-none absolute -left-4 -right-4 top-6 md:top-8 h-10 md:h-12 opacity-70 mix-blend-screen"
            viewBox="0 0 800 120"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="wave" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#085421ff" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C80,20 160,100 240,60 S400,20 480,60 640,100 720,60 800,20 880,60"
              stroke="url(#wave)"
              strokeWidth="6"
              strokeLinecap="round"
              className="animate-wave"
            />
          </svg>

          <h1 className="relative text-3xl md:text-5xl font-semibold text-gray-100">
            <span className="text-emerald-500">Refréscate</span> con nueva
            música.
            <br className="hidden md:block" />
            Ven a <span className="text-amber-300">descubrir</span>.
          </h1>
        </div>

        <p className="mt-4 max-w-xl text-gray-400">
          Un clic, un género nuevo. Guarda tus favoritos y comparte la vibra.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={onGenerate}
            className="rounded-xl bg-emerald-400 px-5 py-3 font-medium text-gray-900 shadow hover:scale-[1.02] hover:shadow-lg transition"
          >
            Crear género
          </button>
        </div>
      </div>
    </section>
  );
}
