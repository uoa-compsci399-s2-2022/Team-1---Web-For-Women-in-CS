const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    staffimage: {type: String, required: false},
    staffname: {type: String, required: true},
    stafffaculty: {type: String, required: true},
    staffrole: {type: String, required: true},
    staffintro: {type: String, required: true},
    staffemail: {type: String, required: true}
})

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;