// index.js
const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/payment');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Health-check (optional, but helpful)
app.get('/', (_req, res) => res.send('🚀 Payment backend live'));

// Your POST route
app.use('/create-order', paymentRoutes);

const PORT = process.env.PORT || 8080;
// Bind to 0.0.0.0 so it’s reachable from other devices
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
