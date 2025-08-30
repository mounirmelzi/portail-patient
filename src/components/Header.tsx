import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Portail Patient
        </Link>

        <nav className="flex gap-12 text-sm font-medium">
          <Link href="/dossier" className="hover:text-primary">
            Dossier
          </Link>
          <Link href="/recommandations" className="hover:text-primary ">
            Recommandations
          </Link>
          <Link href="/rendez-vous" className="hover:text-primary ">
            Rendez-vous
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-6">
          <ThemeToggle />

          <Link href="/dossier">
            <Image
              src="/profile.webp"
              alt="Account"
              width={40}
              height={40}
              className="rounded-full border border-white/20"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
