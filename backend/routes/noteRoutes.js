const express = require('express');
const router = express.Router();
const { createNote, addCollaborators, getNoteDetails, deleteNote, updateNote, getNotesByOwner } = require("../controller/noteController");
const { addCollaborator } = require('../controller/socketController');

router.post('/create-note/:id', createNote);
router.post('/add-collbrators/:id', addCollaborators);
router.get('/get-note-details/:id', getNoteDetails);
router.delete('/delete-note/:id', deleteNote);
router.put('/update-note/:id', updateNote);
router.get('/get-my-notes/:id', getNotesByOwner);
router.post('/add-collaborator', addCollaborator);


module.exports = router;