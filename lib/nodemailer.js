import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.in', // Correct Zoho SMTP server for domain-based emails
    port: 587, // Port for STARTTLS
    secure: false, // Use STARTTLS (don't use SSL on port 587)
    auth: {
        user: 'info@gigdarshan.com', // Your Zoho email address
        pass: '0B5SW5Rz8gEc', // Your Zoho password or app-specific password
    },

});

export default transporter;
