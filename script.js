$(document).ready(readyNow);

function readyNow() {
    //add inputs to rock, paper, scissor buttons
    $('button').on('click', playerChoice);
    console.log('Added functions to buttons!');
}

let choice;

function playerChoice(button) {
    //decide what button the player chose
    if (button.target.id === 'rock') {
        choice = 'rock'
        $('#user').attr('src', "/images/rock.png");
    } else if (button.target.id === 'paper') {
        choice = 'paper'
        $('#user').attr('src', "/images/paper.png");

    } else if (button.target.id === 'scissor') {
        choice = 'scissor'
        $('#user').attr('src', "/images/scissor.png");
    }
    //return value of button
    console.log(`You chose ${choice}!`);
    //target images
    //push button value into img
    //display image for human player
}