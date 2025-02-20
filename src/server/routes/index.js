import { Router } from "express";
import { UsuarioController } from "../controller/usuario";
const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

// Cadastro de usuario e login
router.post(
  "/usuario",
  UsuarioController.createValidation,
  UsuarioController.createUp
);

export { router };
