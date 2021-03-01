// const knex = require("../../db.js");
var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', async function(req, res, next) {
//   let News = await knex.select("*").from('News');
//   let Shares = await knex.select("*").from('Shares');
//   res.render('public/index',{
//     News : News,
//     Shares : Shares
//   });
// });

router.get('/', function(req, res, next) {
  res.render('public/index');
});


module.exports = router;
