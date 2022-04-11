
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDKTqbnoOvgpW_4_CwBtD9Ynp6v6IQ1_Us",
  authDomain: "lets-chat-webapp-363be.firebaseapp.com",
  databaseURL: "https://lets-chat-webapp-363be-default-rtdb.firebaseio.com",
  projectId: "lets-chat-webapp-363be",
  storageBucket: "lets-chat-webapp-363be.appspot.com",
  messagingSenderId: "828682585811",
  appId: "1:828682585811:web:d0e57b76b48765961bf626"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);







  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
