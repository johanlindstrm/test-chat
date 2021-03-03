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
    Chat: {
      id: 1, // should be contected to contact id
      PatientId: 0,
      BCSupprtId: 0,
      Message: [
        {
          id: 1,
          ChatId: 0,
          SenderUserId: 0,
          MessageTS: '',
          Message: 'Vill du med och kasta frissbe?',
          IsRead: false,
        },
        {
          id: 2,
          ChatId: 0,
          SenderUserId: 0,
          MessageTS: '',
          Message: 'JO fan det vill jag!!!!',
          IsRead: false,
        },
        {
          id: 3,
          ChatId: 0,
          SenderUserId: 0,
          MessageTS: '',
          Message: 'det är fint väder idag.',
          IsRead: false,
        },
        {
          id: 4,
          ChatId: 0,
          SenderUserId: 0,
          MessageTS: '',
          Message: 'ja men lite blåsigt',
          IsRead: false,
        },
      ],
    },
  });
});

app.get('/contacts', async (request, response, next) => {
  console.log('Contact');
  await response.status(200).send({
    BCSupport: [
      {
        id: 1, // Seting this id to specific contact
        PatientId: 0,
        UserID: 0,
        Name: 'Filip johannson',
        Title: '',
        ContactInfo: '',
        Organization: '',
        BCSupportTypeId: {
          Name: '',
          Description: 'Coach',
          SortNbr: 1,
        },
        Chat: {
          id: 1, // should be contected to contact id
          PatientId: 0,
          BCSupprtId: 0,
          Message: [
            {
              id: 1,
              ChatId: 0,
              SenderUserId: 0,
              MessageTS: '',
              Message: 'Vill du med och kasta frissbe?',
              IsRead: false,
            },
            {
              id: 2,
              ChatId: 0,
              SenderUserId: 0,
              MessageTS: '',
              Message: 'JO fan det vill jag!!!!',
              IsRead: false,
            },
            {
              id: 3,
              ChatId: 0,
              SenderUserId: 0,
              MessageTS: '',
              Message: 'det är fint väder idag.',
              IsRead: false,
            },
            {
              id: 4,
              ChatId: 0,
              SenderUserId: 0,
              MessageTS: '',
              Message: 'ja men lite blåsigt',
              IsRead: false,
            },
          ],
        },
      },
      {
        id: 2, // Seting this id to specific contact
        PatientId: 0,
        UserID: 0,
        Name: 'Peter larsson',
        Title: '',
        ContactInfo: '',
        Organization: '',
        BCSupportTypeId: {
          Name: '',
          Description: 'family',
          SortNbr: 0,
        },
        Chat: {
          id: 2, // should be contected to contact id
          PatientId: 0,
          BCSupprtId: 0,
          Message: [
            {
              id: 1,
              ChatId: 0,
              SenderUserId: 0,
              MessageTS: '',
              Message: 'Hej emil!!',
              IsRead: false,
            },
            {
              id: 2,
              ChatId: 0,
              SenderUserId: 0,
              MessageTS: '',
              Message: 'hej Johan',
              IsRead: false,
            },
          ],
        },
      },
    ],
    /* Chat: [
      {
        id: 1, // Same as the specfic id
        PatientId: 0,
        BCSupprtId: 0,
        Message: [
          {
            id: 1,
            ChatId: 0,
            SenderUserId: 0,
            MessageTS: '',
            Message: 'HEJ emil',
            IsRead: false,
          },
          {
            id: 200,
            ChatId: 0,
            SenderUserId: 0,
            MessageTS: '',
            Message: 'mår du bra?',
            IsRead: true,
          },
        ],
      },
      {
        id: 2, // Same as the specfic id
        PatientId: 0,
        BCSupprtId: 0,
        Message: [
          {
            id: 1,
            ChatId: 0,
            SenderUserId: 0,
            MessageTS: '',
            Message: 'Vill du med och kasta frissbe?',
            IsRead: false,
          },
          {
            id: 2,
            ChatId: 0,
            SenderUserId: 0,
            MessageTS: '',
            Message: 'JO fan det vill jag!!!!',
            IsRead: false,
          },
        ],
      },
    ],*/
  });
});

app.listen(PORT, () => {
  console.log(PORT);
});
