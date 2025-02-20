import { Router } from "express";
import { createUp, createValidation } from "../controller/usuario/Create.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Api foi");
});

router.post("/usuario", createValidation, createUp);

export { router };
