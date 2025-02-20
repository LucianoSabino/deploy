import { app } from "./server/server.js";

app.listen(process.env.PORT || 8080, () => {
  console.log("Api rodado na porta 8080");
});
