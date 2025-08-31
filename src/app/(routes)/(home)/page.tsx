"use client";

import { useDossier } from "@/hooks/useDossier";
import { useRecommandations } from "@/hooks/useRecommandations";
import { useRendezvous } from "@/hooks/useRendezvous";

import { Loader2 } from "lucide-react";

import RendezvousCard from "@/components/RendezvousCard";
import RecommandationCard from "@/components/RecommandationCard";

export default function Home() {
  const {
    data: dossier,
    loading: loadingDossier,
    error: errorDossier,
  } = useDossier();

  const {
    data: recommandations,
    loading: loadingRecommandations,
    error: errorRecommandations,
  } = useRecommandations();

  const {
    data: rendezvous,
    loading: loadingRendezvous,
    error: errorRendezvous,
  } = useRendezvous();

  const loading = loadingDossier || loadingRecommandations || loadingRendezvous;
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-muted-foreground">
        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      </div>
    );
  }

  const error = errorDossier || errorRecommandations || errorRendezvous;
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-destructive font-medium">
        {error}
      </div>
    );
  }

  const recommandation = recommandations.at(-1);
  const dernierRendezvous = rendezvous
    .filter((e) => e.statut === "passé")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .at(0);

  return (
    <main className="container mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight space-x-2">
          <span>Bienvenue</span>
          <span className="text-primary">{dossier!.patient.prenom}</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Voici vos dernières informations de suivi médical
        </p>
      </div>

      {dernierRendezvous && (
        <RendezvousCard
          titre="Dernier Rendez-vous"
          rendezvous={dernierRendezvous}
        />
      )}

      {recommandation && (
        <RecommandationCard
          titre="Recommandation d'Aujourd'hui"
          recommandation={recommandation}
        />
      )}
    </main>
  );
}
