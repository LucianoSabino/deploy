import path from "path";
import { fileURLToPath } from "url";

// Obter __dirname corretamente
const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

// Corrigir caso o caminho contenha uma duplicação de "src"
if (__dirname.includes("/src/src/")) {
  __dirname = __dirname.replace("/src/src/", "/src/");
}

console.log("__dirname corrigido:", __dirname);

// Configurações comuns do banco de dados
const commonConfig = {
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
};

const development = {
  ...commonConfig,
  client: "sqlite3",
  connection: {
    filename: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "database.sqlite"
    ),
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
    filename: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "test_database.sqlite"
    ),
  },
};

const knexConfig = {
  development,
  production, // Agora produção é exatamente igual a desenvolvimento
  test,
};

export default knexConfig;
