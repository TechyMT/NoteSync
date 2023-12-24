const Note = require('../models/note');
const User = require('../models/user');
const { ObjectId } = require('mongodb');


const createNote = async (req, res) =>
{
  try
  {

    const { title, content, collaborators, uid, category, tags } = req.body;
    if (!title || !content )
    {
      return res.status(400).json({ message: 'Title, content, and owner are required' });
    }

    const newNote = new Note({
      uid,
      title,
      content,
      collaborators: collaborators || [],
      category,
      tags: tags || [],
      timestamp: Date.now()
    });

    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error)
  {
    console.error('Error creating note:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getNoteDetails = async (req, res) =>
{
  try
  {
    const noteId = req.params.id;

    const note = await Note.findById(noteId);

    if (!note)
    {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(note);
  } catch (error)
  {
    console.error('Error fetching note details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const deleteNote = async (req, res) =>
{
  try
  {
    const noteId = req.params.id;

    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (!deletedNote)
    {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (error)
  {
    console.error('Error deleting note:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateNote = async (req, res) =>
{
  try
  {
    const noteId = req.params.id;
    const { title, content, description, collaborators } = req.body;

    const existingNote = await Note.findById(noteId);

    if (!existingNote)
    {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Update note data
    existingNote.title = title;
    existingNote.content = content;
    existingNote.description = description || existingNote.description;
    existingNote.collaborators = collaborators || existingNote.collaborators;

    // Save the updated note
    const updatedNote = await existingNote.save();

    res.json(updatedNote);
  } catch (error)
  {
    console.error('Error updating note:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getNotesByOwner = async (req, res) =>
{
  try
  {
    const  id  = req.params.id;
    const notes = await Note.find({ "uid": id.toString() });

    res.json(notes);
  } catch (error)
  {
    console.error('Error fetching notes by owner:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  createNote,
  getNoteDetails,
  deleteNote,
  updateNote,
  getNotesByOwner
};