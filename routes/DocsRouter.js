const express = require('express');
const DocsRouter = express.Router(); 
const {  createDocs,getAllData, updateData, deleteData }  = require('../controllers/DocsController.js');

DocsRouter.get('/getAllDocs', getAllData);    
DocsRouter.put('/updateDoc/:id', updateData);
DocsRouter.post('/createDocs', createDocs); 
DocsRouter.delete('/deleteDoc/:id', deleteData);

module.exports = DocsRouter;
