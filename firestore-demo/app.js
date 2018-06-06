const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const docRef = db.collection('users').doc('alovelace');

const setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
})

var aTuringRef = db.collection('users').doc('aturing');

var setAlan = aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});
  
db.collection('users').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

