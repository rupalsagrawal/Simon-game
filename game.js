//alert("game.js linked");
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
function checkAnswer()
{ console.log('checkanswer called!');
  var i=0;
  var flag=0;

  while(i<gamePattern.length&&i<userClickedPattern.length)
  {
    if(gamePattern[i]==userClickedPattern[i])
    i++;
    else
    {flag=1;break;}

  }
  if(flag==0&&gamePattern.length==userClickedPattern.length)
  {   console.log("userpatternmatched");
    level=level+1;
    if(level<7)
    { gamePattern=[];
     userClickedPattern=[];
      var delay=3000*level;
      nextSequence();
      setTimeout(checkAnswer,delay);

    }
    else
    $('h1').html('You won! Press a key to start again');

  }
  else
  {   playSound('wrong');
      $('body').addClass('game-over');
      setTimeout(function(){
        $('body').removeClass('game-over');
      },1000);
      $('h1').html('You lose! Press a key to start again');
      gamePattern=[];
      userClickedPattern=[];
      level=0;
  }

}
function playSound(name)
{
  var audio= new Audio('sounds\\'+name+'.mp3');
  audio.play();
}
function animatePress(currentColour)
{
  $('.'+currentColour).switchClass(currentColour,'pressed','fast');
  $('.'+currentColour).switchClass('pressed',currentColour,'fast');

}
function nextSequence()
{ console.log('nextSequencecalled');
   $('h1').html('Level '+level);
  var num=level-1;
  //setTimeout(next,delay);
  var delay=1000;

  var id=setInterval(next,delay);
  function next()
  { if(num==0)
    clearInterval(id);

    var randomNumber=Math.ceil(Math.random()*3);
    var randomChosenColour=buttonColours[randomNumber];
    console.log("delay provided");playSound(randomChosenColour);animatePress(randomChosenColour);
    gamePattern.push(randomChosenColour);
    num=num-1;
  }


  //console.log('nextSequencecalled');
  //console.log(gamePattern);

}

$(document).on('keypress',function()
{
  level=level+1;
  var delay=5000;
  nextSequence();
  setTimeout(checkAnswer,delay);
  //checkAnswer();
});
//var delay=10000;
//setTimeout(nextSequence(),delay);
//console.log(level);
//nextSequence();
$('#green').click(
  function ()
  {var userChosenColour='green';
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
    console.log('green button clicked');
  }
)
$('#red').click(
  function ()
  { var userChosenColour='red';
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
    console.log('red button clicked');
  }
)
$('#blue').click(
  function ()
  {  var userChosenColour='blue';
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
    console.log('blue button clicked');
  }
)
$('#yellow').click(
  function ()
  {var userChosenColour='yellow';
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
    console.log('yellow button clicked');
  }
)
