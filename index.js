var randomNumber1=Math.ceil((Math.random()*6));
var randomNumber2=Math.ceil((Math.random()*6));
var dice1="images/dice"+randomNumber1+".png";
var dice2="images/dice"+randomNumber2+".png";
var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",dice1);
img2.setAttribute("src",dice2);
if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 win";
else if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML="You have draw";
else {
  document.querySelector("h1").innerHTML="Player 2 win";
}
