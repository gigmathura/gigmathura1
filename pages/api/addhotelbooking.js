import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';
import transporter from '../../lib/nodemailer'; // Import the transporter

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectToDatabase(); // Connect to MongoDB
            const db = mongoose.connection.db; // Access the database instance
            const hotelBookingCollection = db.collection('hotelbooking');
            const hotelCollection = db.collection('hotels');
            // console.log(req.body)
            const { name, number, email, noOfRooms, checkInDate, checkOutDate, hotelId, roomName, roomPrice } = req.body;

            // Validate input

            // Find the hotel manager's email
            const hotel = await hotelCollection.findOne({ hotelId });
            if (!hotel) {
                return res.status(404).json({ error: 'Hotel not found' });
            }
            const managerEmail = hotel.managerEmail;

            // Insert the booking data
            const bookingData = {
                hotelId,
                name,
                email,
                number,
                checkInDate,
                checkOutDate,
                noOfRooms,
                roomName,
                roomPrice,
                createdAt: new Date(),
            };
            const result = await hotelBookingCollection.insertOne(bookingData);
            const bookingId = result.insertedId.toString();
            const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);
            // Prepare emails
            const customerEmailOptions = {
                from: 'gigmathura@gmail.com',
                to: email,
                subject: 'Hotel Booking Confirmation',
                html: `
                <html>
                    <head></head>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <h3 style="color: orange;">Jai Shri Krishna, ${capitalizedFirstName}!</h3>
                        <p>We’re thrilled to be part of your spiritual journey to <strong>Shri Krishna Ki Nagri Mathura</strong>. Thank you for choosing <strong>GIG</strong> as your trusted companion!</p>

                        <p>We’ve received your booking request and will connect with you shortly on WhatsApp (<strong>${number}</strong>) for confirmation.</p>

                        <p>Oh, by the way, did you know you can plan your entire darshan with us? From customized itineraries to accommodations, transport, rituals, pooja, exciting local activities and much more—we’ve got it all covered!</p>

                        <p>
                            <a href="https://gigmathura.com/" style="background-color: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Explore All Our Offerings</a>
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

            const managerEmailOptions = {
                from: 'gigmathura@gmail.com',
                to: managerEmail,
                subject: `New Hotel Booking , Booking Id:${bookingId}`,
                html: `
                        <h3 style="color: orange;">Jai Shri Krishna!</h3>

                    <h3>We got a New Booking for Your Hotel: ${hotel.name}</h3>
                    <p><strong>Customer Details:</strong></p>
                    <ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Phone: ${number}</li>
                        <li>Booking ID: ${bookingId}</li>
                        <li>Check-in: ${checkInDate}</li>
                        <li>Check-out: ${checkOutDate}</li>
                        <li>Room Name: ${roomName}</li>
                        <li>Price: ${roomPrice}</li>
                        <li>No. of Rooms: ${noOfRooms}</li>
                    </ul>
                    <p>
                    <p>Click Here to confirm booking </p>
    <a 
        href="https://api.whatsapp.com/send?phone=7505866498&text=Booking%20Confirmed%20of%20Booking%20ID%3A%20${bookingId}" 
       style="background-color: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;"
        target="_blank"
    >
        Confirm Booking 
    </a>
</p>

                `,
            };

            const adminEmailOptions = {
                from: 'gigmathura@gmail.com',
                to: 'adhyatmlynk@gmail.com',
                subject: `New Hotel Booking , Booking Id:${bookingId}`,
                html: `
                    <h3>New Hotel Booking</h3>
                    <p><strong>Details:</strong></p>
                    <ul>
                        <li>Hotel ID: ${hotelId}</li>
                        <li>Hotel Name: ${hotel.name}</li>
                        <li>Manager : ${hotel.ContactPerson}</li>
                        <li>Contact : ${hotel.Number}</li>

                        <li><strong> Customer Details </strong></li>
                         <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Phone: ${number}</li>
                        <li>Booking ID: ${bookingId}</li>
                        <li>Check-in: ${checkInDate}</li>
                        <li>Check-out: ${checkOutDate}</li>
                        <li>Room Name: ${roomName}</li>
                        <li>Price: ${roomPrice}</li>
                        <li>No. of Rooms: ${noOfRooms}</li>
                        </ul>
                            <a 
        href="https://api.whatsapp.com/send?phone=${number}" 
       style="background-color: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;"
        target="_blank"
    >
        Customer Contact
    </a>
    <a 
        href="https://api.whatsapp.com/send?phone=${hotel.Number}" 
       style="background-color: blue; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;"
        target="_blank"
    >
        Manager Contact
    </a>

                `,
            };

            // Send Emails
            const sendMail = async (mailOptions) => {
                try {
                    await transporter.sendMail(mailOptions);
                    console.log(`Email sent to ${mailOptions.to}`);
                } catch (error) {
                    console.error(`Failed to send email to ${mailOptions.to}:`, error);
                }
            };

            await Promise.all([
                sendMail(customerEmailOptions),
                sendMail(managerEmailOptions),
                sendMail(adminEmailOptions),
            ]);

            res.status(201).json({ message: 'Hotel booking added and emails sent successfully!' });
        } catch (error) {
            console.error('Error adding hotel booking:', error);
            res.status(500).json({ error: 'Failed to add hotel booking', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
