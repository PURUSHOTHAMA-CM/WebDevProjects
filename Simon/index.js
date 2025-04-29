// $("h1").css("color","red");
// $("h1").text("same as inner text");
// $("h1").html("same as inner html");
//for(name in options);
// $("img").attr("src");
// $("a").attr("href","https.//www.yahoo.com");

// js code
// document.querySelector("h1").addEventListener("click",function(){
//     $("h1").css("color","blue");
// })

// same in jquery
// $("button").click(function(){
//     $("h1").css("color","blue");
// });

// for manipulating text using keypressor keydown
// $(document).keydown(function(event){
//     $("h1").text(event.key);
// });

// for any events using on
// $("h1").on("mouseover",function(){
//     $("h1").css("color","blue");
// });


// adding and removing elements through jquery
// $("h1").before("<button>new</button>");
// $("h1").after("<button>new</button>");
// $("h1").prepend("<button>new</button>");
// $("h1").append("<button>new</button>");
// $("h1").remove();

// animations using jquery
//  $("h1").hide();
//  $("h1").toggle();
//  $("h1").fadeOut();
//  $("h1").fadeToggle();
//  $("h1").slideToggle();
//  $("h1").animate(margin:20px or "20%"); //manipulates numeric values

// SIMON GAME

//user colors
userClickedPattern=[];

// array of colors
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];

// function nextSequence
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h2").text("level "+level);
    
    var randomNumber=Math.round(Math.random()*3);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
}

//SOUND FUNCTION
function makeSound(colorMatch){
        var audio = new Audio("sounds/" + colorMatch + ".mp3");
         audio.play();
}

//
$(".btn").click(function(){ 
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    makeSound(userChosenColor);
    animatePress(userChosenColor);  
    checkAnswer(userClickedPattern.length-1);
});

//animate press
function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setInterval(function(){$("#"+currentColor).removeClass("pressed");
},100);
}
// 
var gameStart=0;
$(document).keypress(firstTime);
function firstTime(){
if(gameStart===0)
{
        nextSequence();
        gameStart++;
}
}

//level sabke niklenge
var level=0;

//answer check
function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        makeSound("wrong");
        $("body").addClass("game-over");
        setInterval(function(){
            $("body").removeClass("game-over");
        },200);
        
        $("h2").text("Game Over, Press Any Key to Restart");
    startOver();
    }
    
}

//start over
function startOver(){
    level=0;
    gamePattern=[];
    gameStart=0;
}