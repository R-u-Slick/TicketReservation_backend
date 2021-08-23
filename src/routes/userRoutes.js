const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

// Create a new user
router.post("/user", userController.passwordHash, userController.create);
// Get a list of all existing users
router.get("/user", userController.getList);
// Delete an existing user
router.delete("/user", userController.delete);
// Update an existing user
router.patch("/user", userController.update);
// User login
router.post("/login", userController.login);

module.exports = router;
