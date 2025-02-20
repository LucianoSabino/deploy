import { Router } from "express";
import { createUp } from "../controller/usuario/Create.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Api foi");
});

router.post("/usuario", createUp);

export { router };
