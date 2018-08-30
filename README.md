# BOOKMARK.THIS

I used to use delicio.us to keep my bookmarks but I had a lot of problems with the service, so I decided to create my own service and... train my reactjs.

It's just the first version, without any visual appeal or options, just add and delete.

## INSTRUCTIONS

As a database, I'm using Firebase, so you have to create inside src folder a file named firebase.js with your own data, very similar to this:

~~~~ JAVASCRIPT
import firebase from 'firebase';

const config = {
  apiKey: 'XPTO',
  authDomain: 'XPTO.firebaseapp.com',
  databaseURL: 'https://XPTO.firebaseio.com',
  projectId: 'XPTO',
  storageBucket: 'XPTO.appspot.com',
  messagingSenderId: '123456789'
};

firebase.initializeApp(config);

export default firebase;
~~~~

Don't copy, it's an example with fake data.