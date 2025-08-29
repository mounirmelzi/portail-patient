import { DossierProvider } from "@/context/DossierContext";
import { RecommandationsProvider } from "@/context/RecommandationsContext";
import { RendezvousProvider } from "@/context/RendezvousContext";

export default function ContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DossierProvider>
      <RendezvousProvider>
        <RecommandationsProvider>{children}</RecommandationsProvider>
      </RendezvousProvider>
    </DossierProvider>
  );
}
