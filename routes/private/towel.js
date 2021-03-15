const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const upload  = require("../../module/fileLoader");

router.get('/', async function(req, res, next) {
    const result = await knex.select(["manufacturer","form","country","guarantee","name","arcticul","price","heated_towel_rail.id AS id"]).from("heated_towel_rail").innerJoin('products',"heated_towel_rail.id","=","products.id_heated");
    res.render('private/towel', {towelData:result});
});

router.get('/addTowel', async function(req, res, next) {
    res.render('private/addTowel');
});

router.post('/addTowel', upload.single('file'),async function(req, res, next) {
    try{
        const {arcticul, manufacturer,form,country,guarantee,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('heated_towel_rail').insert({
                manufacturer: decodeURI(manufacturer),
                form: decodeURI(form),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                name: decodeURI(name),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            const id  = await knex('heated_towel_rail').max('id');
            await knex('products').insert({
                arcticul: decodeURI(arcticul),
                id_heated: id[0]["max(`id`)"]
            })
        }else{
            res.status(500).end();
        }
        res.end();
    }catch (error){
        console.log(error);
        next(error);
    }
});

router.get('/update:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        const result = await knex
        .select(["manufacturer","form","country","guarantee","name","arcticul","imgSours","price","heated_towel_rail.id AS id"])
        .from("heated_towel_rail")
        .innerJoin('products',"heated_towel_rail.id","=","products.id_heated")
        .where({'heated_towel_rail.id': id});
        req.status = 201;
        res.render('private/updateTowel', {
            result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.patch('/update:id', upload.single('file'), async function (req, res, next) {
    try{
        const id = req.params.id;
        const {arcticul, manufacturer,form,country,guarantee,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('heated_towel_rail').where('id', id).update({
                manufacturer: decodeURI(manufacturer),
                form: decodeURI(form),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                name: decodeURI(name),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            await knex('products').where('id_heated', id).update({
                arcticul: decodeURI(arcticul),
                id_heated: id
            })
        }else{
            res.status(500).end();
        }
        res.end();
    }catch (error){
        console.log(error);
        next(error);
    }
})

router.delete('/delite:id', async function (req, res, next) {
    let id = req.params.id
    try {
        await knex('heated_towel_rail').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;