import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Rendezvous } from "@/types/rendezvous";

export default function RendezvousCard({
  rendezvous,
  titre = "Rendez-vous",
}: {
  rendezvous: Rendezvous;
  titre?: string;
}) {
  return (
    <Card className="shadow-sm border-muted">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{titre}</span>
          <Badge
            variant={rendezvous.statut === "passé" ? "secondary" : "default"}
            className="capitalize"
          >
            {rendezvous.statut}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-2">
          <p className="text-muted-foreground">Date</p>
          <p className="font-medium">
            {new Date(rendezvous.date).toLocaleString()}
          </p>

          <p className="text-muted-foreground">Lieu</p>
          <p className="font-medium">{rendezvous.lieu}</p>

          <p className="text-muted-foreground">Médecin</p>
          <p className="font-medium">{rendezvous.medecin}</p>

          <p className="text-muted-foreground">Spécialité</p>
          <p className="font-medium">{rendezvous.specialite}</p>
        </div>
      </CardContent>
    </Card>
  );
}
