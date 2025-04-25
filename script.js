let isbold = false;

function subHTML() {
    document.getElementById("specialHTML").innerHTML = "BEGONE!! <br><button onclick='addHTML()'>I'm still standing!!?</button>";
}

function addHTML() {
    document.getElementById("specialHTML").innerHTML = "Welcome to NoahAliCollab <br>This is a project between Noah & Ali. <br> We are excited to share our work! <br><button onclick='subHTML()'>Wonder what this does?</button>";
}
function addCSS() {
    if (isbold == false) {  
        document.getElementById("specialCSS").style.fontWeight = "bold";
        document.getElementById("specialCSS").style.color = "black";
        isbold = true;
    }
    else if (isbold == true) {
        document.getElementById("specialCSS").style.fontWeight = "normal";
        document.getElementById("specialCSS").style.color = "white";
        isbold = false;
    }
}

function NumberSizer() {
    var x = document.getElementById("NumSize").value;
    y = parseFloat(x);
    if (isNaN(y)) {
        document.getElementById("ResultNS").innerHTML = "Please enter a valid number.";
        document.getElementById("ResultNS").style.color = "";
        document.getElementById("ResultNS").style.fontSize = "";
    } else if (y >= 10) {
        document.getElementById("ResultNS").innerHTML = "That's Huge!!";
        document.getElementById("ResultNS").style.color = "red";
        document.getElementById("ResultNS").style.fontSize = "30px";
    } else if (y < 10) {
        document.getElementById("ResultNS").innerHTML = "That's Small!!";
        document.getElementById("ResultNS").style.color = "blue";
        document.getElementById("ResultNS").style.fontSize = "10px";
    } else {
        document.getElementById("ResultNS").innerHTML = "Please enter a valid number.";
        document.getElementById("ResultNS").style.color = "";
        document.getElementById("ResultNS").style.fontSize = "";

    }
}

function ForLooper() {
    var x = document.getElementById("ForLoop").value;
    document.getElementById("ResultFL").innerHTML = "";
    for (i=1; i<=x; i++) {
        document.getElementById("ResultFL").innerHTML += "The number is " + i + "<br>";
    }
}

function DoLooper() {
    do {
        var x = prompt("Enter a number between 1 and 10");
        var y = parseInt(x);
        if (y != 5) {
            document.getElementById("ResultDL").innerHTML = "WRONG!! F*** *** *****";
            break;
        } else if (y == 5) {
            document.getElementById("ResultDL").innerHTML = "You got it!";
        }
    } while (y != 5);
}

function ElementInfo() {
    const NodeMap = document.getElementById("SpecialText").attributes;
    document.getElementById("ResultST").innerHTML = "The element has " + NodeMap.length + " attributes composed of: <br>";
    for (let i = 0; i < NodeMap.length; i++) {
        document.getElementById("ResultST").innerHTML += NodeMap[i].name + " = " + NodeMap[i].value + "<br>";
    }
    document.getElementById("SpecialText").innerHTML = "Oh... Not very special :(";
}

function ChangeText() {
    if (document.body.getElementsByClassName("Funny")[0].style.color == "red") {
        document.body.getElementsByClassName("Funny")[0].style.color = "orange";
    } else if (document.body.getElementsByClassName("Funny")[0].style.color == "orange") {
        document.body.getElementsByClassName("Funny")[0].style.color = "yellow";
    } else if (document.body.getElementsByClassName("Funny")[0].style.color == "yellow") {
        document.body.getElementsByClassName("Funny")[0].style.color = "green";
    } else if (document.body.getElementsByClassName("Funny")[0].style.color == "green") {
        document.body.getElementsByClassName("Funny")[0].style.color = "blue";
    } else if (document.body.getElementsByClassName("Funny")[0].style.color == "blue") {
        document.body.getElementsByClassName("Funny")[0].style.color = "purple";
    } else if (document.body.getElementsByClassName("Funny")[0].style.color == "purple") {
        document.body.getElementsByClassName("Funny")[0].style.color = "red";
    } else {
        document.body.getElementsByClassName("Funny")[0].style.color = "red";
    }
}

function Querier() {
    const QueryList = document.querySelectorAll(".Query");
    QNum = prompt("Enter a number between 1 and 3");
    QCol = prompt("What color do you want?");
    QNum = parseInt(QNum);
    if (QNum == 1) {
        QueryList[0].style.color = QCol;
    } else if (QNum == 2) {
        QueryList[1].style.color = QCol;
    } else if (QNum == 3) {
        QueryList[2].style.color = QCol;
    } else {
        alert("Invalid Input; Please enter a number between 1 and 3.");
    }
}

function kill() {
    document.body.innerHTML = '';
}

function showPassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type == 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function storeUserData(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = { email, username, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Registration successful!');
}