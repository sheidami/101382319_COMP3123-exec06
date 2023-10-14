const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const noteSchema = new mongoose.Schema({
    
    noteTitle: {
      type: String,
      lowercase: true,
      required: true,
    },
    noteDescription: {
      type: String,
      required: true,
      lowercase: true,
    },
    priority: {
        type: String,
        required: true,
        enum: ['HIGH', 'LOW', 'MEDUIM'],
    },
    dateAdded: {
        type: Date,
        default: Date.now,
      },
      dateUpdated: {
        type: Date,
        default: Date.now,
      },
  });
  
  module.exports = mongoose.model("Note", noteSchema);
