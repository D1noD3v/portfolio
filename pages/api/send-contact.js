// Simple contact form handler API route
export default async function handler(req, res) {
    // Only accept POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    try {
      // Extract form data
      const { name, email, message } = req.body;
  
      // Validate required fields
      if (!email || !message) {
        return res.status(400).json({ error: 'Email and message are required' });
      }
  
      // Log the form submission (for testing)
      console.log('Form submission received:', { name, email, message });
  
      // In a real application, you would send the email here
      // For now, we'll just simulate a successful submission
  
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: 'Message received successfully' 
      });
      
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        error: 'An error occurred while processing your message' 
      });
    }
  }