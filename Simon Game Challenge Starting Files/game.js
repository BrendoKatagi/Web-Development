var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name){

    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();

}   

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");
    
    setTimeout(function(){
        $("#"+currentColour).removeClass('pressed');

        }, 100);

} 

nextSequence();

$(".btn").click( function()
    {
        userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        
        playSound(userChosenColour);
        animatePress(userChosenColour)
    }
);