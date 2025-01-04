require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://vaishnavi:k7uOiYyT27F3YGih@cluster0.avzye.mongodb.net/?authMechanism=SCRAM-SHA-1')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204 // For legacy browser support
};

app.use(cors(corsOptions)); // Enable CORS with specified options
app.use(express.json());

const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');

app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

// Handle preflight requests
app.options('*', cors(corsOptions)); // This handles the preflight OPTIONS request

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
