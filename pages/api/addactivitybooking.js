import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';
import transporter from '../../lib/nodemailer'; // Import the transporter

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectToDatabase(); // Connect to MongoDB
            const db = mongoose.connection.db; // Access the database instance
            const activityBookingCollection = db.collection('activitybooking');
            // console.log(req.body)
            const { name, number, email,date,aid,aprice,aname,noOfPerson} = req.body;

            // Validate input

            // Find the hotel manager's email


            // Insert the booking data
            const bookingData = {
                aid,
                name,
                email,
                number,
                date,
                aname,
                aprice,
                noOfPerson,
                createdAt: new Date(),
            };
            const result = await activityBookingCollection.insertOne(bookingData);
            const bookingId = result.insertedId.toString();
            const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);
            // Prepare emails
            const customerEmailOptions = {
                from: 'gigmathura@gmail.com',
                to: email,
                subject: 'activity Booking Confirmation',
                html: `
                <html>
                    <head></head>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <h3 style="color: orange;">Jai Shri Krishna, ${capitalizedFirstName}!</h3>
                        <p>We’re thrilled to be part of your spiritual journey to <strong>Shri Krishna Ki Nagri Mathura</strong>. Thank you for choosing <strong>GIG</strong> as your trusted companion!</p>

                        <p>We’ve received your activity booking request and will connect with you shortly on WhatsApp (<strong>${number}</strong>) for confirmation.</p>

                        <p>Oh, by the way, did you know you can plan your entire darshan with us? From customized itineraries to accommodations, transport, rituals, activity, exciting local activities and much more—we’ve got it all covered!</p>

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

//             const managerEmailOptions = {
//                 from: 'gigmathura@gmail.com',
//                 to: managerEmail,
//                 subject: `New Hotel Booking , Booking Id:${bookingId}`,
//                 html: `
//                         <h3 style="color: orange;">Jai Shri Krishna!</h3>

//                     <h3>We got a New Booking for Your Hotel: ${hotel.name}</h3>
//                     <p><strong>Customer Details:</strong></p>
//                     <ul>
//                         <li>Name: ${name}</li>
//                         <li>Email: ${email}</li>
//                         <li>Phone: ${number}</li>
//                         <li>Booking ID: ${bookingId}</li>
//                         <li>Check-in: ${checkInDate}</li>
//                         <li>Check-out: ${checkOutDate}</li>
//                         <li>Room Name: ${roomName}</li>
//                         <li>Price: ${roomPrice}</li>
//                         <li>No. of Rooms: ${noOfRooms}</li>
//                     </ul>
//                     <p>
//                     <p>Click Here to confirm booking </p>
//     <a 
//         href="https://api.whatsapp.com/send?phone=7505866498&text=Booking%20Confirmed%20of%20Booking%20ID%3A%20${bookingId}" 
//        style="background-color: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;"
//         target="_blank"
//     >
//         Confirm Booking 
//     </a>
// </p>

//                 `,
//             };

            const adminEmailOptions = {
                from: 'info@gigdarshan.com',
                to: 'admin@gigdarshan.com, adhyatmlynk@gmail.com',
                subject: `New activity Booking , Booking Id:${bookingId}`,
                html: `
                    <h3>New activity Booking</h3>
                    <p><strong>Details:</strong></p>
                    <ul>
              

                        <li><strong> Customer Details </strong></li>
                         <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Phone: ${number}</li>
                        <li>Booking ID: ${bookingId}</li>
                        <li>Date: ${date}</li>
                        <li>activity Id: ${aid}</li>
                        <li>price: ${aprice}</li>
                        <li>activity_name: ${aname}</li>

                        

                        </ul>
                            <a 
        href="https://api.whatsapp.com/send?phone=${number}" 
       style="background-color: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;"
        target="_blank"
    >
        Customer Contact
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
                // sendMail(managerEmailOptions),
                sendMail(adminEmailOptions),
            ]);

            res.status(201).json({ message: 'activity booking added and emails sent successfully!' });
        } catch (error) {
            console.error('Error adding activity booking:', error);
            res.status(500).json({ error: 'Failed to add activity booking', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
