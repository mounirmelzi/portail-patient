"use client";

import { useContext } from "react";
import { RendezvousContext } from "@/context/RendezvousContext";

export const useRendezvous = () => {
  const context = useContext(RendezvousContext);
  if (!context) {
    throw new Error(
      "useRendezvousContext doit être utilisé dans <RendezvousProvider>"
    );
  }

  return context;
};
