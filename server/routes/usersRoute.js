const express = require("express");
const router = express.Router();

// Route to get all users => GET /api/users
router.get("/", async (req, res) => {
  res.status(200).json({ message: `This is the route to get all the users.` });
});

// Route to get a single users by id => GET /api/users/:id
router.get("/:id", async (req, res) => {
  res.status(200).json({
    message: `This is the route to get a specific user: ID: ${req.params.id}`,
  });
});

// Route to create a new user => POST /api/users
router.post("/", async (req, res) => {
  res.status(200).json({ message: `New user created...` });
});

// Route to update a single user by id => PUT /api/users/:id
router.put("/:id", async (req, res) => {
  res.status(200).json({ message: `User with ID ${req.params.id} updated...` });
});

// Route to delete a single user by id => DELETE /api/users/:id
router.delete("/:id", async (req, res) => {
  res.status(200).json({ message: `User with ID ${req.params.id} deleted...` });
});

module.exports = router;
