import * as firebase from 'firebase'

var config = {
      apiKey: "AIzaSyDeQkOxGWHKcqn4g4UJCcPE4VVvuFyEXCQ",
      authDomain: "fir-login-26192.firebaseapp.com",
      databaseURL: "https://fir-login-26192.firebaseio.com",
      projectId: "fir-login-26192",
      storageBucket: "fir-login-26192.appspot.com",
      messagingSenderId: "393440347286"
    };
export const firebaseApp = firebase.initializeApp(config);