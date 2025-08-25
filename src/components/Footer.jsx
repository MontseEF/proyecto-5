export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-[#0B0F14]">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-400 space-y-2">
        <p>© 2025 Montserrat Espinoza Flores. Todos los derechos reservados.</p>
        <p>
          <a
            href="/privacy-policy"
            className="text-emerald-300 hover:underline hover:text-emerald-200 transition"
          >
            Política de privacidad
          </a>
        </p>
      </div>
    </footer>
  );
}
