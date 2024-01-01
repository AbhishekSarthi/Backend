const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for Artists
const artistSchema = new Schema({
  external_urls: {
    spotify: String,
  },
  href: String,
  id: String,
  name: String,
  type: String,
  uri: String,
});

// Define the schema for Albums
const albumSchema = new Schema({
  album_type: String,
  artists: [artistSchema],
  available_markets: [String],
  external_urls: {
    spotify: String,
  },
  href: String,
  id: String,
  images: [
    {
      height: Number,
      url: String,
      width: Number,
    },
  ],
  name: String,
  release_date: Date,
  release_date_precision: String,
  total_tracks: Number,
  type: String,
  uri: String,
});

// Define the schema for Tracks
const trackSchema = new Schema({
  album: albumSchema,
  artists: [artistSchema],
  available_markets: [String],
  disc_number: Number,
  duration_ms: Number,
  explicit: Boolean,
  external_ids: {
    isrc: String,
  },
  external_urls: {
    spotify: String,
  },
  href: String,
  id: String,
  is_local: Boolean,
  name: String,
  popularity: Number,
  preview_url: String,
  track_number: Number,
  type: String,
  uri: String,
});

// Define the schema for the main data
const topSongsSchema = new Schema({
  items: [trackSchema],
  total: Number,
  limit: Number,
  offset: Number,
  href: String,
  next: String,
  previous: String,
});

// Create a model based on the schema
const TopSongs = mongoose.model("TopSongs", topSongsSchema);

module.exports = TopSongs;
