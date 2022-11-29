const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const userSchema = require('../../models/userSchema');
const { default: mongoose } = require('mongoose');

router.post('/register', (req, res, next) => {
    try {
        userSchema.find({ email: req.body.email })
            .exec()
            .then((user) => {
                if (user.length >= 1) {
                    res.status(422).json({
                        message: "Email Already Exist"
                    });
                }
                else {
                    bcrypt.hash(req.body.password, 12, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            })
                        }
                        else {
                            const user = new userSchema({
                                _id: new mongoose.Types.ObjectId(),
                                name: req.body.name,
                                email: req.body.email,
                                phNumber: req.body.phoneNumber,
                                passwd: hash
                            });
                            user
                                .save()
                                .then((result) =>
                                    res.status(201).json({
                                        message: "User Registered",
                                        result
                                    })
                                )
                                .catch((err) => {
                                    res.status(500).json({
                                        error: err
                                    })
                                })
                        }
                    })
                }
            })
    } catch (error) {
        res.status(206).json({
            message: "Eiter no content or no proper naming"
        })
    }
})

router.post("/login", (req, res, next) => {
    userSchema.find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Invalid Credentials",
                });
            }
            bcrypt.compare(req.body.password, user[0].passwd, (err, result) => {
                if (err) {
            
                    return res.status(401).json({
                        message: "Invalid Credentials",
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id,
                        },
                        process.env.JWT_TOKEN_SECRET_KEY,
                        {
                            expiresIn: "2h",
                        }
                    );
                    return res.status(200).json({
                        message: "Logged in successfull",
                        token: token,
                    });
                }
                return res.status(401).json({
                    message: "Invalid Credentials",
                });
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
});


module.exports = router;