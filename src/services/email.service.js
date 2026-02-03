const sendEmail = async ({ to, subject, body }) => {
    // Mock SMTP
    console.log('--- MOCK EMAIL SENT ---');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Body:\n', body);
    console.log('-----------------------');
  
    return {
      success: true
    };
  };
  
  module.exports = {
    sendEmail
  };
  