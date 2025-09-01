"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRecommandations } from "@/hooks/useRecommandations";
import RecommandationCard from "@/components/RecommandationCard";
import FilterTabs from "@/components/FilterTabs";

export default function Recommandations() {
  const { data, loading, error } = useRecommandations();
  const [categorie, setCategorie] = useState<string>("all");

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
        Aucune recommandation disponible
      </div>
    );
  }

  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">
        Recommandations pour vous!
      </h1>

      <FilterTabs
        data={data}
        query={categorie}
        setQuery={setCategorie}
        condition={(item) => item.categorie === categorie}
        tabs={[
          { value: "Sommeil", label: "Sommeil" },
          { value: "Nutrition", label: "Nutrition" },
          { value: "Activité physique", label: "Activité physique" },
        ]}
        render={(item) => (
          <RecommandationCard key={item.id} recommandation={item} />
        )}
      />
    </main>
  );
}
