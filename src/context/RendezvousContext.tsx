"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { Rendezvous } from "@/types/rendezvous";
import { getRendezvous } from "@/services/rendezvous";

type RendezvousContextType = {
  data: Rendezvous[];
  loading: boolean;
  error: string;
  fetch: () => Promise<void>;
};

export const RendezvousContext = createContext<
  RendezvousContextType | undefined
>(undefined);

export const RendezvousProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Rendezvous[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      setData(await getRendezvous());
    } catch (e: any) {
      console.error(e);
      setError("Erreur lors du chargement des rendez-vous");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <RendezvousContext.Provider value={{ data, loading, error, fetch }}>
      {children}
    </RendezvousContext.Provider>
  );
};
