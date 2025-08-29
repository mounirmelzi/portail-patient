import axios from "axios";
import { Recommandation } from "@/types/recommandation";

export async function getRecommandations() {
  const response = await axios.get<Recommandation[]>("/api/recommandations");
  return response.data;
}
