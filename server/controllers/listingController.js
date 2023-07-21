/* eslint-disable quotes */
const { ids } = require("webpack");
const Listing = require("../models/listingModel");

// const { Person } = require("../models/starWarsModels");

const listingController = {};

listingController.getListings = async (req, res, next) => {
  Listing.find()
    .limit(200)
    .exec()
    .then((listing) => {
      res.locals = listing;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

listingController.getOneListing = async (req, res, next) => {
  const id = req.params.id;
  Listing.findOne({ listing_url: `https://www.airbnb.com/rooms/${id}` })
    .exec()
    .then((listing) => {
      res.locals = listing;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

listingController.getSpecies = (req, res, next) => {
  // write code here

  next();
};

listingController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

listingController.getFilm = (req, res, next) => {
  // write code here

  next();
};

listingController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = listingController;
