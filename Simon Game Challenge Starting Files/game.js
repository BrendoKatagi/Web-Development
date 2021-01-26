var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence(level){
    var randomNumber = Math.floor(Math.random() * 3);
    
    $("#level-title").text("level " + level);

    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    level++;
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

$(document).keypress(function(event)
{    
    var Pkey = event.keyCode || event.which;
    console.log(Pkey);

    nextSequence(level);

});    

$(".btn").click( function()
    {
        userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        
        playSound(userChosenColour);
        animatePress(userChosenColour)
    }
);