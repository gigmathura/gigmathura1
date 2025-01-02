// /pages/api/getHotels.js

import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Connect to the database
            await connectToDatabase();
            const db = mongoose.connection.db;

            // Access the 'cabs' collection
            const collection = db.collection('pooja');

            // Fetch all cabs
            const pooja = await collection.find({}).toArray();

            // Respond with the cabs data
            res.status(200).json(pooja);
        } catch (error) {
            console.error('Error fetching pooja:', error);
            res.status(500).json({ error: 'Failed to fetch pooja', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
