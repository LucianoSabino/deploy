import { Router } from "express";
import { UsuarioController } from "../controller/usuario/index.js";
import { LoginSignUpController } from "../controller/login/index.js";
import { VeiculoController } from "../controller/veiculo/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Api foi");
});

router.post(
  "/usuario",
  UsuarioController.createValidation,
  UsuarioController.createUp
);

router.post(
  "/signUp",
  LoginSignUpController.singUpValidation,
  LoginSignUpController.singUp
);
router.post(
  "/login",
  LoginSignUpController.loginValidation,
  LoginSignUpController.login
);

router.post(
  "/veiculo",
  VeiculoController.veiculoValidation,
  VeiculoController.veiculoCreate
);
router.get(
  "/veiculo",
  VeiculoController.buscaValidation,
  VeiculoController.busca
);

export { router };
