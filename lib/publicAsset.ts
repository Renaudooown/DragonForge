import fs from "node:fs";
import path from "node:path";

export function publicAssetExists(publicPath: string | undefined | null): boolean {
  if (!publicPath) return false;
  const relative = publicPath.replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}
