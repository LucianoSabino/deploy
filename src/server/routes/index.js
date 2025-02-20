import { Router } from "express";
import { createUp, createValidation } from "../controller/usuario/create.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

// Cadastro de usuario e login
router.post("/usuario", createValidation, createUp);
router.post("/sign", singUpValidation, singUp);

export { router };
