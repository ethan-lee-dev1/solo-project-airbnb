const express = require("express");

const listingController = require("../controllers/listingController");

const router = express.Router();

router.get("/", listingController.getListings, (req, res) => {
  // console.log(res);
  res.status(200).json(res.locals);
});

router.get("/:id", listingController.getOneListing, (req, res) => {
  // console.log(res);
  res.status(200).json(res.locals);
});

router.get("/species", listingController.getSpecies, (req, res) =>
  res.status(200).json({})
);

router.get("/homeworld", listingController.getHomeworld, (req, res) =>
  res.status(200).json({})
);

router.get("/film", listingController.getFilm, (req, res) =>
  res.status(200).json({})
);

router.post("/character", listingController.addCharacter, (req, res) =>
  res.status(200).json({})
);

module.exports = router;
