var direction = document.getElementById("speed");
var btn_clicked = document.getElementById("direction_left");
//var direction = document.getElementById("direction_right");
//var direction = document.getElementById("direction_stop");
//var direction = document.getElementById("direction_forward");
//var direction = document.getElementById("direction_reverse");

function btn_clicked(){
    var firebaseRef = firebase.database().ref();

    // creates a node...or overwrites previous child node
    firebaseRef.child("direction").set("Left");

    // creates a node...or appends a new child node
    //firebaseRef.push("direction").set("Left");
}