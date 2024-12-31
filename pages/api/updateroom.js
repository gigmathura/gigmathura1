import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { hotelId, roomId, price, status } = req.body;

        try {
            await connectToDatabase();  // Ensure you're connected to the DB
            
            // Access the MongoDB collection directly
            const db = mongoose.connection.db;
            const hotelsCollection = db.collection('hotels');
            
            // Find the hotel by hotelId
            const hotel = await hotelsCollection.findOne({ hotelId });
            if (!hotel) return res.status(404).json({ success: false, message: 'Hotel not found' });

            // Find the room inside the hotel and update price and status
            const roomIndex = hotel.rooms.findIndex(room => room.roomid === roomId);
            if (roomIndex === -1) return res.status(404).json({ success: false, message: 'Room not found' });

            // Update room details
            hotel.rooms[roomIndex].price = price;
            hotel.rooms[roomIndex].status = status;

            // Save updated hotel document
            await hotelsCollection.updateOne(
                { hotelId },
                { $set: { rooms: hotel.rooms } }
            );

            return res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error updating room data:', error);
            return res.status(500).json({ success: false, message: 'Error updating room data' });
        }
    } else {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
