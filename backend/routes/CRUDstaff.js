const express = require('express');
const router = express.Router();
const multer = require('multer');
const Staff = require('../models/Staffs_Schema');

//STORE THE IMAGE
const staffstorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const staffupload = multer({
    storage: staffstorage
})

//REQUEST GET ALL STAFF
router.get('/', (req, res) => {
    Staff.find()
    .then(staff => res.json(staff))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST ADD NEW STAFF
router.post('/add', staffupload.single('staffimage'),
 (req, res) => {
    const newStaff = new Staff({
        staffimage: req.file.originalname,
        staffname: req.body.staffname,
        stafffaculty: req.body.stafffaculty,
        staffrole: req.body.staffrole,
        staffintro: req.body.staffintro,
        staffemail: req.body.staffemail
    })
    newStaff.save()
    .then(() => res.json("The new Staff posted sucessfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST FIND STAFF BY ID
router.get('/:id', (req, res) => {
    Staff.findById(req.params.id)
    .then(news => res.json(news))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//REQUEST UPDATE STAFF
router.put('/update/:id', staffupload.single('staffimage'), (req, res) => {
    Staff.findById(req.params.id)
    .then(staff => {
        staff.staffimage = req.file.originalname,
        staff.staffname = req.body.staffname,
        staff.stafffaculty = req.body.stafffaculty,
        staff.staffrole = req.body.staffrole,
        staff.staffintro = req.body.staffintro,
        staff.staffemail = req.body.staffemail;
        staff.save()
        .then(() => res.json("The Staff updated sucessfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST DELETE STAFF
router.delete('/:id', (req, res) => {
    Staff.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Staff is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;