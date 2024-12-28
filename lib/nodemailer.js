// /lib/nodemailer.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'gigayodhya@gmail.com',  // Your email address
        pass: 'lvxjbacohvsdvvrl',      // Your email password (Use environment variables in production)
    },
});

export default transporter;
