import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("MongoDB Connected");
});
db.on("disconnected", () => {
  console.log("MongoDB Disonnected");
});
db.on("error", (err) => {
  console.log("MongoDB Connection error", err);
});

export default db;
