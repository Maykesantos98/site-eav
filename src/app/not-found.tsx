import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0c0a09] px-6 text-center text-white">
      <div className="text-7xl font-extrabold eav-gradient-text">404</div>
      <h1 className="text-2xl font-bold">Página não encontrada</h1>
      <p className="text-stone-500">A página que você procura não existe ou foi movida.</p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6336c4] to-[#8e59ff] px-6 py-3 font-bold text-white shadow-lg transition-shadow hover:shadow-violet-900/50"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
