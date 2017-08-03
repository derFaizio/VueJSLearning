import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
    apiKey: "AIzaSyD6AjwsDJU4woJ5UppYRknBKgU6-yzoJKQ",
    authDomain: "vuejslearning-a7012.firebaseapp.com",
    databaseURL: "https://vuejslearning-a7012.firebaseio.com",
    projectId: "vuejslearning-a7012",
    storageBucket: "vuejslearning-a7012.appspot.com",
    messagingSenderId: "240162923265"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const firebaseDB = firebaseApp.database();