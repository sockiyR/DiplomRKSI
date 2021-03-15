const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const upload  = require("../../module/fileLoader");

router.get('/', async function(req, res, next) {
    const result = await knex.select(["manufacturer","country","width","depth","guarantee","name","arcticul","price","sinks.id AS id"]).from("sinks").innerJoin('products',"sinks.id","=","products.id_sinks");
    res.render('private/sinks', {sinksData:result});
});

router.get('/addSinks', async function(req, res, next) {
    res.render('private/addSinks');
});

router.post('/addSinks', upload.single('file'),async function(req, res, next) {
    try{
        const {arcticul,name,manufacturer,country,width,depth,guarantee,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('sinks').insert({
                manufacturer: decodeURI(manufacturer),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                width: decodeURI(width),
                depth: decodeURI(depth),
                name: decodeURI(name),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            const id  = await knex('sinks').max('id');
            await knex('products').insert({
                arcticul: decodeURI(arcticul),
                id_sinks: id[0]["max(`id`)"]
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

router.delete('/delite:id', async function (req, res, next) {
    let id = req.params.id
    try {
        await knex('sinks').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

router.get('/update:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        const result = await knex
        .select(["manufacturer","country","width","depth","guarantee","name","arcticul","imgSours","price","sinks.id AS id"])
        .from("sinks")
        .innerJoin('products',"sinks.id","=","products.id_sinks")
        .where({'sinks.id': id});
        req.status = 201;
        res.render('private/updateSinks', {
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
        const {arcticul,name,manufacturer,country,width,depth,guarantee,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('sinks').where('id', id).update({
                manufacturer: decodeURI(manufacturer),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                width: decodeURI(width),
                depth: decodeURI(depth),
                name: decodeURI(name),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            await knex('products').where('id_sinks', id).update({
                arcticul: decodeURI(arcticul),
                id_sinks: id
            });
        }else{
            res.status(500).end();
        }
        res.end();
    }catch (error){
        console.log(error);
        next(error);
    }
})


module.exports = router;