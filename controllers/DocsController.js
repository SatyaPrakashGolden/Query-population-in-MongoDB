const Docs = require('../models/Docs.model.js');
const mongoose = require('mongoose');
const createDocs = async (req, res) => {
  try {
    const docObj = {
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      user: "65148ec70facb2460dcd1741",
    };
    const newDocs = new Docs(docObj); // Corrected from User to Docs
    const savedDocs = await newDocs.save();
    res.status(200).json(savedDocs);
  } catch (error) {
    console.error('There was an error during saving:', error);
    res.status(400).send("There was an error.");
  }
};
const getAllData = async (req, res) => {
    try {
      const docs = await Docs.find({}).populate('user');
  
      res.status(200).json(docs);
    } catch (error) {
      console.error('There was an error while retrieving and populating documents:', error);
      res.status(500).send("Internal Server Error");
    }
  };
  const updateData = async (req, res) => {
    try {
      const updatedData = {
        title: req.body.title,
        description: req.body.description,
      };
      const updatedDoc = await Docs.findByIdAndUpdate(req.params.id, updatedData, {
        new: true, 
      });
      if (!updatedDoc) {
        return res.status(404).json({ message: "Document not found" });
      }
      await updatedDoc.populate('user').execPopulate();
      res.status(200).json(updatedDoc);
    } catch (error) {
      console.error('There was an error while updating and populating documents:', error);
      res.status(500).send("Internal Server Error");
    }
  };
  
  const deleteData = async (req, res) => {
    try {
      const docId = req.params.id; 
      const deletedDoc = await Docs.findByIdAndRemove(docId);
      if (!deletedDoc) {
        return res.status(404).json({ message: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    } catch (error) {
      console.error('There was an error while deleting the document:', error);
      res.status(500).send("Internal Server Error");
    }
  };
  
module.exports = {  createDocs,getAllData, updateData, deleteData };

