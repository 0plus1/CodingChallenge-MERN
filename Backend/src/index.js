const express = require("express");
const cors = require("cors");

const startConnection = require("../src/config/connection");
const bookRouter = require("./routes/book");

const app = express();
app.use(
  cors({
    credentials: true,
    optionsSuccessStatus: 200,
    origin:
      process.env.NODE_ENV === "production"
        ? /\.netlify\.app$/
        : ["http://127.0.0.1:3000", "http://localhost:3000"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", bookRouter);

startConnection(app);
