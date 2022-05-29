require('dotenv').config();

const mongoose = require('mongoose');
const logger = require('../src/utils/logger');

mongoose.connect(process.env.MONGODB_URL);

const pattern = 'mongodb.net';

const db_name = process.env.MONGODB_URL.substring(process.env.MONGODB_URL.indexOf(pattern) + pattern.length + 1, process.env.MONGODB_URL.indexOf('?'));

function connection() {
    const db = mongoose.connection;

    db.on('error', err => logger.error('db', `Unable to connect to MongoDB. ${err.message}`));
    db.once('open', async () => {
        console.log('[INFO]', `Connected to MONGODB database: ${db_name}`);
        logger.info('db', 'Connected to database');
    });
}

module.exports = { connection };