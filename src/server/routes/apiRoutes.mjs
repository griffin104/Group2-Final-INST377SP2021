import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to our API!")
})


  /////////////////// /////////////////// ///////////////////
/////////////////// PLAYER GAME STATS ///////////////////
/////////////////// /////////////////// ///////////////////

router.get("/player_game_stats", async (req, res) => {
  try {
    const stats = await db.PlayerGameStats.findAll();
    const reply =
      stats.length > 0 ? { data: stats } : { message: "no results found" };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  } 
});

router.get("/player_game_stats:game_stats_id", async (req, res) => {
  try {
    //ENDPOINT to get ELEMENT by ID
  } catch (err) {
    console.error(err);
    res.error("Server Error");
});

/////////////////// /////////////////// ///////////////////
/////////////////// PLAYERS_BIOS ///////////////////
/////////////////// /////////////////// ///////////////////
router.get("/players", async (req, res) => {
    try {
      const stats = await db.Players.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

/////////////////// /////////////////// ///////////////////
/////////////////// GAMES ///////////////////
/////////////////// /////////////////// ///////////////////
router.get("/games", async (req, res) => {
    try {
      const stats = await db.Games.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });


  router.get("/game_stats:game_stats_id", async (req, res) => {
    try {
      // ENDPOINT to get ELEMENT by ID
    } catch (err) {
      console.error(err);
      res.error("Server Error");
  });


/////////////////// /////////////////// ///////////////////
/////////////////// Game Stats END POINTS ///////////////////
/////////////////// /////////////////// ///////////////////
router.get("/game_stats", async (req, res) => {
  try {
    const gameStats = await db.gameStats.findAll();
    res.send(gameStats);
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.get("/game_stats:game_stats_id", async (req, res) => {
  try {
    // ENDPOINT to get ELEMENT by ID
  } catch (err) {
    console.error(err);
    res.error("Server Error");
});


/////////////////// /////////////////// ///////////////////
/////////////////// Player Stats END POINTS ///////////////////
/////////////////// /////////////////// ///////////////////
router.get("/player_stats", async (req, res) => {
  try {
    const playerStats = await db.playerStats.findAll();
    res.send(playerStats);
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.get("/player_stats:player_stats_id", async (req, res) => {
  try {
    // ENDPOINT to get ELEMENT by ID
  } catch (err) {
    console.error(err);
    res.error("Server Error");
});


export default router