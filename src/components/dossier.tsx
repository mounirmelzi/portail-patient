"use client";

import { useDossier } from "@/hooks/useDossier";

export default function Dossier() {
  const { data } = useDossier();
  return <div>{JSON.stringify(data)}</div>;
}
