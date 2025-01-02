// /pages/api/getHotels.js

import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Connect to the database
            await connectToDatabase();
            const db = mongoose.connection.db;

            // Access the 'activity' collection
            const collection = db.collection('activity');

            // Fetch all activity
            const activity = await collection.find({}).toArray();

            // Respond with the activity data
            res.status(200).json(activity);
        } catch (error) {
            console.error('Error fetching activity:', error);
            res.status(500).json({ error: 'Failed to fetch activity', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
