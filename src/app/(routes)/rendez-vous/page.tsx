"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRendezvous } from "@/hooks/useRendezvous";
import RendezvousCard from "@/components/RendezvousCard";
import FilterTabs from "@/components/FilterTabs";

export default function Rendezvous() {
  const { data, loading, error } = useRendezvous();
  const [statut, setStatut] = useState<string>("all");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-muted-foreground">
        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-destructive font-medium">
        Erreur : {error}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-muted-foreground">
        Aucune rendez-vous disponible
      </div>
    );
  }

  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Vos rendez-vous!</h1>

      <FilterTabs
        data={data}
        query={statut}
        setQuery={setStatut}
        condition={(item) => item.statut === statut}
        tabs={[
          { value: "à venir", label: "À venir" },
          { value: "passé", label: "Passés" },
        ]}
        render={(item) => <RendezvousCard key={item.id} rendezvous={item} />}
      />
    </main>
  );
}
