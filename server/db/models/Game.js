const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    // _id: String;
    //em testes
    name: { type: String, required: true },
    style: { type: Schema.Types.ObjectId, ref: 'Genre', required: true },
    platform: { type: Schema.Types.ObjectId, ref: 'Platform', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = model('Games', GameSchema);