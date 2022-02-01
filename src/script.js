let flag = 0 // 0 means X turn, 1 means O turn
let pos1 = document.querySelector(".butt-" + 1).innerText;
let pos2 = document.querySelector(".butt-" + 2).innerText;
let pos3 = document.querySelector(".butt-" + 3).innerText;
let pos4 = document.querySelector(".butt-" + 4).innerText;
let pos5 = document.querySelector(".butt-" + 5).innerText;
let pos6 = document.querySelector(".butt-" + 6).innerText;
let pos7 = document.querySelector(".butt-" + 7).innerText;
let pos8 = document.querySelector(".butt-" + 8).innerText;
let pos9 = document.querySelector(".butt-" + 9).innerText;
function checkWin() {
    let won;
    if (pos1 == "X" && pos2 == "X" && pos3 == "X") {
        won = "X";
    } else if (pos4 == "X" && pos5 == "X" && pos6 == "X") {
        won = "X";
    } else if (pos7 == "X" && pos8 == "X" && pos9 == "X") {
        won = "X";
    } else if (pos1 == "X" && pos4 == "X" && pos7 == "X") {
        won = "X";
    } else if (pos2 == "X" && pos5 == "X" && pos8 == "X") {
        won = "X";
    } else if (pos3 == "X" && pos6 == "X" && pos9 == "X") {
        won = "X";
    } else if (pos1 == "X" && pos5 == "X" && pos9 == "X") {
        won = "X";
    } else if (pos3 == "X" && pos5 == "X" && pos7 == "X") {
        won = "X";
    } else if (pos1 == "O" && pos2 == "O" && pos3 == "O") {
        won = "O";
    } else if (pos4 == "O" && pos5 == "O" && pos6 == "O") {
        won = "O";
    } else if (pos7 == "O" && pos8 == "O" && pos9 == "O") {
        won = "O";
    } else if (pos1 == "O" && pos4 == "O" && pos7 == "O") {
        won = "O";
    } else if (pos2 == "O" && pos5 == "O" && pos8 == "O") {
        won = "O";
    } else if (pos3 == "O" && pos6 == "O" && pos9 == "O") {
        won = "O";
    } else if (pos1 == "O" && pos5 == "O" && pos9 == "O") {
        won = "O";
    } else if (pos3 == "O" && pos5 == "O" && pos7 == "O") {
        won = "O";
    } else if (pos1 !== "" && pos2 !== "" && pos3 !== "" && pos4 !== "" && pos5 !== "" && pos6 !== "" && pos7 !== "" && pos8 !== "" && pos9 !== "") {
        won = "draw";
    } else {
        won = null;
    }
    changeTextToWhoWon(won);
}
function buttClick(i) {
    if (flag == 0 && document.querySelector(".butt-" + i).innerText == "") {
        document.querySelector(".butt-" + i).innerText = "X";
        flag = 1;
    } else if (flag == 1 && document.querySelector(".butt-" + i).innerText == "") {
        document.querySelector(".butt-" + i).innerText = "O";
        flag = 0;
    }
    checkWin();
}
function changeTextToWhoWon(who) {
    text = document.querySelector(".res");
    switch (who) {
        case "X":
            text.innerText = "X won!";
            for (let i = 1; i <= 9; i++) {
                document.querySelector(".butt-" + i).onclick = () => {};
            }
            break;
        case "O":
            text.innerText = "O won!";
            for (let i = 1; i <= 9; i++) {
                document.querySelector(".butt-" + i).onclick = () => {};
            }
            break;
        case "draw":
            text.innerText = "Draw!";
            for (let i = 1; i <= 9; i++) {
                document.querySelector(".butt-" + i).onclick = () => {};
            }
            break;
        default:
            text.innerText = "";
            break;
    }   
}
function resetGame() {
    location.reload();
}