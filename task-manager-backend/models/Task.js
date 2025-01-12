const mongoose = require('mongoose');

   const TaskSchema = new mongoose.Schema({
     title: { type: String, required: true },
     description: { type: String },
     priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
     category: { type: String, enum: ['Work', 'Personal', 'Urgent'], default: 'Work' },
     completed: { type: Boolean, default: false },
     createdAt: { type: Date, default: Date.now },
   });

   module.exports = mongoose.model('Task', TaskSchema);
   
