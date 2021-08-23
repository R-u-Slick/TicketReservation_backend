const { Router } = require("express");
const dbinitController = require("../controllers/dbinitController");

const router = Router();

router.get("/dbinit", dbinitController.intialize);

module.exports = router;
