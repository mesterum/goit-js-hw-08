import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'tomasa.schaefer@ethereal.email',
    pass: 'FWvkJgRvFXGmyJ4QC8'
  }
}, {
  to: 'Tomasa Schaefer <tomasa.schaefer@ethereal.email>',
  subject: 'My message'
});