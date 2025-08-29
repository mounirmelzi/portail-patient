import { NextResponse } from "next/server";
import { readJsonFile } from "@/lib/files";
import { DossierMedical } from "@/types/dossier";

export async function GET() {
  const data = await readJsonFile<DossierMedical>("src/data/dossier.json");
  return NextResponse.json(data);
}
