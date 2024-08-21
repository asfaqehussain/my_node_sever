const twilio = require('twilio');

// Fetch key, secret and ids from .env file
const {
  TWILIO_ACCOUNT_SID: accountSid,
  TWILIO_API_KEY: apiKey,
  TWILIO_API_SECRET: apiSecret,
  TWILIO_SERVICE_SID: serviceSid
} = process.env;

function getToken(identity) {
  try {
    if (!identity) {
      throw new Error('Identity is required');
    }

    const { AccessToken } = twilio.jwt;
    const { ChatGrant } = AccessToken;

    const chatGrant = new ChatGrant({ serviceSid });
    const token = new AccessToken(accountSid, apiKey, apiSecret, { 
      identity, 
      ttl: 3600 // token expiration time
    });

    token.addGrant(chatGrant);
    return token.toJwt();
  } catch (error) {
    console.error('Error generating token:', error.message);
    throw error;
  }
}

module.exports = { getToken };