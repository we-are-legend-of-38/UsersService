const express = require('express');
const router = express.Router();
const db = require('../database/MongoDB/mongoDB.js');
require('dotenv').config();

/*** GET Home Page Route***/
router.get('/', (req, res) => {
  res.send('Welcome to the react boiler plate');
});

/*** POST User Signup Route***/
router.post('/signup', async (req, res) => {
  const singleUser = { singleUser: req.body.singleUser };
  try {
    // console.log(db.save(JSON.stringify(singleUser)));
    await db.save(JSON.stringify(singleUser));
  } catch (err) {
    console.error('Error: Unable to sign up.', err);
  }

  res.send('Signup completed');
});


module.exports = router; 