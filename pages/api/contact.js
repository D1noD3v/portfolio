// Next.js API route to handle contact form submissions to Discord webhook
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    // For testing, you can return success without actually sending to Discord
    // Comment this out when you have a real webhook URL
    return res.status(200).json({ success: true, message: 'Form submitted successfully (test mode)' });

    // Uncomment the code below when you have a real Discord webhook URL
    /*
    // Your Discord webhook URL (from Discord channel settings)
    // Store this in an environment variable in production
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('No webhook URL configured');
      return res.status(500).json({ error: 'Webhook URL not configured' });
    }

    // Format the message for Discord
    const payload = {
      embeds: [{
        title: "New Contact Form Submission",
        color: 3066993, // Green color
        fields: [
          {
            name: "Name",
            value: name || "Not provided",
            inline: true
          },
          {
            name: "Email",
            value: email || "Not provided",
            inline: true
          },
          {
            name: "Message",
            value: message || "Not provided"
          }
        ],
        timestamp: new Date().toISOString()
      }]
    };

    // Send the request to Discord
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error(`Discord webhook error: ${discordResponse.status} ${errorText}`);
      throw new Error(`Discord webhook error: ${discordResponse.status}`);
    }

    // Return success message
    res.status(200).json({ success: true });
    */
  } catch (error) {
    console.error('Error sending to Discord:', error);
    res.status(500).json({ error: 'Failed to send message to Discord' });
  }
}