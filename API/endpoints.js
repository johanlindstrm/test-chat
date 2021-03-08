export function GetContactstest() {
  fetch('http://192.168.1.86:8081/contacts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('GET CONTACTS : ', responseJson);
    })
    .catch((error) => {
      console.error('error', error);
    });
}

export function ContactChattest() {
  fetch('http://192.168.0.2:8081/messages/:id', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('GET CHAT : ', responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
}
