function loadFunc(){
    var name = prompt("Whats your name?");
    document.getElementById('name').innerHTML = name;
}

function GenerateRN(){
    let playerNumber = Math.floor(Math.random() * 10), playerPoints = parseInt(document.getElementById('player_points').innerHTML,10);
    document.getElementById('player_number').innerHTML = playerNumber;
    let computerNumber = Math.floor(Math.random() * 10), computerPoints = parseInt(document.getElementById('computer_points').innerHTML,10);
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
        alert('Match ended')
        document.getElementById('player_points').innerHTML = 0;
        document.getElementById('computer_points').innerHTML = 0;
    }
}