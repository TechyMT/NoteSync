const express = require('express');
const router = express.Router();
const { createNote, addCollaborators, getNoteDetails, deleteNote, updateNote, getNotesByOwner } = require("../controller/noteController");

router.post('/note', createNote);
router.post('/add-collbrators/:id', addCollaborators);
router.get('/note/:id', getNoteDetails);
router.delete('/note/:id', deleteNote);
router.put('/note/:id', updateNote);
router.get('/notes', getNotesByOwner);


module.exports = router;