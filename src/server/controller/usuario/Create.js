// import { StatusCodes } from "http-status-codes";
// import * as yup from "yup";
// import { validation } from "../../shared/middlewares/Validation.js";
// import { UsuarioProvider } from "../../providers/usuario/index.js";

// export const createValidation = validation((getSchema) => ({
//   body: getSchema(
//     yup.object().shape({
//       nome: yup.string().required().min(3).max(25),
//       cpf: yup.string().required(),
//       telefone: yup.string().required(),
//       email: yup.string().required().email(),
//       cidade: yup.string().required(),
//       estado: yup.string().required(),
//       pais: yup.string().required(),
//     })
//   ),
// }));

export const createUp = async (req, res) => {
  console.log(req.body);
};
