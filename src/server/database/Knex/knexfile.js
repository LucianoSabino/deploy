// knexfile.js

const development = {
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3", // Caminho para o arquivo do banco SQLite
  },
  useNullAsDefault: true, // Necessário para o SQLite

  migrations: {
    directory: "./migrations", // Caminho para a pasta de migrações
  },
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
};

const production = {
  ...development,
};

const test = {
  client: "sqlite3", // Ajuste conforme o banco de dados utilizado no ambiente de teste
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

// Carregar a configuração correta dependendo do ambiente
const knexConfig = {
  development,
  production,
  test,
};

export default knexConfig; // Exporte o objeto inteiro
