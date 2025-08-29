import { promises as fs } from "fs";
import path from "path";

export async function readJsonFile<T>(filePath: string): Promise<T> {
  const absolutePath = path.join(process.cwd(), filePath);
  const data = await fs.readFile(absolutePath, "utf-8");
  return JSON.parse(data) as T;
}
