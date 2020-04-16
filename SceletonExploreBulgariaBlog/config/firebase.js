  //слагаме съдържането от script-тага от firebase for  Firebase configuration

  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC8PWOTb4kreIsVpkm2AdSMNfPuUvNAhPM",
      authDomain: "bulgariantripsproject.firebaseapp.com",
      databaseURL: "https://bulgariantripsproject.firebaseio.com",
      projectId: "bulgariantripsproject",
      storageBucket: "bulgariantripsproject.appspot.com",
      messagingSenderId: "965866564667",
      appId: "1:965866564667:web:ae3d79dc891b20de4c801e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //analystics идва от отметката за google analystic.По принцип не ни трябва
  //   firebase.analytics();