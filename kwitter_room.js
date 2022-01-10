var firebaseConfig = {
      apiKey: "AIzaSyDRAsNr9qi2LVrm5JopnnBPBmkD6FHmogA",
      authDomain: "kwitter-b278a.firebaseapp.com",
      databaseURL: "https://kwitter-b278a-default-rtdb.firebaseio.com",
      projectId: "kwitter-b278a",
      storageBucket: "kwitter-b278a.appspot.com",
      messagingSenderId: "537127412508",
      appId: "1:537127412508:web:b0c80c38d4560794a590d9"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
