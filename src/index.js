import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

router.get("/", (req, res) => {
  res.send("Teste da api");
});

app.get("/usuario", (req, res) => {
  res.send("ok");
});

app.listen(8080, () => {
  console.log("Api rodado na porta 8080");
});
