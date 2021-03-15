const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const upload  = require("../../module/fileLoader");

router.get('/', async function(req, res, next) {
    const result = await knex.select(["manufacturer","guarantee","height","length","width","name","arcticul","price","shower.id AS id"]).from("shower").innerJoin('products',"shower.id","=","products.id_shower");
    res.render('private/shower', {showerData:result});
});

router.get('/addShower', async function(req, res, next) {
    res.render('private/addShower');
});

router.post('/addShower', upload.single('file'),async function(req, res, next) {
    try{
        const {arcticul, manufacturer,guarantee,height,length,width,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('shower').insert({
                manufacturer: decodeURI(manufacturer),
                length: decodeURI(length),
                width: decodeURI(width),
                name: decodeURI(name),
                guarantee: decodeURI(guarantee),
                height: decodeURI(height),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            const id  = await knex('shower').max('id');
            await knex('products').insert({
                arcticul: decodeURI(arcticul),
                id_shower: id[0]["max(`id`)"]
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
        await knex('shower').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

router.get('/update:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        const result = await knex
        .select(["manufacturer","guarantee","height","length","width","name","arcticul","imgSours","price","shower.id AS id"])
        .from("shower")
        .innerJoin('products',"shower.id","=","products.id_shower")
        .where({'shower.id': id});
        req.status = 201;
        res.render('private/updateShower', {
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
        const {arcticul, manufacturer,guarantee,height,length,width,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('shower').where('id', id).update({
                manufacturer: decodeURI(manufacturer),
                length: decodeURI(length),
                width: decodeURI(width),
                name: decodeURI(name),
                guarantee: decodeURI(guarantee),
                height: decodeURI(height),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            await knex('products').where('id_shower', id).update({
                arcticul: decodeURI(arcticul),
                id_shower: id
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

module.exports = router;