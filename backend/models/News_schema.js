const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    newsimage: {type: String, required: false},
    newstitle: {type: String, required: true},
    newsauthor: {type: String, required: true},
    newsdate: {type: String, required: true},
    newscontent: {type: String, required: true}
})

const News = mongoose.model("News", NewsSchema);

module.exports = News;