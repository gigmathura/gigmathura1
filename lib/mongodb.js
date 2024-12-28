import mongoose from 'mongoose';

const mongoUri = "mongodb+srv://mayankkesharwani7505:DTtv3VRIcV0lghqh@gig.59jua.mongodb.net/GIG"; // Replace with your MongoDB URI

// MongoDB Connection with Singleton Pattern
const connectDb = async () => {
  // If already connected, return the existing connection
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB already connected");
    return mongoose.connection.asPromise(); // Return the existing connection
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDb;
