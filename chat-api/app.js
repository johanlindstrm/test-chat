import { getChat } from '../API/getChatByContactId.json';
import { getContacts } from '../API/getContacts.json';

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8081;
app.use(cors());
app.get('/', async (request, response, next) => {
  await response.status(200).send({ ver: 1 });
});

/* app.get('/messages', async (request, response, next) => {
  console.log('Message');
  await response.status(200).send(getChat);
});

app.get('/contacts', async (request, response, next) => {
  console.log('Contact');
  await response.status(200).send(getContacts);
}); */

app.listen(PORT, () => {
  console.log(PORT);
});
