"use client";

import { useContext } from "react";
import { DossierContext } from "@/context/DossierContext";

export const useDossier = () => {
  const context = useContext(DossierContext);
  if (!context) {
    throw new Error(
      "useDossierContext doit être utilisé dans <DossierProvider>"
    );
  }

  return context;
};
