// /pages/api/addbooking.js

import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';
import transporter from '../../lib/nodemailer';  // Import the transporter

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectToDatabase(); // Connect to MongoDB
            const db = mongoose.connection.db; // Access the database instance
            const collection = db.collection('booking');

            // Insert the booking data
            const result = await collection.insertOne(req.body);
            const bookingId = result.insertedId.toString();
            // Prepare email options
            const { name, email, number} = req.body;
            const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);

            // Customer Email
            const mailOptions = {
                from: 'gigayodhya@gmail.com',
                to: email,
                subject: 'GIG Darshan Booking',
                html:`
                    <html>
                        <head></head>
                        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                            <h3 style="color: orange;">Jai Shri Ram, ${capitalizedFirstName}!</h3>
                            <p>We’re thrilled to be part of your spiritual journey to <strong>Shri Ram Ki Nagri Ayodhya</strong>. Thank you for choosing <strong>GIG</strong> as your trusted companion!</p>

                            <p>We’ve received your booking request and will connect with you shortly on WhatsApp (<strong>${number}</strong>) to confirm your details and finalize your plans.</p>

                            <p>Oh, by the way, did you know you can plan your entire darshan with us? From customized itineraries to accommodations, transport, rituals, and more—we’ve got it all covered!</p>

                            <p>
                                <a href="https://gigayodhya.in/" style="background-color: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Explore All Our Offerings</a>
                            </p>

                            <h4 style="color: orange; margin-top: 20px;">Need Help?</h4>
                            <p>If you have any questions or face any issues, feel free to WhatsApp us directly:</p>
                            <p>
                                <a href="https://api.whatsapp.com/send?phone=7505866498" style="color: #0066cc; text-decoration: none; font-weight: bold;">Click here to chat with us</a>
                            </p>

                            <p>We can’t wait to make your darshan seamless, special, and absolutely unforgettable!</p>

                            <p style="font-style: italic; color: gray;">Warm regards,
                                <br>Your Local Rishtedaar- GIG</p>
                        </body>
                    </html>

                `,
            };

            // Info Email to Vendor
            const infomailOptions = {
                from: 'gigayodhya@gmail.com',
                to: 'gigayodhyainfo@gmail.com',
                subject: 'Booking',
                html: `
                <html>
                <head></head>
                <body>
                <h3>Customer of name: ${name} has made a query</h3>
                <p>Email: ${email}</p>
                <p>Number: ${number}</p>
                <p>Booking ID: ${bookingId}</p>
                <h4>Whatsapp the customer by</h4><a href="https://api.whatsapp.com/send?phone=+91${number}">Clicking here</a>
                </body>
                </html>
                `,
            };



            // Send Emails
            const sendMail = async (mailOptions) => {
                try {
                    await transporter.sendMail(mailOptions);
                    console.log('Booking mail sent');
                } catch (error) {
                    console.log('Email not sent', error);
                }
            };

            // Send the emails

            sendMail(mailOptions);  // Send email to the customer
            sendMail(infomailOptions);  // Send info email to the vendor

            // Respond with success message
            res.status(201).json({ message: 'Booking added successfully!' });

        } catch (error) {
            console.error('Error adding booking:', error);
            res.status(500).json({ error: 'Failed to add booking', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
