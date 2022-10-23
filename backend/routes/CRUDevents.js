const express = require('express');
const router = express.Router();
const multer = require('multer');
const Events = require('../models/Events_schema');

//STORE THE IMAGE
const eventstorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const eventupload = multer({
    storage: eventstorage
})

//REQUEST GET ALL EVENTS
router.get('/', (req, res) => {
    Events.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST ADD NEW EVENT
router.post('/add', eventupload.single('eventimage'),
 (req, res) => {
    const newEvents = new Events({
        eventimage: req.file.originalname,
        eventname: req.body.eventname,
        eventdate: req.body.eventdate,
        eventcontent: req.body.eventcontent,
        eventlocation: req.body.eventlocation,
        eventprice: req.body.eventprice
    })
    newEvents.save()
    .then(() => res.json("The new Event posted sucessfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST FIND EVENT BY ID
router.get('/:id', (req, res) => {
    Events.findById(req.params.id)
    .then(events => res.json(events))
    .catch(err => res.status(400).json(`Error: ${err}`))
})
//REQUEST UPDATE EVENT
router.put('/update/:id', eventupload.single('eventimage'), (req, res) => {
    Events.findById(req.params.id)
    .then(events => {
        events.eventimage = req.file.originalname,
        events.eventname = req.body.eventname,
        events.eventdate = req.body.eventdate,
        events.eventcontent = req.body.eventcontent,
        events.eventlocation = req.body.eventlocation;
        events.eventprice = req.body.eventprice
        events.save()
        .then(() => res.json("The Event updated sucessfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//REQUEST DELETE EVENT
router.delete('/:id', (req, res) => {
    Events.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Event is deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;