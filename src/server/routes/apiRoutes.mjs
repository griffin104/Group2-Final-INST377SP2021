import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to our API!")
})

// PLAYER BIOS

router.get("/player-bios", async (req, res) => {
  try {
    /* const stats = await db.PlayerBios.findAll();
    const reply =
      stats.length > 0 ? { data: stats } : { message: "no results found" };
    res.json(reply); */
    res.send("No database here")
  } catch (err) {
    console.error(err);
    res.error("Server error");
  } 
});


// PLAYER STATS

router.get("/player-stats", async (req, res) => {
    try {
      const stats = await db.PlayerStats.findAll();
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
      /* const stats = await db.Games.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply); */
      res.send("No database here")
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });


// GAME STATS

router.get("/game-stats", async (req, res) => {
  try {
    /* const stats = await db.GameStats.findAll();
    const reply =
      stats.length > 0 ? { data: stats } : { message: "no results found" };
    res.json(reply); */
    res.send("No database here")
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