exports.handler = async (event) => {
  for (const record of event.Records) {
    try {
      const messageBody = JSON.parse(record.body);
      const { firstname, lastname } = messageBody;
      console.log(`Hello ${firstname} ${lastname}\nThank you for reaching out, your request is under process.\nRegards`);
    } catch (error) {
      console.error('Error processing message:', error);
      console.log('Original message body:', record.body);
    }
  }
  return {};
};