import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dpsRoutes from './routes/dps.routes.js'; // Sesuaikan dengan lokasi file routes
import connectMongoDB from './db/connect.js';

dotenv.config(); // Mengambil variabel dari file .env

const app = express();

// db connection

// Middleware
app.use(cors());
app.use(express.json());

// Routing DPS
app.use('/api/dps', dpsRoutes); // Mengarahkan ke file dpsRoutes.js

// Jalankan Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on port ${PORT}...`)
});
