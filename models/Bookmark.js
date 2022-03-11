var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BookmarkSchema = new Schema({
    email: String,
    movie: { type: Schema.ObjectId, ref: 'Movie' },
    addeddate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
