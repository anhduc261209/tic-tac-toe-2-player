let flag = 0 // 0 means X turn, 1 means O turn

function checkWin() {
    let won;
    pos1 = document.querySelector(".butt-" + 1).innerText;
    pos2 = document.querySelector(".butt-" + 2).innerText;
    pos3 = document.querySelector(".butt-" + 3).innerText;
    pos4 = document.querySelector(".butt-" + 4).innerText;
    pos5 = document.querySelector(".butt-" + 5).innerText;
    pos6 = document.querySelector(".butt-" + 6).innerText;
    pos7 = document.querySelector(".butt-" + 7).innerText;
    pos8 = document.querySelector(".butt-" + 8).innerText;
    pos9 = document.querySelector(".butt-" + 9).innerText;

    // Check all possibilities
    
    if (pos1 == "X" && pos2 == "X" && pos3 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos4 == "X" && pos5 == "X" && pos6 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos7 == "X" && pos8 == "X" && pos9 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos1 == "X" && pos4 == "X" && pos7 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos2 == "X" && pos5 == "X" && pos8 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos3 == "X" && pos6 == "X" && pos9 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos1 == "X" && pos5 == "X" && pos9 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos3 == "X" && pos5 == "X" && pos7 == "X") {
        won = "X";
        changeTextToWhoWon(won);
    } else if (pos1 == "O" && pos2 == "O" && pos3 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos4 == "O" && pos5 == "O" && pos6 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos7 == "O" && pos8 == "O" && pos9 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos1 == "O" && pos4 == "O" && pos7 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos2 == "O" && pos5 == "O" && pos8 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos3 == "O" && pos6 == "O" && pos9 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos1 == "O" && pos5 == "O" && pos9 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos3 == "O" && pos5 == "O" && pos7 == "O") {
        won = "O";
        changeTextToWhoWon(won);
    } else if (pos1 !== "" && pos2 !== "" && pos3 !== "" && pos4 !== "" && pos5 !== "" && pos6 !== "" && pos7 !== "" && pos8 !== "" && pos9 !== "") {
        won = "draw";
        changeTextToWhoWon(won);
    } else {
        won = null;
    }
    
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
    if (who == "X") {
        text.innerText = "X won!";
    } else if (who == "O") {
        text.innerText = "O won!";
    } else if (won == "draw") {
        text.innerText = "Draw!";
    } else {
        text.innerText = "";
    }
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.querySelector(".butt-" + i).innerText = "";
    }
    document.querySelector(".res").innerText = "";
}