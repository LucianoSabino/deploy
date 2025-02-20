// import { Knex } from "../../database/Knex/index.js";

export const create = async (data) => {
  try {
    console.log(data);
    throw new Error("Erro ao cadastrar o registro"); // Corrigido o erro de digitação
  } catch (error) {
    return new Error("Erro ao cadastrar o registro"); // Corrigido para criar o erro corretamente
  }
};
