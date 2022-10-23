const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    eventimage: {type: String, required: false},
    eventname: {type: String, required: true},
    eventdate: {type: String, required: true},
    eventcontent: {type: String, required: true},
    eventlocation: {type: String, required: true},
    eventprice: {type: String, required: true}
})

const Events = mongoose.model("Events", EventsSchema);

module.exports = Events;