# helloworld

> Lesson 1: Getting Started

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


> Lesson 2: Connecting with firebase

## Add dependencies

Add the dependencies 
```
npm install firebase vuefire --save
```

In main.js file add the following:
```javascript
import './firebase';
import VueFire from 'vuefire';

Vue.use(VueFire);
```

Create a new file called *firebase.js* with the content below:

```javascript
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
```
