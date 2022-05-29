const { Schema, model } = require('mongoose');

const PlatformSchema = new Schema({
    // _id: String;
    platform_name: { type: String, required: true, unique: true },
    photo: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = model('Platform', PlatformSchema);