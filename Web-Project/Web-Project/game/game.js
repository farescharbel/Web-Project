let buttonColours=['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];


let started = false;
let level = 0;


$(document).keydown(function () { 
    if (started === false){
        nextSequence();
        $("h1").text("Level "+level);
        started = true;
    }

});


function nextSequence(){
    userClickedPattern = [];
    level++;
    $('h1').text("Level "+level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    
    
}

$(".btn").click(function (){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});

function playSound(name){
    let audio = new Audio('sounds/'+name +'.mp3');
    audio.play();

}

function animatePress(currentColor){
    $('#'+currentColor).addClass("pressed");
    setTimeout(function (){
        $('#'+currentColor).removeClass("pressed");
    } , 100);

}

function checkAnswer(currentLevel){
     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function (){
                nextSequence();
            }, 1000);
        }
        
        
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press any key to restart");
        started = false;
        level = 0;
        gamePattern = [];
    }
}

