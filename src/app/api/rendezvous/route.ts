import { NextResponse } from "next/server";
import { readJsonFile } from "@/lib/files";
import { Rendezvous } from "@/types/rendezvous";

export async function GET() {
  const data = await readJsonFile<Rendezvous[]>("src/data/rendezvous.json");
  return NextResponse.json(data);
}
