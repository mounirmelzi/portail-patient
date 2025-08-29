"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { Recommandation } from "@/types/recommandation";
import { getRecommandations } from "@/services/recommandations";

type RecommandationsContextType = {
  data: Recommandation[];
  loading: boolean;
  error: string;
  fetch: () => Promise<void>;
};

export const RecommandationsContext = createContext<
  RecommandationsContextType | undefined
>(undefined);

export const RecommandationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Recommandation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      setData(await getRecommandations());
    } catch (e: any) {
      console.error(e);
      setError("Erreur lors du chargement des recommandations");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <RecommandationsContext.Provider value={{ data, loading, error, fetch }}>
      {children}
    </RecommandationsContext.Provider>
  );
};
