const firebaseConfig = {
    apiKey: "AIzaSyCk9pRpvu0l-jD6T_5qdzWEFV7c8VXIlhU",
    authDomain: "appointment-2129b.firebaseapp.com",
    databaseURL: "https://appointment-2129b-default-rtdb.firebaseio.com",
    projectId: "appointment-2129b",
    storageBucket: "appointment-2129b.appspot.com",
    messagingSenderId: "951190634517",
    appId: "1:951190634517:web:2173995537595f103ece1c",
    measurementId: "G-BC6J0LQPQX"
  };

  firebase.initializeApp(firebaseConfig);
//Refrence message collections
var messagesRef=firebase.database().ref('messages');


//Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name=getInput('name');
    var email=getInput('email');
    var phone=getInput('phone');
    var date=getInput('date');

    //save message
    saveMessage(name,email,phone,date);

}

//Function to get form values
function getInput(id){
    return document.getElementById(id).value;
}

//Save the messages to firebase
function saveMessage(name,email,phone,date){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        phone:phone,
        date:date
    });
    alert("Submitted");
}