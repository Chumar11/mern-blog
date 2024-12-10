import express from "express";
import db from "./db/dbconnect.js";
const app = express();

app.listen(3001, () => {
  console.log("server is runing on port 3001");
});
