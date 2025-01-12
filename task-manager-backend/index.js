const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const dotenv = require('dotenv');
   dotenv.config();
   const app = express();
   const PORT = process.env.PORT || 5000;
   app.use(cors());
   app.use(express.json());

   mongoose
     .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
     .catch((error) => console.log(error.message));

   const taskRoutes = require('./routes/taskRoutes');
   app.use('/tasks', taskRoutes);
