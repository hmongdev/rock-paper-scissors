$(document).ready(readyNow);

function readyNow() {
    //add inputs to rock, paper, scissor buttons
    $('button').on('click', buttonChoose);
    console.log('Added functions to buttons!');
}

let playerChoice;
let computerChoice;
console.log(`Computer choice is: ${computerChoice}`);
let buttons = ['rock', 'paper', 'scissor']

function buttonChoose(button) {
    //if...else that decides what button the player chose
    if (button.target.id === 'rock') {
        playerChoice = 'rock'
        //target and change images
        $('#playerImage').attr('src', "/rock-paper-scissors/images/rock.png");
    } else if (button.target.id === 'paper') {
        playerChoice = 'paper'
        $('#playerImage').attr('src', "/images/paper.png");
    } else if (button.target.id === 'scissor') {
        playerChoice = 'scissor'
        $('#playerImage').attr('src', "/images/scissor.png");
    }
    //randomly choose response for computer
    computerChoose();
    //determine winner
    whoWins(playerChoice, computerChoice);
}


function computerChoose() {
    //choose random index from buttons
    //~~ operator is Math.floor() so we will return the index 0
    let randomButtonIndex = ~~(Math.random() * buttons.length);
    //choose from rock, paper, scissors
    computerChoice = buttons[randomButtonIndex];
    console.log(`Computer chooses`, computerChoice);
    //change computerImage
    if (computerChoice === 'rock') {
        $('#computerImage').attr('src', "/images/rock.png");
    } else if (computerChoice === 'paper') {
        $('#computerImage').attr('src', "/images/paper.png");
    } else if (computerChoice === 'scissor') {
        $('#computerImage').attr('src', "/images/scissor.png");
    }
}

function whoWins(player, computer) {
    //player chooses rock
    if (player === 'rock' && computer === 'rock') {
        $('#outcome').text('Tied!').css('color', "yellow");
    } else if (player === 'rock' && computer === 'paper') {
        $('#outcome').text('You Lose!').css('color', 'red');
    } else if (player === 'rock' && computer === 'scissor') {
        $('#outcome').text('You Win!').css('color', 'green');
    }
    //player chooses paper
    else if (player === 'paper' && computer === 'rock') {
        $('#outcome').text('You Win!').css('color', 'green');
    } else if (player === 'paper' && computer === 'paper') {
        $('#outcome').text('Tied!').css('color', "yellow");
    } else if (player === 'paper' && computer === 'scissor') {
        $('#outcome').text('You Lose!').css('color', 'red');
    }
    //player chooses scissor
    else if (player === 'scissor' && computer === 'rock') {
        $('#outcome').text('You Lose!').css('color', 'red');
    } else if (player === 'scissor' && computer === 'paper') {
        $('#outcome').text('You Win!').css('color', 'green');
    } else if (player === 'scissor' && computer === 'scissor') {
        $('#outcome').text('Tied!').css('color', "yellow");
    }
}