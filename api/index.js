import express from "express";
import db from "./db/dbconnect.js";
import personRoutes from "./routes/uer.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();
app.use(express.json());
app.use("/", personRoutes);
app.use("/", authRoutes);

app.listen(3001, () => {
  console.log("server is runing on port 3001");
});
