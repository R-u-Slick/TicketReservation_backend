const express = require("express");
const dbinitRoute = require("./src/routes/dbinitRoute");
const { runDatabase } = require("./config/db");

const PORT = 3000;

const app = express();
app.use(dbinitRoute);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

runDatabase();
