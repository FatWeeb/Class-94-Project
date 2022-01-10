var firebaseConfig = {
    apiKey: "AIzaSyBCoxnkH1nyP-D1vPhcTtZ4o3adDVERvbM",
    authDomain: "class-94-project.firebaseapp.com",
    databaseURL: "https://class-94-project-default-rtdb.firebaseio.com",
    projectId: "class-94-project",
    storageBucket: "class-94-project.appspot.com",
    messagingSenderId: "998862676280",
    appId: "1:998862676280:web:9b316f6bfd26412644a1cd"
  };
  
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

        window.location = "kwitter_room.html";
}