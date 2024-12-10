import mongoose from "mongoose";
const mongoUrl = 'mongodb://localhost:27017/MyBlog';
// const mongoUrl = 'mongodb+srv://chumarsarwar3:qwerty1234@hotels.uv95a.mongodb.net/'
mongoose.connect(mongoUrl);
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
// import mongoose from "mongoose";

// const mongoUrl = "mongodb://localhost:27017/BlogDatabase";

// mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("connected", () => {
//   console.log("MongoDB Connected");
// });

// db.on("disconnected", () => {
//   console.log("MongoDB Disconnected");
// });

// db.on("error", (err) => {
//   console.error("MongoDB Connection error", err);
// });

// export default db; // Use export default
