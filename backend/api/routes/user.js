const express = require('express')
const router = express.Router();

router.post('/register', (req, res, next) => {
    try {
        const name = req.body.name
        const email = req.body.email;
        const phNumber = req.body.phoneNumber;
        const data = {
            name,
            email,
            phNumber,
        }
        res.status(201).json({
            message: "User Created",
            data
        })
    } catch (error) {
        res.status(206).json({
            message: "Eiter no content or no proper naming"
        })
    }
})
module.exports = router;