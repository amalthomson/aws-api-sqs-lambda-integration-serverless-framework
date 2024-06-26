exports.handler = async (event) => {
  for (const record of event.Records) {
    try {
      const messageBody = JSON.parse(record.body);
      const { firstname, lastname } = messageBody;
      const country = process.env.country || 'Unknown';
      console.log(`Hello ${firstname} ${lastname}`);
      console.log(`Thank you for reaching out, your request is under process.`);
      console.log(`Please select a Country of choice from "${country}"`);
      console.log(`Regards`);
    } catch (error) {
      console.error('Error processing message:', error);
      console.log('Original message body:', record.body);
    }
  }
  return {};
};