const { Schema, model } = require('mongoose');

const GenreSchema = new Schema({
    // _id: String;
    style: { type: String, required: true, unique: true },
    created_at:  { type: Date, default: Date.now },
    updated_at:  { type: Date, default: Date.now }
});

module.exports = model('Genre', GenreSchema);