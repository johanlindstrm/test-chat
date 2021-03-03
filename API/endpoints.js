export function GetContacts() {
  fetch('http://192.168.0.155:8081/contacts', {
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
      console.error(error);
    });
}

export function ContactsChat() {
  fetch('http://192.168.0.155:8081/messages', {
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
