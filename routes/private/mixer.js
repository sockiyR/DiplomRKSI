const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const upload  = require("../../module/fileLoader");

router.get('/', async function(req, res, next) {
    const result = await knex.select(["manufacturer","control","country","guarantee","arcticul","name","price","mixer.id AS id"]).from("mixer").innerJoin('products',"mixer.id","=","products.id_mixer");
    res.render('private/mixer', {mixerData:result});
});

router.get('/addMixer', async function(req, res, next) {
    res.render('private/addMixer');
});

router.post('/addMixer', upload.single('file'),async function(req, res, next) {
    try{
        const {arcticul, manufacturer,control,country,guarantee,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('mixer').insert({
                manufacturer: decodeURI(manufacturer),
                control: decodeURI(control),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                name: decodeURI(name),
                price:decodeURI(price),
                imgSours : fileSrc
            });
            const id  = await knex('mixer').max('id');
            await knex('products').insert({
                arcticul: decodeURI(arcticul),
                id_mixer: id[0]["max(`id`)"]
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
        .select(["manufacturer","control","country","guarantee","arcticul","name","imgSours","price","mixer.id AS id"])
        .from("mixer")
        .innerJoin('products',"mixer.id","=","products.id_mixer")
        .where({'mixer.id': id});
        req.status = 201;
        res.render('private/updateMixer', {
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
        const{arcticul, manufacturer,control,country,guarantee,name,price} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('mixer').where('id', id).update({
                manufacturer: decodeURI(manufacturer),
                control: decodeURI(control),
                country: decodeURI(country),
                guarantee: decodeURI(guarantee),
                name: decodeURI(name),
                price:decodeURI(price),
                imgSours : fileSrc
            });
            await knex('products').where('id_mixer', id).update({
                arcticul: decodeURI(arcticul),
                id_mixer: id
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
        await knex('mixer').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

module.exports = router;