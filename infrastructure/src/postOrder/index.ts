import { SNSEvent } from 'aws-lambda';
const { JSON } = require('aws-sdk/clients/sns');

const http = require('https');

exports.handler = async (event: SNSEvent) => {

  for (const record of event.Records) {

    const snsMessage = record.Sns.Message;

    const data = JSON.parse(snsMessage);

    for (const order of data.orders) {
      const response = await http.request({
        method: 'POST',
        url: data.client.endpoint,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const body = JSON.parse(response.body);
    }


    // process response

  }

}