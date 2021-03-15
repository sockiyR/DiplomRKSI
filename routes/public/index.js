const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const bathroom = await knex.select(["manufacturer","frame","drain","panel","length","width","depth","arcticul","name","price","imgSours","bathroom.id AS id"]).from("bathroom").innerJoin('products',"bathroom.id","=","products.id_bath");
    const shower = await knex.select(["manufacturer","guarantee","height","length","width","name","arcticul","price","imgSours","shower.id AS id"]).from("shower").innerJoin('products',"shower.id","=","products.id_shower");
    const sinks = await knex.select(["manufacturer","country","width","depth","guarantee","name","arcticul","imgSours","price","sinks.id AS id"]).from("sinks").innerJoin('products',"sinks.id","=","products.id_sinks");
    const mixer = await knex.select(["manufacturer","control","country","guarantee","arcticul","name","imgSours","price","mixer.id AS id"]).from("mixer").innerJoin('products',"mixer.id","=","products.id_mixer");
    const heated_towel_rail = await knex.select(["manufacturer","form","country","guarantee","name","arcticul","imgSours","price","heated_towel_rail.id AS id"]).from("heated_towel_rail").innerJoin('products',"heated_towel_rail.id","=","products.id_heated");
    const toilet = await knex.select(["manufacturer","width","depth","release_direction","seat_included","country","imgSours","guarantee","price","name","arcticul","toilet.id AS id"]).from("toilet").innerJoin('products',"toilet.id","=","products.id_toilet");

  res.render('public/index',{
    bathroomData:bathroom,
    showerData:shower,
    sinksData:sinks,
    mixerData:mixer,
    towelData:heated_towel_rail,
    toiletData:toilet
  });
  }
   catch (error) {
      console.log(error);
      next(error);
  }

 
});


module.exports = router;
