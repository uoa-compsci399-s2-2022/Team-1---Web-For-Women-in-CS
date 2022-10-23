const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projecttitle: {type: String, required: true},
    projectauthor: {type: String, required: true},
    projectdate: {type: String, required: true},
    projectcontent: {type: String, required: true},
    projectsupervisor: {type: String, required: true}
})

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;