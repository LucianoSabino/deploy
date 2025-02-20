import path from "path";
import { fileURLToPath } from "url";

// Obter o caminho do próprio arquivo knexfile.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho base (assumindo que o knexfile está na raiz do projeto)
const BASE_DIR = path.resolve(__dirname, ".");

console.log("BASE_DIR:", BASE_DIR);
console.log(
  "Migrations Path:",
  path.join(BASE_DIR, "server", "database", "migrations")
);
console.log("Database Path:", path.join(BASE_DIR, "database.sqlite"));

const commonConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: path.join(BASE_DIR, "server", "database", "migrations"),
    extension: "js",
  },
  seeds: {
    directory: path.join(BASE_DIR, "server", "database", "seeds"),
  },
};

const development = {
  ...commonConfig,
  connection: {
    filename: path.join(BASE_DIR, "database.sqlite"),
  },
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
};

// Produção igual ao desenvolvimento (para SQLite)
const production = { ...development };

const test = {
  ...commonConfig,
  connection: {
    filename: path.join(BASE_DIR, "test_database.sqlite"),
  },
};

export default {
  development,
  production,
  test,
};
