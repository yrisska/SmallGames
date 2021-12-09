var slots = ["ne_nado","cry","fire","meme","pop"];
var advices = ["It is certain.","It is decidedly so.","Without a doubt.","Yes definitely.","You may rely on it."];
var counter = 0;
var userName = "User";

function loadGame(){
    document.getElementById('name').innerHTML = userName;
}
var reel1, reel2, reel3;
const Cards = {
    cardName : [
        "Jack", "Queen", "King", "6", "7", "8", "9", "10", "Ace"
    ] , 
    cardPoint : [
        2,3,4,6,7,8,9,10,11
    ]
}
var playerPoints = 0;
var computerPoints = 0;

function Spin(){
    document.getElementById('slots_button').disabled = true;
    counter++;
    document.getElementById('try').innerHTML = "Try: " + counter + " from 3";
    reel1 = Math.floor(Math.random() *  4);
    reel2 = Math.floor(Math.random() *  4);
    reel3 = Math.floor(Math.random() *  4);
    document.getElementById("reel1").setAttribute('src',"img/" + slots[reel1] + '.jpg');
    document.getElementById("reel2").setAttribute('src',"img/" + slots[reel2] + '.jpg');
    document.getElementById("reel3").setAttribute('src',"img/" + slots[reel3] + '.jpg');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            document.getElementById("reel1").setAttribute('src',"img/" + slots[(reel1 + Math.floor(Math.random() *  3)) % 5] + '.jpg');
            document.getElementById("reel2").setAttribute('src',"img/" + slots[(reel2 + Math.floor(Math.random() *  3)) % 5] + '.jpg');
            document.getElementById("reel3").setAttribute('src',"img/" + slots[(reel3 + Math.floor(Math.random() *  3)) % 5] + '.jpg');
        }, 500 * i);
    }
    setTimeout(() => {
        if (document.getElementById("reel1").getAttribute('src') == document.getElementById("reel2").getAttribute('src') && document.getElementById("reel1").getAttribute('src') == document.getElementById("reel3").getAttribute('src')) {
            alert("Jackpot!")
        }
    }, 5100);
    setTimeout(() => {
        document.getElementById('slots_button').disabled = false;
        if (counter == 3) {
            alert('Game ended!')
            counter = 0;
            document.getElementById('try').innerHTML = "Try: " + counter + " from 3";
        }
    }, 5200);
}

function CreateBall(){
    let Ball = document.createElement('img');
    let Div = document.createElement('div');
    let Hover = document.createElement('div');
    Ball.setAttribute("src","img/ball.png")
    Ball.style.cssText = "height:100%";
    Div.style.cssText = "height: 50vh;width:50vh;position:relative;left:35vw;top:25vh;"
    Hover.style.cssText = "z-index:5;position:absolute;left:0;top:0;height:100%;width:100%;"
    document.body.prepend(Div);
    Div.prepend(Ball);
    Div.append(Hover);
    let String = document.createElement('p');
    let Back = document.createElement('div');
    Back.setAttribute('id','Back')
    Back.style.cssText = "position:absolute;left:30%;top:39%;background:#A8B8E2;opacity:0.7;height:34%;width:36%;border-radius:10px;"
    String.style.cssText = "width:100%;position:absolute;left:0%;top:9%;color:black;font-size:3vh;font-weight:bold;font-family:verdana;opacity:none;text-align:center;";
    String.innerHTML = 'Ask me.';
    Div.append(Back);
    Back.append(String);
    Hover.onclick = function() {
        String.innerHTML = advices[Math.floor(Math.random()*advices.length)];
    }
}

function Deal(){
    document.getElementById('try').innerHTML = "Try: " + counter + " from 3";
    let random1 = Math.floor(Math.random() * Cards.cardName.length);
    let random2 = Math.floor(Math.random() * Cards.cardName.length);
    let playerCard = Cards.cardName[random1];
    document.getElementById('player_card').setAttribute("src","img/" + playerCard.toString() + ".jpg");
    let computerCard = Cards.cardName[random2];
    document.getElementById('computer_card').setAttribute("src","img/" + computerCard.toString() + ".jpg");
    playerPoints+= Cards.cardPoint[random1];
    document.getElementById('player_points').innerHTML = playerPoints;
    computerPoints+= Cards.cardPoint[random2];
    document.getElementById('computer_points').innerHTML = computerPoints;
    setTimeout(() => {
        if(counter == 4){
            if(playerPoints > computerPoints)
                alert("You win!")
            if(playerPoints < computerPoints)
                alert("You lose...")
            if(playerPoints == computerPoints)
                alert("Tie!")
            playerPoints = 0;
            computerPoints = 0;
            document.getElementById('player_points').innerHTML = 0;
            document.getElementById('computer_points').innerHTML = 0;
            counter = 1;
        }
    }, 1);
    counter++;
}
function GenerateRN(){
    document.getElementById('numbers_button').disabled = true;
    let playerNumber = Math.floor(Math.random() * 10);
    document.getElementById('player_number').innerHTML = playerNumber;
    let computerNumber = Math.floor(Math.random() * 10);
    document.getElementById('computer_number').innerHTML = computerNumber;
    if(playerNumber>computerNumber){
        playerPoints++;
        document.getElementById('player_points').innerHTML = playerPoints;
    }
    else if(playerNumber<computerNumber){
        computerPoints++;
        document.getElementById('computer_points').innerHTML = computerPoints;
    }
    if(playerPoints == 3 || computerPoints == 3){
        setTimeout(() => {
            alert('Match ended');
            playerPoints = 0;
            computerPoints = 0;
            document.getElementById('player_points').innerHTML = 0;
            document.getElementById('computer_points').innerHTML = 0;
        }, 2);
    }
    setTimeout(() => {
        document.getElementById('numbers_button').disabled = false;
    }, 5);
}