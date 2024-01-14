import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer';
import { transporter } from './transporter';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { email = 'me@example.com', message } = req.body ?? req.query

  try {
    const messageURL = await sendEmail(email, message)
    return messageURL ? res.json({ emailURL: messageURL }) : res.status(204) //res.redirect(303, messageURL)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function sendEmail(from: string, text: string) {
  const message = { from, text };

  let info = await transporter.sendMail(message);
  // console.log('Message sent successfully!');
  return nodemailer.getTestMessageUrl(info)
}
