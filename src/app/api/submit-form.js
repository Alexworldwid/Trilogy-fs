import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const formData = req.body;

            // Create a Nodemailer transporter
            const transporter = nodemailer.createTransport({
                host: 'smtp.example.com', // Your SMTP server hostname
                port: 587, // Your SMTP server port
                secure: false, // Set to true if using SSL/TLS
                auth: {
                    user: 'your_email@example.com', // Your email address
                    pass: 'your_password' // Your email password
                }
            });

            // Send email
            await transporter.sendMail({
                from: 'your_email@example.com', // Sender's email address
                to: 'recipient@example.com', // Recipient's email address
                subject: 'Form Submission', // Email subject
                html: `
                    <h1>New Form Submission</h1>
                    <p>First Name: ${formData.firstName}</p>
                    <p>Last Name: ${formData.lastName}</p>
                    <p>Email: ${formData.email}</p>
                    <!-- Add other form fields here -->
                `
            });

            res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}