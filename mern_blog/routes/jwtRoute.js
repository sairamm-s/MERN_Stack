const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const jwtSecret = 'deadlymass';

router.post('/register', async (req, res) => {
  try {
    var existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json('An user with this email already exists');
    }

    var passwordHash = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    });
    var data = await user.save();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    var userData = await User.findOne({ email: req.body.email });
    if (!userData) {
      return res.status(400).json('This email id doesnt exist');
    }

    var validPass = await bcrypt.compare(req.body.password, userData.password);
    if (!validPass) {
      return res.status(400).json('Password not valid');
    }

    var userToken = await jwt.sign({ email: userData.email }, 'mySecretKey');
    // res.json({
    //   userToken,
    //   email: userData.email,
    // });
    res.header('auth', userToken).send(userToken);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const validUser = (req, res, next) => {
  var token = req.header('auth');
  req.token = token;
  next();
};

router.get('/getAll', validUser, async (req, res) => {
  jwt.verify(req.token, 'mySecretKey', async (err, data) => {
    if (err) {
      res.status(404).json({ err });
    } else {
      const data = await User.find().select(['-password']);
      res.json({ data });
    }
  });
});

module.exports = router;
