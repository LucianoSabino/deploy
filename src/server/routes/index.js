import { Router } from "express";
import { singUp, singUpValidation } from "../controller/login/SignUp.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

router.post("/login", loginValidation, login);

export { router };
