import path from "path";
import { fileURLToPath } from "url";
import process from "process";

// Obter o diretório raiz do projeto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_DIR = process.cwd(); // Caminho do diretório raiz no servidor

console.log("BASE_DIR:", BASE_DIR);
console.log(
  "Migrations Path:",
  path.join(BASE_DIR, "server", "database", "migrations")
);
console.log("Database Path:", path.join(BASE_DIR, "database.sqlite"));

const commonConfig = {
  migrations: {
    directory: path.join(BASE_DIR, "server", "database", "migrations"),
  },
  seeds: {
    directory: path.join(BASE_DIR, "server", "database", "seeds"),
  },
};

const development = {
  ...commonConfig,
  client: "sqlite3",
  connection: {
    filename: path.join(BASE_DIR, "database.sqlite"),
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
};

// Produção = Desenvolvimento
const production = { ...development };

const test = {
  ...commonConfig,
  client: "sqlite3",
  connection: {
    filename: path.join(BASE_DIR, "test_database.sqlite"),
  },
};

const knexConfig = {
  development,
  production,
  test,
};

export default knexConfig;
