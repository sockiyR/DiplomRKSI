const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function(req, res, next) {
    res.render('private/login');
});


router.post('/autorez', async function (req, res, next) {
    const { login, password } = req.body;
    // const [user] = await knex.select("*").from('users').where('login', login);
    const [user] = await knex.select("*").from('users').where('login',login);


    bcrypt.compare(password, user.password).then(function(result) {
        if (user && result) {
          req.session.nameUser = "admin";
          res.status(200).end();
        } else {
          res.status(400).end();
        }
      });
});

router.post('/addUser', async (req, res, next) => {
    let {
      login,
      password
    } = req.body;
    bcrypt.hash(password, saltRounds).then( async function(hash) {
      await knex('users').insert({
          login: login,
          password: hash
        })
    });
    res.end();
  })

module.exports = router;
  