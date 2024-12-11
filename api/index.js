import express from "express";
import db from "./db/dbconnect.js";
import personRoutes from "./routes/uer.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();
app.use(express.json());
app.use("/", personRoutes);
app.use("/", authRoutes);

app.use((err,req,res,next)=>{

const statusCode=err.statusCode ||500;
const message=err.message ||"Internal server error"
res.status(statusCode).json({
success:false,
statusCode,
message

})
})

app.listen(3001, () => {
  console.log("server is runing on port 3001");
});
