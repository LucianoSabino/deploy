import { Router } from "express";
import { login, loginValidation } from "../controller/login/login.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

// Cadastro de usuario e login
router.post("/login", loginValidation, login);

export { router };
