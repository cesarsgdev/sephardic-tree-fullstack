const express = require("express");
const router = express.Router();
const Generation = require("../models/generationModel");
const Tree = require("../models/treeModel");

// Endpoint to add a new generation to a specific tree by ID => POST /api/generations/:treeID
router.post("/:treeID", async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.treeID);
    if (tree) {
      const generation = new Generation(req.body);
      await generation.save();
      tree.generations.push(generation._id);
      await tree.save();
      res.status(200).json({ success: true, data: generation });
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

router.delete("/:treeID/:generationID", async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.treeID);
    const generation = await Generation.findById(req.params.generationID);

    if (tree && generation) {
      const tree = await Tree.findOneAndUpdate(
        { _id: req.params.treeID },
        { $pull: { generations: req.params.generationID } }
      );
      res.status(200).json({ success: true, message: tree });
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

module.exports = router;
