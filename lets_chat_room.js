
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBmrUJZLD7PVohHOZg3guu4lSKlHYm9JSw",
  authDomain: "let-s-chat-web-app-43fbd.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-43fbd-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-43fbd",
  storageBucket: "let-s-chat-web-app-43fbd.appspot.com",
  messagingSenderId: "78747075592",
  appId: "1:78747075592:web:103b660f0020991d4ffdbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id = "+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("rooom_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location = "kwitter.html";  
}

