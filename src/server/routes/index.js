import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

export { router };
