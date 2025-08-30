import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-xl font-bold text-primary mb-4">
            Portail Patient
          </h3>
          <p className="text-muted-foreground">
            Visualisation d'un Carnet de Suivi Médical
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Liens Rapides</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/dossier" className="hover:text-primary">
                Dossier
              </Link>
            </li>
            <li>
              <Link href="/recommandations" className="hover:text-primary">
                Recommandations
              </Link>
            </li>
            <li>
              <Link href="/rendez-vous" className="hover:text-primary">
                Rendez-vous
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Ressources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Support
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Politique de Confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contactez-nous</h4>
          <p className="text-muted-foreground">
            123 PortailPatient St.
            <br />
            Paris, France
          </p>
          <p className="text-muted-foreground mt-2">
            Email: info@portailpatient.fr
            <br />
            Phone: +33 333 333 333
          </p>
        </div>
      </div>

      <p className="border-t text-center py-4 text-xs text-muted-foreground">
        © 2025 PortailPatient. Tous droits réservés.
      </p>
    </footer>
  );
}
