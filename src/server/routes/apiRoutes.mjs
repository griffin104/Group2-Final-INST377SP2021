import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to our API!")
})


// GAME SHOOTING STATS

router.get("/game-shooting-stats", async (req, res) => {
    try {
      const stats = await db.GameShootingStats.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

// GAME STATS

router.get("/game-stats", async (req, res) => {
    try {
      const stats = await db.GameStats.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

// GAME TEAM SHOOTING

router.get("/game-team-shooting", async (req, res) => {
    try {
      const stats = await db.GameTeamShooting.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

// GAME TEAM STATS

router.get("/game-team-stats", async (req, res) => {
    try {
      const stats = await db.GameTeamStats.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

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

// PLAYER TOTALS

router.get("/player-totals", async (req, res) => {
    try {
      const stats = await db.PlayerTotals.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

// SCHEDULE

router.get("/schedule", async (req, res) => {
    try {
      const stats = await db.Schedule.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

// SHOOTING TOTALS

router.get("/shooting-totals", async (req, res) => {
    try {
      const stats = await db.ShootingTotals.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply);
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });

export default router