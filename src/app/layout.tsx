import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portail Patient",
  description: "Visualisation d'un Carnet de Suivi Médical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
