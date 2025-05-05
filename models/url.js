const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
})

const URL = mongoose.model('DiscordURL', urlSchema);

module.exports = URL;