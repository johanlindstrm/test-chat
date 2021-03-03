const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8081;
app.use(cors());
app.get("/", async (request, response, next) => {
  await response.status(200).send({ ver: 1 });
});

app.get("/messages", async (request, response, next) => {
  console.log("Message");
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
          MessageTS: "",
          Message: "Vill du med och kasta frissbe?",
          IsRead: false,
        },
        {
          id: 2,
          ChatId: 0,
          SenderUserId: 0,
          MessageTS: "",
          Message: "JO fan det vill jag!!!!",
          IsRead: false,
        },
        {
          id: 3,
          ChatId: 0,
          SenderUserId: 0,
          MessageTS: "",
          Message: "det är fint väder idag.",
          IsRead: false,
        },
        {
          id: 4,
          ChatId: 0,
          SenderUserId: 0,
          MessageTS: "",
          Message: "ja men lite blåsigt",
          IsRead: false,
        },
      ],
    },
  });
});

app.get("/contacts", async (request, response, next) => {
  console.log("Contact");
  await response.status(200).send({
    BCSupport: [
      {
        id: 1, // Setting this id to specific contact
        patientId: 0,
        userID: 0,
        name: "Filip Johannson",
        title: "",
        contactInfo: "",
        organization: "",
        BCSupportTypeId: {
          name: "",
          description: "Coach",
          sortNbr: 1,
        },
      },
      {
        id: 2, // Setting this id to specific contact
        patientId: 0,
        userID: 0,
        name: "Peter Larsson",
        title: "",
        contactInfo: "",
        organization: "",
        BCSupportTypeId: {
          name: "",
          description: "family",
          sortNbr: 0,
        },
      },
      {
        id: 3, // Setting this id to specific contact
        patientId: 0,
        userID: 0,
        name: "Test Larsson",
        title: "",
        contactInfo: "",
        organization: "",
        BCSupportTypeId: {
          name: "",
          description: "family",
          sortNbr: 0,
        },
      },
    ],
    Chat: [
      {
        id: 1, // Same as the specfic id
        patientId: 0,
        bcSupportId: 0,
        message: [
          {
            id: 1,
            chatId: 0,
            senderUserId: 0,
            messageTS: "12:30",
            message: "Hej Emil",
            isRead: false,
          },
          {
            id: 2,
            chatId: 0,
            senderUserId: 0,
            messageTS: "08:30",
            message: "mår du bra?",
            isRead: true,
          },
        ],
      },
      {
        id: 2, // Same as the specfic id
        patientId: 0,
        bcSupportId: 0,
        message: [
          {
            id: 1,
            chatId: 0,
            senderUserId: 0,
            messageTS: "09.35",
            message: "Vill du med och kasta frissbe?",
            isRead: false,
          },
          {
            id: 2,
            chatId: 0,
            senderUserId: 0,
            messageTS: "10.20",
            message: "JO fan det vill jag!!!!",
            isRead: false,
          },
        ],
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(PORT);
});
