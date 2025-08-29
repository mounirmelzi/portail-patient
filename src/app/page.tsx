import { ThemeToggle } from "@/components/theme-toggle";
import Dossier from "@/components/dossier";
import Recommandations from "@/components/recommandations";
import Rendezvous from "@/components/rendezvous";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <Dossier />
      <Recommandations />
      <Rendezvous />
    </div>
  );
}
