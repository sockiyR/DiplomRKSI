const mysql = require("mysql");
const knex = require("../../module/db");
var express = require('express');
var router = express.Router();
const upload  = require("../../module/fileLoader");

router.get('/', async function(req, res, next) {
    const result = await knex.select(["manufacturer","frame","drain","panel","length","width","depth","arcticul","name","price","bathroom.id AS id"]).from("bathroom").innerJoin('products',"bathroom.id","=","products.id_bath");
    res.render('private/bathroom', {bathroomData:result});
});

router.delete('/delite:id', async function (req, res, next) {
    let id = req.params.id
    try {
        await knex('bathroom').where('id', id).del();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
});

router.get('/update:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        const result = await knex
        .select(["manufacturer","frame","drain","panel","length","width","depth","arcticul","name","price","imgSours","bathroom.id AS id"])
        .from("bathroom")
        .innerJoin('products',"bathroom.id","=","products.id_bath")
        .where({'bathroom.id': id});
        req.status = 201;
        res.render('private/updateBathroom', {
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
        const {arcticul, manufacturer,frame,drain,panel,length,width,depth,name,price,file} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('bathroom').where('id', id).update({
                manufacturer: decodeURI(manufacturer),
                frame: decodeURI(frame),
                drain: decodeURI(drain),
                panel: decodeURI(panel),
                length: decodeURI(length),
                width: decodeURI(width),
                depth: decodeURI(depth),
                name: decodeURI(name),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            await knex('products').where('id_bath', id).update({
                arcticul: decodeURI(arcticul),
                id_bath: id
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


router.get('/addBathroom', async function(req, res, next) {
    res.render('private/addBathroom');
});

router.post('/addBathroom', upload.single('file'),async function(req, res, next) {
    try{
        const {arcticul, manufacturer,frame,drain,panel,length,width,depth,name,price,file} = req.body;
        let fileSrc;
        if(req.file){
            fileSrc = '/images/' + req.file.filename;
            await knex('bathroom').insert({
                manufacturer: decodeURI(manufacturer),
                frame: decodeURI(frame),
                drain: decodeURI(drain),
                panel: decodeURI(panel),
                length: decodeURI(length),
                width: decodeURI(width),
                depth: decodeURI(depth),
                name: decodeURI(name),
                price: decodeURI(price),
                imgSours : fileSrc
            });
            const id  = await knex('bathroom').max('id');
            await knex('products').insert({
                arcticul: decodeURI(arcticul),
                id_bath: id[0]["max(`id`)"]
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
module.exports = router;
