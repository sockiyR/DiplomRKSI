const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const session = require('express-session');


router.get('/', function(req, res, next) {
    res.render('private/login');
});


router.post('/autorez', async function (req, res, next) {
  const {login, password} = req.body;
  const [user] = await knex.select("*").from('users').where('login',login);

  if (user && password == user.password) {
      req.session.nameUser = "admin";
      res.status(200).end();
  } else {
      res.status(400).end();
  }
});


module.exports = router;
  