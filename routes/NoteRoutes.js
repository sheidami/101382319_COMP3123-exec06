const noteModel = require("../models/NotesModel.js")
const express = require('express');

const routes = express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async(req, res) => {
    
    try{
        //TODO - Write your code here to save the note
        const newNote = new noteModel(req.body);
        await newNote.save();
        return res.status(201).json(newNote);
    }catch(error){
        res.status(500).send(error);
    }

});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async(req, res) => {
    try{
        const noteList = await noteModel.find();
        return res.status(201).json(noteList);
    }catch(error){
        res.status(500).send(error);
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async(req, res) => {
    try{
        const noteId =  req.params.noteId;
        const note = await noteModel.findById(noteId);
        if(!noteId){
            return res.status(404).json({ message: 'Note not found'});
        }
        return res.status(201).json(note);
    }catch(error){
        res.status(500).send(error);
    }
    
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async(req, res) => {
    try{
        const noteId =  req.params.noteId;
        const noteInfo = req.body;
        const updateNote = await noteModel.findByIdAndUpdate(
            noteId,
            noteInfo,
            {new: true}
        );

        if(!updateNote){
            return res.status(404).json({ message: 'Note not found'});
        }
        return res.status(201).json({message: "Note updated succesfully!", note: updateNote});
    }catch(error){
        res.status(500).send(error);
    }
    
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async(req, res) => {
    try{
        
        const noteId =  req.params.noteId;
        const noteDelete = await noteModel.findByIdAndDelete(noteId);


        if(!noteDelete){
            return res.status(404).json({ message: 'Note not found'});
        }
        return res.status(204).json();
    }catch(error){
        res.status(500).send(error);
    }
    
});
module.exports = routes
