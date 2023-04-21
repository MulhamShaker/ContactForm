
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, subject, message } = req.body;

    console.log('Form Data:', {
      firstName,
      lastName,
      email,
      subject,
      message
    });
    
    res.status(200).json({ message: 'Form submitted successfully' });
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
}