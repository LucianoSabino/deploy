// import { Knex } from "../../database/Knex/index.js";

export const create = async (data) => {
  try {
    const [result] = "Feito";
    return result;

    throw new Error("Erro ao cadastrar o registro"); // Corrigido o erro de digitação
  } catch (error) {
    return new Error("Erro ao cadastrar o registro"); // Corrigido para criar o erro corretamente
  }
};
