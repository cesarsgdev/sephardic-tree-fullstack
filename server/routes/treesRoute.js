const express = require("express");
const router = express.Router();
const Tree = require("../models/treeModel");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

// Endpoint to get all trees from a specific user => GET /api/trees
router.get("/", verifyToken, async (req, res) => {
  const { user } = req.body;
  let trees;
  try {
    if (user.roles.includes("admin")) {
      trees = await Tree.find();
    } else {
      trees = await Tree.find({ uid: user._id });
    }

    if (trees) {
      res.status(200).json({ success: true, data: trees });
    }
  } catch (e) {
    res.status(200).json({ success: false, message: `${e.message}` });
  }
});

// Endpoint to get a specific tree by ID => GET /api/trees/:id
router.get("/:id", async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id).populate("generations");
    res.status(200).json({ success: true, data: tree });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
  // res.status(200).json({
  //   message: `This is the endpoint to get a specific tree by ID. ID ${req.params.id}`,
  // });
});

// Endpoint to create a new tree => POST /api/trees
router.post("/", async (req, res) => {
  try {
    const tree = new Tree(req.body);
    await tree.save();
    res.status(200).json({ success: true, data: tree });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

// Endpoint to delete a specific tree => DELETE /api/trees/:id
router.delete("/:id", async (req, res) => {
  // res.status(200).json({
  //   message: `This is the endpoint to delete a tree by specific ID. ID ${req.params.id}`,
  // });
});

// Endpoint to update a specific tree by ID => PUT /api/trees/:id

router.put("/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const tree = await Tree.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true, setDefaultsOnInsert: true, upsert: false }
    );
    res.status(200).json({ success: true, data: tree });
  } catch (e) {
    res.status(200).json({ success: false, message: `${e.message}` });
  }
  // res.status(200).json({
  //   message: `This is the endpoint to update a specific tree by ID. ID ${req.params.id}`,
  // });
});

module.exports = router;
