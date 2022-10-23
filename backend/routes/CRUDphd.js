const express = require('express');
const router = express.Router();
const multer = require('multer');
const PhD = require('../models/PhDs_Schema');

//STORE THE IMAGE
const phdstorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const phdupload = multer({
    storage: phdstorage
})

//REQUEST GET ALL PhD STUDENTS
router.get('/', (req, res) => {
    PhD.find()
    .then(phd => res.json(phd))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST ADD NEW PhD STUDENT
router.post('/add', 
phdupload.single('phdimage'),
 (req, res) => {
    const newPhD = new PhD({
        phdimage: req.file.originalname,
        phdname: req.body.phdname,
        phdbio: req.body.phdbio,
        phdresearch: req.body.phdresearch,
    })
    newPhD.save()
    .then(() => res.json("The new PhD student posted sucessfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST FIND PhD STUDENT BY ID
router.get('/:id', (req, res) => {
    PhD.findById(req.params.id)
    .then(phd => res.json(phd))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//REQUEST UPDATE PhD STUDENT
router.put('/update/:id', phdupload.single('phdimage'), (req, res) => {
    PhD.findById(req.params.id)
    .then(phd => {
        phd.phdimage = req.file.originalname,
        phd.phdname = req.body.phdname,
        phd.phdbio = req.body.phdbio,
        phd.phdresearch = req.body.phdresearch;
        phd.save()
        .then(() => res.json("The PhD student updated sucessfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST DELETE PhD STUDENT
router.delete('/:id', (req, res) => {
    PhD.findByIdAndDelete(req.params.id)
    .then(() => res.json("The PhD student is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;