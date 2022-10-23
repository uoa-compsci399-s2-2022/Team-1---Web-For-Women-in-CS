const express = require('express');
const router = express.Router();
const multer = require('multer');
const News = require('../models/News_schema');

//STORE THE IMAGE
const newsstorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        //callback(null,'../../frontend/public/uploads');
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const newsupload = multer({
    // newsstorage: newsstorage
    storage: newsstorage
})
//const upload = multer({dest: './uploads'})

//REQUEST GET ALL NEWS
router.get('/', (req, res) => {
    News.find()
    .then(news => res.json(news))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST ADD NEW NEWS
router.post('/add', 
newsupload.single('newsimage'),
//upload.single('newsimage'),
 (req, res) => {
    const newNews = new News({
        newsimage: req.file.originalname,
        newstitle: req.body.newstitle,
        newsauthor: req.body.newsauthor,
        newsdate: req.body.newsdate,
        newscontent: req.body.newscontent
    })
    newNews.save()
    .then(() => res.json("The new News posted sucessfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST FIND NEWS BY ID
router.get('/:id', (req, res) => {
    News.findById(req.params.id)
    .then(news => res.json(news))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//REQUEST UPDATE NEWS
router.put('/update/:id', newsupload.single('newsimage'), (req, res) => {
    News.findById(req.params.id)
    .then(news => {
        news.newsimage = req.file.originalname,
        news.newstitle = req.body.newstitle,
        news.newsauthor = req.body.newsauthor,
        news.newsdate = req.body.newsdate,
        news.newscontent = req.body.newscontent;
        news.save()
        .then(() => res.json("The News updated sucessfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST DELETE NEWS
router.delete('/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id)
    .then(() => res.json("The News is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;