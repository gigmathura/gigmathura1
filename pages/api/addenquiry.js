import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';
import transporter from '../../lib/nodemailer'; // Import the transporter

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase(); // Connect to MongoDB
      const db = mongoose.connection.db; // Access the database instance
      const collection = db.collection('enquiries'); // Create or use 'enquiries' collection

      // Insert the enquiry data
      const result = await collection.insertOne(req.body);
      const enquiryId = result.insertedId.toString();
      const { name, email, number, enquiry } = req.body;
      const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);

      // Customer Email
      const mailOptions = {
        from: 'gigayodhya@gmail.com',
        to: email,
        subject: 'Thank You for Your Enquiry',
        html: `
          <html>
          <head></head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h3 style="color: orange;">Jai Shri Ram, ${capitalizedFirstName}!</h3>
              <p>Thank you for reaching out to us at <strong>GIG</strong>.</p>
              <p>We’ve received your enquiry and will get back to you shortly with more details. Meanwhile, feel free to explore our services and offerings:</p>
              <p>
                  <a href="https://gigayodhya.in/" style="background-color: orange; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Explore Now</a>
              </p>
              <p>If you have any urgent queries, contact us via WhatsApp:</p>
              <p>
                  <a href="https://api.whatsapp.com/send?phone=7505866498" style="color: #0066cc; text-decoration: none; font-weight: bold;">Click here to chat with us</a>
              </p>
              <p>Warm regards,<br>Your Local Rishtedaar- GIG</p>
          </body>
          </html>
        `,
      };

      // Vendor Email
      const infomailOptions = {
        from: 'gigayodhya@gmail.com',
        to: 'gigayodhyainfo@gmail.com',
        subject: 'New Enquiry Received',
        html: `
          <html>
          <head></head>
          <body>
              <h3>New Enquiry Received</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Number:</strong> ${number}</p>
              <p><strong>Enquiry:</strong> ${enquiry}</p>
              <p><strong>Enquiry ID:</strong> ${enquiryId}</p>
              <p>Follow up with the customer on WhatsApp:</p>
              <a href="https://api.whatsapp.com/send?phone=+91${number}">Click here to chat</a>
          </body>
          </html>
        `,
      };

      // Function to send emails
      const sendMail = async (options) => {
        try {
          await transporter.sendMail(options);
          console.log('Email sent successfully');
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };

      // Send emails
      await sendMail(mailOptions); // Send email to the customer
      await sendMail(infomailOptions); // Send email to the vendor

      // Respond with success message
      res.status(201).json({ success: true, message: 'Enquiry added successfully!' });
    } catch (error) {
      console.error('Error adding enquiry:', error);
      res.status(500).json({ success: false, error: 'Failed to add enquiry', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
