import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { hotelId, hotelPin } = req.body;

        try {
            await connectToDatabase();  // Ensure you're connected to the DB
            
            // Access the MongoDB collection directly
            const db = mongoose.connection.db;
            const hotelsCollection = db.collection('hotels');
            
            // Find the hotel by hotelId and hotelPin
            const hotel = await hotelsCollection.findOne({ hotelId, hotelPin });

            if (hotel) {
                return res.status(200).json({ success: true, hotelData: hotel });
            } else {
                return res.status(404).json({ success: false, message: 'Hotel not found or invalid PIN' });
            }
        } catch (error) {
            console.error('Error fetching hotel data:', error);
            return res.status(500).json({ success: false, message: 'Error fetching hotel data' });
        }
    } 
    else if(req.method === 'GET'){
        const hotelId=req.query.hotelId;
        try {
            await connectToDatabase();  // Ensure you're connected to the DB
            
            // Access the MongoDB collection directly
            const db = mongoose.connection.db;
            const hotelsCollection = db.collection('hotels');
            
            // Find the hotel by hotelId and hotelPin
            const hotel = await hotelsCollection.findOne({ hotelId});

            if (hotel) {
                return res.status(200).json({ success: true, hotelData: hotel });
            } else {
                return res.status(404).json({ success: false, message: 'Hotel not found or invalid PIN' });
            }
        } catch (error) {
            console.error('Error fetching hotel data:', error);
            return res.status(500).json({ success: false, message: 'Error fetching hotel data' });
        }
    }
    else {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
