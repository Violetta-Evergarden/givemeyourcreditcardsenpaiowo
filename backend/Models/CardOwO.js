const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteModel = new Schema({

    card_number_uwu: {type: String, required: true},
    expire_owo: {type: String, required: true},
    funny_numbers_nya: {type: String, required: true}

})

module.exports = mongoose.model('CardOwO',NoteModel);