import express from 'express';
import db from './database/initializeDB.mjs';
import apiRoutes from './routes/apiRoutes.mjs';

const app = express()

const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);

function bootServer() {
  try {
    app.listen(PORT, async () => {
      const mysql = await db.sequelizeDB;
      await mysql.sync();
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
