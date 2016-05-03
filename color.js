var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var h1 = document.querySelectorAll("h1");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
colorDisplay = document.getElementById("colorDisplay");


resetButton.addEventListener("click", function){
  colors = generateRandomColors(6);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
}

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //Add initial colors to squares
  squares[i].style.background = colors[i];

  //Add click listeners to squares
  squares[i].addEventListener("click", function(){
    // graph color of cliked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    }else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}


function changeColors(color){
  //loop through all sqaures
  for(var i = 0; i < squares.length; i++){
    //change each color to math given color
    squares[i].style.backrgound = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}


function generateRandomColors(num){
  //make array
  var arr = []
  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color push into arr
    arr.push(randomColor())
    return arr;
  }
  //return that array
  return arr;
}

function randomColor(){
  // pick a "red from 0 -255"
  var r = Math.floor(Math.random() * 256)
  // pick a green from 0 -255
  var g = Math.floor(Math.random() * 256)
  //  pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256)
  "rgb(r g b)"
  return "rgb(" + r + "," + g + "," + b + ")";
}
