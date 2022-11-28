const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
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
                                email:req.body.email,
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
module.exports = router;