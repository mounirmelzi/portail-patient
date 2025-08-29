"use client";

import { useContext } from "react";
import { RecommandationsContext } from "@/context/RecommandationsContext";

export const useRecommandations = () => {
  const context = useContext(RecommandationsContext);
  if (!context) {
    throw new Error(
      "useRecommandationsContext doit être utilisé dans <RecommandationsProvider>"
    );
  }

  return context;
};
