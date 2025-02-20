import path from "path";
import { fileURLToPath } from "url";

// Obter __dirname corretamente
const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

// Corrigir caso o caminho contenha uma duplicação de "src"
if (__dirname.includes("/src/src/")) {
  __dirname = __dirname.replace("/src/src/", "/src/");
}

// Diretório base do projeto
const BASE_DIR = path.resolve(__dirname, "..", "..", "..");

// Configurações comuns do banco de dados
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
