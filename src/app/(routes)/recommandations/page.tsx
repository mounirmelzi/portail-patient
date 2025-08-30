"use client";

import { useRecommandations } from "@/hooks/useRecommandations";

export default function Recommandations() {
  const { data } = useRecommandations();
  return <div>{JSON.stringify(data)}</div>;
}
