const express = require("express");
const path = require("path");
const dbinitRoute = require("./src/routes/dbinitRoute");
const userRoutes = require("./src/routes/userRoutes");
const cityRoutes = require("./src/routes/cityRoutes");
const filmRoutes = require("./src/routes/filmRoutes");
const cinemaRoutes = require("./src/routes/cinemaRoutes");
const seatRoutes = require("./src/routes/seatRoutes");
const hallRoutes = require("./src/routes/hallRoutes");

const { runDatabase } = require("./config/db");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(dbinitRoute);
app.use(userRoutes);
app.use(cityRoutes);
app.use(filmRoutes);
app.use(cinemaRoutes);
app.use(seatRoutes);
app.use(hallRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}...`);
});

runDatabase();
