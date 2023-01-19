const myCanvas = document.querySelector('canvas');
const ctx = myCanvas.getContext('2d');
myCanvas.style.border = "2px solid black";


// Road Img
const bgImg = new Image();
bgImg.src = "../images/road.png";
const bgImg2 = new Image();
bgImg2.src = "../images/road.png";


// Car Img
const bgImg3 = new Image();
bgImg3.src = "../images/car.png";
let carPosX = 120;
let carPosY = 450;
let carWidth = 60;
let carHeight = 110;
const carSpeed = 5;
let isMovingLeft = false
let isMovingRight = false
let carRadius

let bg1Y = 0
let bg2y = -myCanvas.height;
let gameOver = false;
let animateId = 0;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


// Animate

function animate(){
  ctx.drawImage(bgImg, 0, bg1Y, myCanvas.width, myCanvas.height);
  ctx.drawImage(bgImg2, 0, bg2y, myCanvas.width, myCanvas.height);
  ctx.drawImage(bgImg3, carPosX, carPosY, carWidth, carHeight);
  bg1Y += 2;
  bg2y += 2;


  if(bg1Y > myCanvas.height){
    bg1Y = -myCanvas.height
  }

  if(bg2y > myCanvas.height){
    bg2y = -myCanvas.height
  }

  if (isMovingLeft) {
    carPosX -= carSpeed
  }
  if (isMovingRight) {
    carPosX += carSpeed
  }


// Game over

if(!gameOver){
  animateId = requestAnimationFrame(animate);
}else{
  cancelAnimationFrame(animateId)
}
}


// Start game

  function startGame() {
    animate();
    console.log('Game started');
  }
  document.addEventListener('keypress', event => {
    if (event.key === 'a') {
      // move paddle to the left
      isMovingLeft = true
    }
    if (event.key === 'd') {
      // move paddle to the right
      isMovingRight = true
    } 
    console.log(event)
  })
  document.addEventListener('keyup', () => {
    // Stop moving the paddle
    isMovingLeft = false
    isMovingRight = false
})
};
