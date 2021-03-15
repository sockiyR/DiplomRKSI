const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const upload  = require("../../module/fileLoader");

router.get('/', async function(req, res, next) {
    const result = await knex.select(["manufacturer","width","depth","release_direction","seat_included","country","guarantee","price","name","arcticul","toilet.id AS id"]).from("toilet").innerJoin('products',"toilet.id","=","products.id_toilet");
    res.render('private/toilet', {toiletData:result});
});

router.get('/addToilet', async function(req, res, next) {
    res.render('private/addToilet');
});

router.post('/addToilet', upload.single('file'),async function(req, res, next) {
    try{
        const {arcticul, manufacturer,width,depth,release_direction,seat_included,country,guarantee,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('toilet').insert({
                manufacturer: decodeURI(manufacturer),
                width: decodeURI(width),
                depth: decodeURI(depth),
                name: decodeURI(name),
                release_direction: decodeURI(release_direction),
                seat_included: decodeURI(seat_included),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            const id  = await knex('toilet').max('id');
            await knex('products').insert({
                arcticul: decodeURI(arcticul),
                id_toilet: id[0]["max(`id`)"]
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
        .select(["manufacturer","width","depth","release_direction","price","seat_included","country","guarantee","name","arcticul","imgSours","toilet.id AS id"])
        .from("toilet")
        .innerJoin('products',"toilet.id","=","products.id_toilet")
        .where({'toilet.id': id});
        req.status = 201;
        res.render('private/updateToilet', {
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
        const {arcticul, manufacturer,width,depth,release_direction,seat_included,country,guarantee,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('toilet').where('id', id).update({
                manufacturer: decodeURI(manufacturer),
                width: decodeURI(width),
                depth: decodeURI(depth),
                name: decodeURI(name),
                release_direction: decodeURI(release_direction),
                seat_included: decodeURI(seat_included),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            await knex('products').where('id_toilet', id).update({
                arcticul: decodeURI(arcticul),
                id_toilet: id
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
        await knex('toilet').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});


module.exports = router;