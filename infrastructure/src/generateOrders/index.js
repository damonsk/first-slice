const AWS = require('aws-sdk');
require('dotenv').config()

const topic = process.env.NEWORDERS_TOPIC_ARN;

const numbers = {
  telephoneOrders: 20,
  deliveryOrders: 20,
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomName() {
  const strings = ['Fruit', 'Pizza', 'Pasta', 'Salad', 'Chips', 'SoftDrink', 'Spaghetti', 'Fish', 'Chicken', 'Lasagna', 'Soup', 'Tacos'];
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

function getRandomPayment() {
  const strings = ['cash', 'online'];
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

exports.handler = async event => {
  console.log(JSON.stringify(event, undefined, 2));

  const clients = [{
    name: "foo",
    endpoint: "https://"
  }];

  const generateTelephoneOrders = () => {
    const telephoneOrder = {
      "orderType": "telephone",
    };
    return Array(numbers.telephoneOrders).fill(telephoneOrder);
  };

  const generateDeliveryOrders = () => {

    const generateDelivery = () => {
      return {
        "distance": getRandomNumber(),
        "feePerMile": getRandomFloat(0.1, 2.5),
        "deliveryItemMultiplier": getRandomFloat(1.1, 3)
      }
    };

    const generateItems = () => {
      return {
        "name": getRandomName(),
        "cost": getRandomFloat(0.1, 19),
      }
    }

    let orders = [];
    const deliveryOrder = {
      "orderType": "delivery",
    };
    for (let i = 0; i < numbers.deliveryOrders; i++) {
      const newDeliveryOrder = {
        ...deliveryOrder,
        payment: getRandomPayment(),
        items: generateItems(),
        delivery: generateDelivery(),
      };
      orders.push(newDeliveryOrder);
    }
    return orders;
  };

  const fixedOrders = generateTelephoneOrders().concat(generateDeliveryOrders());

  const batches = clients.map(client => {
    return {
      client,
      orders: fixedOrders
    }
  });

  const client = new AWS.SNS({ apiVersion: '2010-03-31' });

  for (const batch of batches) {
    try {
      await client.publish({
        Message: JSON.stringify(batch),
        TopicArn: topic
      }).promise();
      console.log(`Message sent to the topic ${topic}`);
    } catch (err) {
      console.error(err, err.stack);
    }
  }

  return {};
};
