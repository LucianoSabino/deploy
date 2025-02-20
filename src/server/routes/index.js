import { Router } from "express";
import { createUp, createValidation } from "../controller/usuario/create.js";
import { singUp, singUpValidation } from "../controller/login/SignUp.js";
import { login, loginValidation } from "../controller/login/login.js";
import {
  veiculoCreate,
  veiculoValidation,
} from "../controller/veiculo/Create.js";
import { busca, buscaValidation } from "../controller/veiculo/Busca.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

// Cadastro de usuario e login
router.post("/usuario", createValidation, createUp);
router.post("/sign", singUpValidation, singUp);

// Login
router.post("/login", loginValidation, login);

// veiculo
router.post("/veiculo", veiculoValidation, veiculoCreate); // Cadastro
router.get("/busca", buscaValidation, busca);

export { router };
