import axios from 'axios';
import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

const bannedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

const sendMessage = (email) => {
  mail.send({
    to: 'info@inspektlabs.com',
    from: 'webmaster@inspektlabs.com',
    subject: `API Key Request - ${email} | Inspektlabs`,
    text: `An API Key was reqested by ${email}`,
    html: `An API Key was reqested by ${email}`,
  });
};

export default async function handler(req, res) {
  const { body, method } = req;
  const { email, captcha } = body;

  if (method === 'POST') {
    if (!email || !captcha)
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields',
      });

    const domain = email.split('@')[1].toLowerCase();

    if (bannedDomains.includes(domain)) {
      return res.status(422).json({
        message:
          'Please use a professional/company email. Personal emails are not allowed',
      });
    }

    try {
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`
      );
      const captchaValidation = await response.data;
      if (captchaValidation.success) {
        sendMessage(email);
        return res.status(200).send('OK');
      }

      return res
        .status(422)
        .json({ message: 'Unproccesable request, Invalid captcha code' });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: 'Something went wrong' });
    }
  }
  return res.status(404).send('Not found');
}
