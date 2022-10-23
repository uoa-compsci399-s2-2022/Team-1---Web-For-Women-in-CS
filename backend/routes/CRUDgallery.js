const express = require('express');
const router = express.Router();
const multer = require('multer');
const Gallery = require('../models/Gallery_schema');

//STORE THE IMAGE
const gallerystorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const galleryupload = multer({
    storage: gallerystorage
})

//REQUEST GET ALL PHOTOS
router.get('/', (req, res) => {
    Gallery.find()
    .then(gallery => res.json(gallery))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST ADD NEW PHOTO
router.post('/add', galleryupload.single('galleryimage'),
 (req, res) => {
    const newGallery = new Gallery({
        galleryimage: req.file.originalname
    })
    newGallery.save()
    .then(() => res.json("The new Photo posted sucessfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST DELETE PHOTO
router.delete('/:id', (req, res) => {
    Gallery.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Photo is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;