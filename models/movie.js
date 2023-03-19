const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    genre: [String],
    plot: String,
    posterUrl: String,
})

module.exports = mongoose.model('Movie', movieSchema)