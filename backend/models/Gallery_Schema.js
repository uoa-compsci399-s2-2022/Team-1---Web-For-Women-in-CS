const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    galleryimage: {type: String, required: false}
})

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;