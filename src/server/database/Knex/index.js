import knex from "knex";
import "dotenv/config";
import knexConfig from "./knexfile.js"; // Isso importa o objeto inteiro do knexfile.js

// Função para escolher o ambiente
const getEnviroment = () => {
  // Retorna a configuração com base no ambiente
  switch (process.env.NODE_ENV) {
    case "production":
      return knexConfig.production; // Acessa diretamente a configuração de production
    case "test":
      return knexConfig.test; // Acessa a configuração de test, se você a tiver
    default:
      return knexConfig.development; // Retorna a configuração de development
  }
};

// Criação da instância do knex com a configuração do ambiente
export const Knex = knex(getEnviroment()); // Inicializa o Knex com a configuração do ambiente
