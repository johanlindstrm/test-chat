const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8081;
app.use(cors());
app.get('/', async (request, response, next) => {
  await response.status(200).send({ ver: 1 });
});

app.get('/messages', async (request, response, next) => {
  console.log('Message');
  await response.status(200).send({
    Response: {
      Chat: {
        id: 1,
        PatientId: 0,
        BCSupprtId: 0,
        Message: [
          {
            id: 0,
            ChatId: 0,
            SenderUserId: 0,
            MessageTS: '',
            Message: 'HEJ emil',
            IsRead: false,
          },
        ],
      },
    },
  });
});

app.get('/contacts', async (request, response, next) => {
  console.log('Contact');
  await response.status(200).send({
    Response: {
      BCSupport: [
        {
          id: 1,
          PatientId: 0,
          UserID: 1,
          Name: 'Emil',
          Title: '',
          ContactInfo: '',
          Organization: '',
          BCSupportTypeId: {
            Name: '',
            Description: 'family',
            SortNbr: 0,
          },
        },
      ],
      Chat: [
        {
          id: 1,
          PatientId: 0,
          BCSupprtId: 0,
          Message: [
            {
              id: 0,
              ChatId: 0,
              SenderUserId: 0,
              MessageTS: '',
              Message: 'HEJ emil',
              IsRead: false,
            },
          ],
        },
      ],
    },
  });
});

app.listen(PORT, () => {
  console.log(PORT);
});
