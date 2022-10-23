const express = require('express');
const router = express.Router();
const User = require('../models/User_Schema');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {verifyToken} = require("../middlewares/auth");

//REQUEST ADD NEW USER
router.post('/add', (req, res) => {
    // console.log(req)
    // console.log(req.body)
    const newUser = new User({
        username: req.body.username,
        // userpassword: req.body.userpassword
        userpassword: bcrypt.hashSync(req.body.userpassword)
    })
    newUser.save()
    .then(() => res.json("The new User posted sucessfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.post('/login', (req, res) => {
    // console.log(req)
    // console.log(req.body)
    User.findOne({
        username: req.body.username,
    })
        .then(user => {
            const valid = bcrypt.compareSync(req.body.userpassword, user.userpassword)
            if (valid) {
                const secret = process.env.JWT_SECRET
                const token = jwt.sign({ id: user.id }, secret, {
                    // 24 hours
                    expiresIn: 86400,
                })

                res.status(200).send({
                    id: user._id,
                    username: user.username,
                    access_token: token,
                })
            } else {
                res.status(400).json({
                    message: 'Invalid Password!',
                })
            }
        })
        // .then(() => res.json("The new User posted sucessfully!"))
        .catch(() => {
            res.status(400).send({
                message: 'User Not Found.',
            })
        })
})

router.post('/info', [verifyToken], (req, res) => {
    User.findOne({
        username: req.body.username,
    })
        .then(user => {
            if (user == null) {
                throw new Error("no user")
            }

            res.status(200).send({
                user,
            })
        })
        .catch(() => {
            res.status(400).send({
                message: 'User Not Found.',
            })
        })
})

module.exports = router;