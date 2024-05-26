let userAns=[];
    let correctAns = [2, 4, 3];
    let result1=" ";
    let result2=" ";
    let result3=" ";



document.getElementById("choise1.1").addEventListener("click", function() {
    userAns[0] = 1;
    console.log(userAns[0]);
});

document.getElementById("choise1.2").addEventListener("click", function() {
    userAns[0] = 2;
    console.log(userAns[0]);
});

document.getElementById("choise1.3").addEventListener("click", function() {
    userAns[0] = 3;
    console.log(userAns[0]);
});


document.getElementById("choise1.4").addEventListener("click", function() {
    userAns[0] = 4;
    console.log(userAns[0]);
});


document.getElementById("choise2.1").addEventListener("click", function() {
    userAns[1] = 1;
    console.log(userAns[1]);
});


document.getElementById("choise2.2").addEventListener("click", function() {
    userAns[1] = 2;
    console.log(userAns[1]);
});

document.getElementById("choise2.3").addEventListener("click", function() {
    userAns[1] = 3;
    console.log(userAns[1]);
});


document.getElementById("choise2.4").addEventListener("click", function() {
    userAns[1] = 4;
    console.log(userAns[1]);
});


document.getElementById("choise3.1").addEventListener("click", function() {
    userAns[2] = 1;
    console.log(userAns[2]);
});

document.getElementById("choise3.2").addEventListener("click", function() {
    userAns[2] = 2;
    console.log(userAns[2]);
});

document.getElementById("choise3.3").addEventListener("click", function() {
    userAns[2] =3;
    console.log(userAns[2]);
});

document.getElementById("choise3.4").addEventListener("click", function() {
    userAns[2] = 4;
    console.log(userAns[2]);
});


for (let i=0;i<3;i++){
    for (let j=1;j<5;j++){
        document.getElementById("choise"+(i+1)+"."+j).addEventListener("click", function() {
            document.getElementById("choise"+(i+1)+"."+j).style.backgroundColor = "green";
            for (let k=1;k<5;k++){
                if (k!=j){
                    document.getElementById("choise"+(i+1)+"."+k).style.backgroundColor = "grey";
                }
            }
        });
    }
}


document.getElementById("submit").addEventListener("click", function() {
    if (userAns[0] === correctAns[0]) {
        result1 = "Answer 1 is Correct";
    } else {
        result1 = "Answer 1 is Incorrect";
    }

    if (userAns[1] === correctAns[1]) {
        result2 = "Answer 2 is Correct";
    
    }
    else {
        result2 = "Answer 2 is Incorrect";
    }

    if (userAns[2] === correctAns[2]) {
        result3 = "Answer 3 is Correct";
    }
    else {
        result3 = "Answer 3 is Incorrect";
    }

    
    console.log(userAns);
    console.log(correctAns);
    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;
});
