// server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const urlRoutes = require('./routes/urlRoutes');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', urlRoutes);

connectDB()
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  });
 
