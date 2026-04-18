import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, company, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  const GMAIL_ADDRESS = process.env.GMAIL_ADDRESS || 'bostrich@gmail.com';

  if (!GMAIL_APP_PASSWORD) {
    console.error('GMAIL_APP_PASSWORD not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_ADDRESS,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Bostrich Contact" <${GMAIL_ADDRESS}>`,
      to: GMAIL_ADDRESS,
      replyTo: email,
      subject: `Contact from ${firstName} ${lastName}${company ? ` at ${company}` : ''}`,
      text: `Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
