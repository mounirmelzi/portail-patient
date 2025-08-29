import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import ContextProviders from "@/context/ContextProviders";
import "@/app/globals.css";

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
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ContextProviders>{children}</ContextProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
