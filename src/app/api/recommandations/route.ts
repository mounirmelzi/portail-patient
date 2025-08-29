import { NextResponse } from "next/server";
import { readJsonFile } from "@/lib/files";
import { Recommandation } from "@/types/recommandation";

export async function GET() {
  const data = await readJsonFile<Recommandation[]>(
    "src/data/recommandations.json"
  );
  return NextResponse.json(data);
}
