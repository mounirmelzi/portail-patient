import axios from "axios";
import { Rendezvous } from "@/types/rendezvous";

export async function getRendezvous() {
  const response = await axios.get<Rendezvous[]>("/api/rendezvous");
  return response.data;
}
