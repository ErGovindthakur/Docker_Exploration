import express from "express";
import dotenv from "dotenv"

dotenv.config();
const app = express();

const port = process.env.PORT || 5040;
const Message = process.env.ENV_MESSAGE

app.get("/", (req, res) => {
  res.send(`Docker is awesome and env message ${Message}`);
});

app.listen(port,()=>{
     console.log(`server is running at port http://localhost:${port}`)
})