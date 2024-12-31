// /pages/api/getHotels.js

import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Connect to the database
            await connectToDatabase();
            const db = mongoose.connection.db;

            // Access the 'hotels' collection
            const collection = db.collection('hotels');

            // Fetch all hotels
            const hotels = await collection.find({}).toArray();

            // Respond with the hotels data
            res.status(200).json(hotels);
        } catch (error) {
            console.error('Error fetching hotels:', error);
            res.status(500).json({ error: 'Failed to fetch hotels', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
