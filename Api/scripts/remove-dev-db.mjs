import fs from "node:fs";
import path from "node:path";

const dbPath = path.resolve(process.cwd(), "dev.db"); // si tu db está en otra ruta, cambia aquí

try {
  if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
    console.log(`Deleted: ${dbPath}`);
  } else {
    console.log(`No db found at: ${dbPath}`);
  }
} catch (err) {
  console.error("Failed deleting dev.db:", err);
  process.exit(1);
}