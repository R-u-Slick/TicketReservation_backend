const express = require("express");
const path = require("path");
const dbinitRoute = require("./src/routes/dbinitRoute");
const userRoutes = require("./src/routes/userRoutes");
const { runDatabase } = require("./config/db");

const PORT = 3000;

const app = express();
app.use(dbinitRoute);
app.use(userRoutes);
app.use(express.static(path.resolve(__dirname, "client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

runDatabase();
