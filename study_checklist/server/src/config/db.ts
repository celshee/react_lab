import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db_connect = async () => {
    const url = process.env.MONGO_URI;

    if (!url) {
        throw new Error('❌ MONGO_URI is missing in .env file');
    }

    try {
        await mongoose.connect(url);
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err);
        process.exit(1); // Exit the process if DB connection fails
    }
};

export default db_connect;
