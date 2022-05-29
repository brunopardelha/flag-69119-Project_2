const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    // _id: String;
    name: String,
    username: { type: String, required: true, unique: true },
    email: String,
    pass: { type: String, required: true },
    picture: String,
    created_at:  { type: Date, default: Date.now },
    updated_at:  { type: Date, default: Date.now }
});

module.exports = model('User', UserSchema);