const express = require('express');
const router = express.Router();
const Beer = require('../models/beer.js');

router.get("/", (req, res) => {
  Beer.find({}, (err, foundBeer) => {
    res.json(foundBeer);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Beer.create(req.body, (err, createdBeer) => {
    res.json(createdBeer);
  });
});

router.delete("/:id", (req,res) => {
  Beer.findByIdAndRemove(req.params.id, (err, deletedBeer) => {
    res.json(deletedBeer);
  });
});

router.put("/:id", (req,res) => {
  Beer.findByIdAndUpdate(req.params.id, req.body, (err, updatedBeer) => {
    res.json(updatedBeer);
  });
});


module.exports = router;
