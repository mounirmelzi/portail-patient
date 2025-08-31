import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Recommandation } from "@/types/recommandation";

export default function RecommandationCard({
  recommandation,
  titre = "Recommandation",
}: {
  recommandation: Recommandation;
  titre?: string;
}) {
  return (
    <Card className="shadow-sm border-muted">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {titre}
          <Badge variant="outline">{recommandation.categorie}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <Separator />
        <p className="text-muted-foreground leading-relaxed">
          {recommandation.message}
        </p>
      </CardContent>
    </Card>
  );
}
