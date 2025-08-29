"use client";

import React, { createContext, useState, useEffect, useCallback } from "react";
import { DossierMedical } from "@/types/dossier";
import { getDossier } from "@/services/dossier";

type DossierContextType = {
  data: DossierMedical | null;
  loading: boolean;
  error: string;
  fetch: () => Promise<void>;
};

export const DossierContext = createContext<DossierContextType | undefined>(
  undefined
);

export const DossierProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<DossierMedical | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      setData(await getDossier());
    } catch (e: any) {
      console.error(e);
      setError("Erreur lors du chargement du dossier");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <DossierContext.Provider value={{ data, loading, error, fetch }}>
      {children}
    </DossierContext.Provider>
  );
};
