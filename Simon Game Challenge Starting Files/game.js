var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart = false;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);
    userClickedPattern = [];
    
    level++;
    $("#level-title").text("level " + level);

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

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(() => {
                nextSequence();    
            }, 1000);

        }else{
            
        }

    }else{
        console.log("Wrong!");
    }
}

$(document).keypress(function(event)
{    
    if(!gameStart){
        
        $("#level-title").text("level " + level);
        nextSequence();
        gameStart = true;
    }
});    

$(".btn").click( function()
    {
        userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        
        playSound(userChosenColour);
        animatePress(userChosenColour)

        checkAnswer(userClickedPattern.length - 1);
    }
);