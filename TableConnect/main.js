var currentPerson = "red";

let map=[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]
const edgeX=map[0].length-3;

startGame=function(events){
    let dot=events.target;
    var row=Math.floor(dot.id / 7);
    var col=dot.id % 7;
    //console.log(map)
    for (var row=5;row>=0;row--) {
        if (map[row][col]==0) {
            map[row][col]=currentPerson;

            dot=document.getElementById(row*7+col)
            //console.log(row*7+col)

            if (currentPerson==="red") {
                dot.classList.add("checker", "red")
                currentPerson = "black"
            } else {
                dot.classList.add("checker", "black")
                currentPerson = "red"
            }
            break;
        }
    }
    if (checkWin()) {
        alert("Player " + currentPerson + " wins!");
        resetBoard();
    }
    if (checkSame()) {
        alert("Draw!");
        resetBoard();
    }
}
// Makes Checkers Appear
var dot = document.querySelectorAll("td");
for (var i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click', startGame);
}
function checkWin() {
    /*
    if (currentPerson === "red") {
        currentPerson = "black"
    } else {
        currentPerson = "red"
    }*/
    //This Shortens this down a lot
    currentPerson=(currentPerson==='red')?'black':'red';

    var value = currentPerson;
    //Horizontal
    //console.log(value);
    for (var row = 0; row < map.length; row++) {
        game = 0;
        for (var col = 0; col < map[row].length; col++) {
            if (map[row][col] === value) {
                game++;
            }
            else {
                game = 0;
            }
            if (game === 4) {
                return true;
            }
        }
    }
 
    //Vertical
    for (var col = 0; col < map[0].length; col++) {
        game = 0;
        for (var row = 0; row < map.length; row++) {
            if (map[row][col] === value) {
                game++;
            }
            else {
                game = 0;
            }
            if (game === 4) {
                return true;
            }
        }
    }
    //diagonal - down and right
    for (var row = 0; row < map.length - 3; row++) {
        for (var col = 0; col < map[row].length - 3; col++) {
            game = 0;
            for (var i = 0; i < 4; i++) {
                if (map[row + i][col + i] == value) {
                    game++;
                }
                else {
                    game = 0;
                }
                if (game == 4) {
                    return true;
                }
            }
        }
    }
    //diagonal - up and right
    for (var row = 0; row < map.length - 3; row++) {
        for (var col = map[row].length; col > 2; col--) {
            game = 0;
            for (var i = 0; i < 4; i++) {
                if (map[row + i][col - i] == value) {
                    game++;
                }
                else {
                    game = 0;
                }
                if (game === 4) {
                    return true;
                }
            }
        }
    }
    if (currentPerson === "red") {
        currentPerson = "black"
    } else {
        currentPerson = "red"
    }
    return false;
 }
 function checkSame() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
            if (map[row][col] === 0) {
                return false;
            }
        }
    }
    return true;
 }
 function resetBoard() {
    var dot=document.querySelectorAll("td");
    for (var i = 0; i < dot.length; i++) {
        dot[i].innerHTML = "";
    }
    for(var i=0;i<dot.length;i++){
        dot[i].classList.remove('red');
        dot[i].classList.remove('black');
    }
    map = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ]
 }
 gameOver.addeventsListener("click", () => location.reload());

