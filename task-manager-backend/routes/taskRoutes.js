const express = require('express');
   const Task = require('../models/Task');
   const router = express.Router();
   router.post('/', async (req, res) => {
     try {
       const task = new Task(req.body);
       await task.save();
       res.status(201).json(task);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   router.get('/', async (req, res) => {
     try {
       const tasks = await Task.find();
       res.status(200).json(tasks);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   router.put('/:id', async (req, res) => {
     try {
       const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
       res.status(200).json(task);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   router.delete('/:id', async (req, res) => {
     try {
       await Task.findByIdAndDelete(req.params.id);
       res.status(200).send('Task deleted');
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });
   module.exports = router;
