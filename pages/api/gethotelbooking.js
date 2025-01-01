// /pages/api/gethotelbookings.js

import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await connectToDatabase(); // Connect to MongoDB
            const { hotelId } = req.query; // Get hotelId from query params

            if (!hotelId) {
                return res.status(400).json({ error: 'Hotel ID is required' });
            }

            const db = mongoose.connection.db; // Access the database instance
            const bookingsCollection = db.collection('hotelbooking');

            // Fetch all bookings for the given hotel ID
            const bookings = await bookingsCollection.find({ hotelId }).toArray();

            return res.status(200).json({ success: true, bookings });
        } catch (error) {
            console.error('Error fetching hotel bookings:', error);
            res.status(500).json({ success: false, error: 'Failed to fetch bookings' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
