const User = require('./user');
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  collaborators: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  description: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  comments: [commentSchema], 
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
