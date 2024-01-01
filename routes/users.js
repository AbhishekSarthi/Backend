const express = require("express");
const router = express.Router();
// const User = require("../models/user");
const TopArtist = require("../models/topArtist");
const TopSong = require("../models/topSong");

//SUBMIT users Top artists
router.post("/artists", async (req, res) => {
  // console.log(req.body,"hello");

  const userData = new TopArtist({
    items: req.body.items,
    total: req.body.total,
    limit: req.body.limit,
    offset: req.body.offset,
    href: req.body.href,
    next: req.body.next,
    previous: req.body.previous,
  });

  console.log(userData);
  try {
    const savedUserData = await userData.save();
    res.json(savedUserData); // RESPONSE FOR CONSOLE
  } catch (err) {
    res.json({ message: err }); // RESPONSE FOR CONSOLE
  }
});

//POST users Top songs
router.post("/songs", async (req, res) => {
  // console.log(req.body,"hello");

  const userData = new TopSong({
    items: req.body.items,
    total: req.body.total,
    limit: req.body.limit,
    offset: req.body.offset,
    href: req.body.href,
    next: req.body.next,
    previous: req.body.previous,
  });

  console.log(userData);
  try {
    const savedUserData = await userData.save();
    res.json(savedUserData); // RESPONSE FOR CONSOLE
  } catch (err) {
    res.json({ message: err }); // RESPONSE FOR CONSOLE
  }
});

// GET TopArtists
router.get("/artists", async (req, res) => {
  try {
    const usersData = await TopArtist.find();
    res.json(usersData); // RESPONSE FOR CONSOLE
  } catch (err) {
    res.json({ message: err }); // RESPONSE FOR CONSOLE
  }
});

// GET TopSongs
router.get("/songs", async (req, res) => {
  try {
    const usersData = await TopSong.find();
    res.json(usersData); // RESPONSE FOR CONSOLE
  } catch (err) {
    res.json({ message: err }); // RESPONSE FOR CONSOLE
  }
});

// FIND SPECIFIC POST
// router.get("/:userId", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     res.json(user);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//DELETE POST
// router.delete("/:userId", async (req, res) => {
//   try {
//     const deletedUser = await User.deleteOne({ _id: req.params.userId });
//     res.json(deletedUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//UPDATE POST
// router.patch("/:userId", async (req, res) => {
//   try {
//     const updatedUser = await User.updateOne(
//       { _id: req.params.userId },
//       { $set: { title: req.body.title } }
//     );
//     res.json(updatedUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
