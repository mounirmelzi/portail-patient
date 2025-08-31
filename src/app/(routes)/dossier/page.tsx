"use client";

import { useDossier } from "@/hooks/useDossier";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

export default function Dossier() {
  const { data, loading, error } = useDossier();

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

  if (!data) return <></>;

  return (
    <main className="container mx-auto p-6 space-y-8">
      <Card className="shadow-sm border-muted">
        <CardHeader>
          <CardTitle>Informations du patient</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <span className="font-medium">Nom :</span> {data.patient.nom}
          </p>
          <p>
            <span className="font-medium">Prénom :</span> {data.patient.prenom}
          </p>
          <p>
            <span className="font-medium">Date de naissance :</span>{" "}
            {data.patient.dateNaissance}
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-muted">
        <CardHeader>
          <CardTitle>Antécédents médicaux</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {data.antecedents.length > 0 ? (
            data.antecedents.map((antecedent) => (
              <Badge key={antecedent} variant="secondary">
                {antecedent}
              </Badge>
            ))
          ) : (
            <p className="text-muted-foreground text-sm">
              Aucun antécédent enregistré
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="shadow-sm border-muted">
        <CardHeader>
          <CardTitle>Allergies</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {data.allergies.length > 0 ? (
            data.allergies.map((allergie) => (
              <Badge key={allergie} variant="destructive">
                {allergie}
              </Badge>
            ))
          ) : (
            <p className="text-muted-foreground text-sm">
              Aucune allergie connue
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="shadow-sm border-muted">
        <CardHeader>
          <CardTitle>Traitements en cours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.traitements.length > 0 ? (
            data.traitements.map((traitement) => (
              <div
                key={JSON.stringify(traitement)}
                className="p-3 rounded-lg border bg-muted/50 text-sm space-y-1"
              >
                <p>
                  <span className="font-medium">Médicament :</span>{" "}
                  {traitement.nom}
                </p>
                <p>
                  <span className="font-medium">Dose :</span> {traitement.dose}
                </p>
                <p>
                  <span className="font-medium">Fréquence :</span>{" "}
                  {traitement.frequence}
                </p>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-sm">
              Aucun traitement en cours
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
