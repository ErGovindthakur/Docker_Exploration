require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;
const MESSAGE = process.env.MESSAGE;

app.get("/", (req, res) => {
  res.send(MESSAGE);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});