const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String },
    email: { type: String },
    phNumber: { type: String },
    passwd: { type: String }
})
module.exports = mongoose.model('Users', userSchema);