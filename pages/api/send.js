import { Resend } from 'resend';

// Contact form handler using Resend for email
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get API key from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const workEmail = process.env.EMAIL;
    
    // Check if API key exists
    if (!resendApiKey) {
      console.error('Missing Resend API key in environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }
    
    // Initialize Resend with API key
    const resend = new Resend(resendApiKey);
    
    // Extract form data
    const { name, email, message } = req.body;

    // Validate required fields
    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: workEmail, // Replace with your email address
      subject: `New contact from ${name || 'Website Visitor'}`,
      text: `Name: ${name || 'Not provided'}\nEmail: ${email}\nMessage: ${message}`,
      // Optional HTML version
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Check for Resend API errors
    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'An error occurred while processing your message' 
    });
  }
}