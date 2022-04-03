var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var WatchedMovieSchema = new Schema({
    email: String,
    movie: { type: Schema.ObjectId, ref: 'Movie' },
    watcheddate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WatchedMovie', WatchedMovieSchema);
