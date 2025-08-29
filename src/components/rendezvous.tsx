"use client";

import { useRendezvous } from "@/hooks/useRendezvous";

export default function Rendezvous() {
  const { data } = useRendezvous();
  return <div>{JSON.stringify(data)}</div>;
}
