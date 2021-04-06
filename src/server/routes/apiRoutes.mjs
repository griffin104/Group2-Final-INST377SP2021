import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to our API!")
})


// PLAYERS

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


// GAMES

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

// PLAYER GAME STATS

router.get("/player-game-stats", async (req, res) => {
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


export default router