import express from "express";
import sequelize from "sequelize";

import db from "../database/initializeDB.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to our API!")
})



/////////////////// /////////// ///////////////////
/////////////////// PLAYER BIOS ///////////////////
/////////////////// /////////// ///////////////////
router.get("/player-bios", async (req, res) => {
    try {
      /* const stats = await db.PlayerBios.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply); */
      res.send("No Database")
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });


router.get("/player-bios/:player_id", async (req, res) => {
  try {
    //ENDPOINT to get ELEMENT by ID
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.post("/player-bios", async (req, res) => {
  try {
    /* const newPlayerBio = await db.PlayerBios.create({
      player_number: req.body.player_number,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      height_feet: req.body.height_feet,
      height_inch: req.body.height_inch,
      weight: req.body.weight,
      hometown_city: req.body.hometown_city,
      hometown_state: req.body.hometown_state,
      major: req.body.major,
      high_school: req.body.high_school,
      season: req.body.season
    });
    res.json(newPlayerBio); */
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/player-bios", async (req, res) => {
  try {
    /* await db.PlayerBios.update(
      {
        player_number: req.body.player_number,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        height_feet: req.body.height_feet,
        height_inch: req.body.height_inch,
        weight: req.body.weight,
        hometown_city: req.body.hometown_city,
        hometown_state: req.body.hometown_state,
        major: req.body.major,
        high_school: req.body.high_school,
        season: req.body.season
      },
      {
        where: {
          player_id: req.body.player_id,
        },
      }
    );
    res.send("Successfully Updated"); */
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
})

router.delete("/player-bios/:player_id", async (req, res) => {
  try {
    //// Delete a row
    res.send("No Database")
  } catch (err) {
    console.error(err)
    res.error("Server Error")
  }
});


/////////////////// //////////// ///////////////////
/////////////////// Player Stats ///////////////////
/////////////////// //////////// ///////////////////
router.get("/player-stats", async (req, res) => {
  try {
    const playerStats = await db.PlayerStats.findAll();
    res.send(playerStats);
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.get("/player-stats/:player_stats_id", async (req, res) => {
  try {
    // ENDPOINT to get ELEMENT by ID
    res.send("No Endpoint")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.post("/player-stats", async (req, res) => {
  try {
    const newPlayerStats = await db.PlayerStats.create({
      player_id: req.body.player_id,
      games: req.body.games,
      games_started: req.body.games_started,
      minutes: req.body.minutes,
      off_reb: req.body.off_reb,
      def_reb: req.body.def_reb,
      assists: req.body.assists,
      steals: req.body.steals,
      blocks: req.body.blocks,
      turnovers: req.body.turnovers,
      points: req.body.points,
      fg_made: req.body.fg_made,
      fg_attempted: req.body.fg_attempted,
      three_point_made: req.body.three_point_made,
      three_point_attempted: req.body.three_point_attempted,
      ft_made: req.body.ft_made,
      ft_attempted: req.body.ft_attempted
    });
    res.json(newPlayerStats);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/player-stats", async (req, res) => {
  try {
    await db.PlayerStats.update(
      {
        games: req.body.games,
        games_started: req.body.games_started,
        minutes: req.body.minutes,
        off_reb: req.body.off_reb,
        def_reb: req.body.def_reb,
        assists: req.body.assists,
        steals: req.body.steals,
        blocks: req.body.blocks,
        turnovers: req.body.turnovers,
        points: req.body.points,
        fg_made: req.body.fg_made,
        fg_attempted: req.body.fg_attempted,
        three_point_made: req.body.three_point_made,
        three_point_attempted: req.body.three_point_attempted,
        ft_made: req.body.ft_made,
        ft_attempted: req.body.ft_attempted
      },
      {
        where: {
          player_stats_id: req.body.player_stats_id,
        },
      }
    );
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
})

router.delete("/player-stats/:player_stats_id", async (req, res) => {
  try {
    //// Delete a row
    res.send("No Endpoint")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});


/////////////////// ///// ///////////////////
/////////////////// GAMES ///////////////////
/////////////////// ///// ///////////////////
router.get("/games", async (req, res) => {
    try {
      const stats = await db.Games.findAll();
      const reply =
        stats.length > 0 ? { data: stats } : { message: "no results found" };
      res.json(reply); */
      res.send("No Database")
    } catch (err) {
      console.error(err);
      res.error("Server error");
    } 
  });


router.get("/games/:game_id", async (req, res) => {
  try {
    // ENDPOINT to get ELEMENT by ID
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.post("/games", async (req, res) => {
  try {
    const newGame = await db.Games.create({
      season: req.body.season,
      opposing_school: req.body.opposing_school,
      home_or_away: req.body.home_or_away,
      date_day: req.body.date_day,
      date_month: req.body.date_month,
      date_year: req.body.date_year
    });
    res.json(newGame); 
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/games", async (req, res) => {
  try {
    await db.Games.update(
      {
        season: req.body.season,
        opposing_school: req.body.opposing_school,
        home_or_away: req.body.home_or_away,
        date_day: req.body.date_day,
        date_month: req.body.date_month,
        date_year: req.body.date_year
      },
      {
        where: {
          game_id: req.body.game_id,
        },
      }
    );
    res.send("Successfully Updated"); */
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
})

router.delete("/games/:game_id", async (req, res) => {
  try {
    //// Delete a row
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});


/////////////////// ////////// ///////////////////
/////////////////// GAME STATS ///////////////////
/////////////////// ////////// ///////////////////
router.get("/game-stats", async (req, res) => {
  try {
    /* const gameStats = await db.GameStats.findAll();
    res.send(gameStats); */
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.get("/game-stats/:game_stats_id", async (req, res) => {
  try {
    // ENDPOINT to get ELEMENT by ID
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.post("/game-stats", async (req, res) => {
  try {
    /* const newGameStats = await db.GameStats.create({
      game_id: req.body.game_id
      outcome: req.body.outcome,
      maryland_score: req.body.maryland_score,
      opposing_score: req.body.opposing_score,
      off_reb: req.body.off_reb,
      def_reb: req.body.def_reb,
      assists: req.body.assists,
      steals: req.body.steals,
      blocks: req.body.blocks,
      turnovers: req.body.turnovers,
      fouls: req.body.fouls,
      fg_made: req.body.fg_made,
      fg_attempted: req.body.fg_attempted,
      three_point_made: req.body.three_point_made,
      three_point_attempted: req.body.three_point_attempted,
      ft_made: req.body.ft_made,
      ft_attempted: req.body.ft_attempted
    });
    res.json(newGameStats); */
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/game-stats", async (req, res) => {
  try {
    /* await db.Games.update(
      {
        game_id: req.body.game_id,
        outcome: req.body.outcome,
        maryland_score: req.body.maryland_score,
        opposing_score: req.body.opposing_score,
        off_reb: req.body.off_reb,
        def_reb: req.body.def_reb,
        assists: req.body.assists,
        steals: req.body.steals,
        blocks: req.body.blocks,
        turnovers: req.body.turnovers,
        fouls: req.body.fouls,
        fg_made: req.body.fg_made,
        fg_attempted: req.body.fg_attempted,
        three_point_made: req.body.three_point_made,
        three_point_attempted: req.body.three_point_attempted,
        ft_made: req.body.ft_made,
        ft_attempted: req.body.ft_attempted
      },
      {
        where: {
          game_stats_id: req.body.game_stats_id,
        },
      }
    ); 
    res.send("Successfully Updated"); */
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
})

router.delete("/game-stats/:game_stats_id", async (req, res) => {
  try {
    //// Delete a row
    res.send("No Database")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});


/////////////////// ///////////////// ///////////////////
/////////////////// PLAYER GAME STATS ///////////////////
/////////////////// ///////////////// ///////////////////

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

router.get("/player-game-stats/:player_game_stats_id", async (req, res) => {
  try {
    //ENDPOINT to get ELEMENT by ID
    res.send("No Endpoint")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

router.post("/player-game-stats", async (req, res) => {
  try {
    const newPlayerGameStats = await db.PlayerGameStats.create({
      player_id: req.body.player_id,
      game_id: req.body.game_id,
      minutes: req.body.minutes,
      points: req.body.points,
      off_reb: req.body.off_reb,
      def_reb: req.body.def_reb,
      assists: req.body.assists,
      steals: req.body.steals,
      blocks: req.body.blocks,
      turnovers: req.body.turnovers,
      fouls: req.body.fouls,
      fg_made: req.body.fg_made,
      fg_attempted: req.body.fg_attempted,
      three_point_made: req.body.three_point_made,
      three_point_attempted: req.body.three_point_attempted,
      ft_made: req.body.ft_made,
      ft_attempted: req.body.ft_attempted
    });
    res.json(newPlayerGameStats);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

router.put("/player-game-stats", async (req, res) => {
  try {
    await db.PlayerGameStats.update(
      {
        minutes: req.body.minutes,
        points: req.body.points,
        off_reb: req.body.off_reb,
        def_reb: req.body.def_reb,
        assists: req.body.assists,
        steals: req.body.steals,
        blocks: req.body.blocks,
        turnovers: req.body.turnovers,
        fouls: req.body.fouls,
        fg_made: req.body.fg_made,
        fg_attempted: req.body.fg_attempted,
        three_point_made: req.body.three_point_made,
        three_point_attempted: req.body.three_point_attempted,
        ft_made: req.body.ft_made,
        ft_attempted: req.body.ft_attempted
      },
      {
        where: {
          player_game_stats_id: req.body.player_game_stats_id,
        },
      }
    );
    res.send("Successfully Updated");
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
})

router.delete("/player-game-stats/:player_game_stats_id", async (req, res) => {
  try {
    //// Delete a row
    res.send("No Endpoint")
  } catch (err) {
    console.error(err);
    res.error("Server Error");
  }
});

/////////////////// //////////// ///////////////////
/////////////////// Custom Query ///////////////////
/////////////////// //////////// ///////////////////

router.get("/custom", async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log("Result: ", result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error("Server error");
  }
});

export default router
