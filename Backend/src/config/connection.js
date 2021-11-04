const mongoose = require("mongoose");

module.exports = (app) => {
  const port = 5000;
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
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  });
};
