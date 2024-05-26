//Display group
function findCategory() {
    const weight = parseFloat(document.getElementById('weight').value);
    let category = '';

    if (isNaN(weight)) {
        category = 'Please enter a valid number.';
    } else if (weight < 48) {
        category = 'Below minimumweight to be in a division.';
    } else if (weight <= 48) {
        category = ' You are in minimumweight division.';
    } else if (weight <= 51) {
        category = 'You are in Light Flyweight division.';
    } else if (weight <= 52) {
        category = ' You are in Flyweight division.';
    } else if (weight <= 55) {
        category = ' You are in Super Flyweight division.';
    } else if (weight <= 57) {
        category = 'You are in Bantamweight division.';
    } else if (weight <= 59) {
        category = 'You are in Super Bantamweight division.';
    } else if (weight <= 61) {
        category = 'You are in Featherweight division.';
    } else if (weight <= 64) {
        category = 'You are in Super Featherweight division.';
    } else if (weight <= 66) {
        category = 'You are in Lightweight division.';
    } else if (weight <= 69) {
        category = 'You are in Super Lightweight division.';
    } else if (weight <= 72) {
        category = 'You are in Welterweight division.';
    } else if (weight <= 76) {
        category = 'You are in Super Welterweight division.';
    } else if (weight <= 79) {
        category = 'You are in Middleweight division.';
    } else if (weight <= 81) {
        category = 'You are in Super Middleweight division.';
    } else if (weight <= 86) {
        category = 'You are in Light Heavyweight division.';
    } else if (weight <= 91) {
        category = 'You are in Cruiserweight division.';
    } else {
        category = 'You are in Heavyweight division.';
    }

    document.getElementById('category').innerText = category;
}
//Display group
function Change_Correct(){
    document.getElementById("Correct").innerHTML="This answer is correct!!!";
    document.getElementById("Correct").style.color="green";
}
function Change_wrong(){
    document.getElementById("Wrong").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong").style.color="red";
}
function Change_wrong1(){
    document.getElementById("Wrong1").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong1").style.color="red";
}
//First question
function Change_wrong2(){
    document.getElementById("Wrong2").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong2").style.color="red";
}
function Change_wrong3(){
    document.getElementById("Wrong3").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong3").style.color="red";
}
function Change_Correct1(){
    document.getElementById("Correct1").innerHTML="This answer is correct!!!";
    document.getElementById("Correct1").style.color="green";
}
//second question
function Change_wrong4(){
    document.getElementById("Wrong4").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong4").style.color="red";
}
function Change_Correct2(){
    document.getElementById("Correct2").innerHTML="This answer is correct!!!";
    document.getElementById("Correct2").style.color="green";
}
function Change_wrong5(){
    document.getElementById("Wrong5").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong5").style.color="red";
}
//third question
function Change_Correct3(){
    document.getElementById("Correct3").innerHTML="This answer is correct!!!";
    document.getElementById("Correct3").style.color="green";
}
function Change_wrong6(){
    document.getElementById("Wrong6").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong6").style.color="red";
}
function Change_wrong7(){
    document.getElementById("Wrong7").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong7").style.color="red";
}
//fourth question
function Change_wrong8(){
    document.getElementById("Wrong8").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong8").style.color="red";
}
function Change_Correct4(){
    document.getElementById("Correct4").innerHTML="This answer is correct!!!";
    document.getElementById("Correct4").style.color="green";
}
function Change_wrong9(){
    document.getElementById("Wrong9").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong9").style.color="red";
}
//fifthy question
function Change_wrong10(){
    document.getElementById("Wrong10").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong10").style.color="red";
}
function Change_wrong11(){
    document.getElementById("Wrong11").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong11").style.color="red";
}
function Change_Correct5(){
    document.getElementById("Correct5").innerHTML="This answer is correct!!!";
    document.getElementById("Correct5").style.color="green";
}
//sixth question
function Change_wrong12(){
    document.getElementById("Wrong12").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong12").style.color="red";
}
function Change_Correct6(){
    document.getElementById("Correct6").innerHTML="This answer is correct!!!";
    document.getElementById("Correct6").style.color="green";
}
function Change_wrong13(){
    document.getElementById("Wrong13").innerHTML="Wrong answer.Choose another.";
    document.getElementById("Wrong13").style.color="red";
}
//seventh question