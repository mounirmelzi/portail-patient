import axios from "axios";
import { DossierMedical } from "@/types/dossier";

export async function getDossier() {
  const response = await axios.get<DossierMedical>("/api/dossier");
  return response.data;
}
