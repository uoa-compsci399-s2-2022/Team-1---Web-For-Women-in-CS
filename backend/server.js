const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'uploads')))

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () => console.log("Connected to Database"));

//News
const NewsRouter = require('./routes/CRUDnews');
app.use('/news', NewsRouter);
//Events
const EventsRouter = require('./routes/CRUDevents');
app.use('/events', EventsRouter);
//Project
const ProjectRouter = require('./routes/CRUDproject');
app.use('/projects', ProjectRouter);
//Staff
const StaffRouter = require('./routes/CRUDstaff');
app.use('/staff', StaffRouter);
//PhD
const PhDRouter = require('./routes/CRUDphd');
app.use('/phd', PhDRouter);
//Gallery
const GalleryRouter = require('./routes/CRUDgallery');
app.use('/gallery', GalleryRouter);
//User
const UserRouter = require('./routes/CRUDuser');
app.use('/user', UserRouter);

app.listen(port, () => console.log(`Running on port: ${port}`))