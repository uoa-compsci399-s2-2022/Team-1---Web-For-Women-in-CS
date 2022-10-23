const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhDSchema = new Schema({
    phdimage: {type: String, required: false},
    phdname: {type: String, required: true},
    phdbio: {type: String, required: true},
    phdresearch: {type: String, required: true}
})

const PhD = mongoose.model("PhD", PhDSchema);

module.exports = PhD;