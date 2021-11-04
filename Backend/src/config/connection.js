const mongoose = require("mongoose");

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/challenge", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to DB");
});
