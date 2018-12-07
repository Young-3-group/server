const mongoose = require('mongoose');
const Schema = mongoose.Schema

const musicSchema = new Schema({ 
    title: {
        type: String,
        required: [true, 'title must be filled']
    },
    artist: {
        type: String,
        required: [true, 'artist must be filled'],
    },
    url: {
        type: String,
    }
});

const Music = mongoose.model('Music', musicSchema);
module.exports = Music;