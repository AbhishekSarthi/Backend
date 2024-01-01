const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  height: Number,
  url: String,
  width: Number,
});

const artistSchema = new Schema({
  external_urls: {
    spotify: String,
  },
  followers: {
    href: String,
    total: Number,
  },
  genres: [String],
  href: String,
  id: String,
  images: [imageSchema],
  name: String,
  popularity: Number,
  type: String,
  uri: String,
});

const topArtistsSchema = new Schema({
  items: [artistSchema],
  total: Number,
  limit: Number,
  offset: Number,
  href: String,
  next: String,
  previous: String,
});

const TopArtists = mongoose.model("TopArtists", topArtistsSchema);

module.exports = TopArtists;
