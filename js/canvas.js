var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var pos_x = 20;
var pos_y = 200;
var dir_x = 2;
var dir_y = 2;
var spd = 3;
var canvasWidth = canvas.width;
var canvasHeigth = canvas.height;
var ballRadius = 10;
var pallet1Pos_y = 150;
var pallet2Pos_y = 150;
var pallet2Pos_x = canvasWidth - 20;


window.addEventListener('keydown', function(event){
  switch (event.keyCode){
    case 38:
      pallet2Pos_y -= 20;
      break;
      case 40:
      pallet2Pos_y += 20;
      break;
  };
})
window.addEventListener('keydown', function(event){
  switch (event.keyCode){
      case 87:
      pallet1Pos_y -= 20;
      break;
      case 83:
      pallet1Pos_y += 20;
      break;

  };
})



requestAnimationFrame(drawBall);//lepsiejszy motyw
requestAnimationFrame(drawPallet1);
requestAnimationFrame(drawPallet2);


function drawBall(){
  ctx.beginPath();
  ctx.clearRect(0,0,canvasWidth,canvasHeigth);
  ctx.arc(pos_x,pos_y,ballRadius,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();
  pos_x = pos_x + dir_x * spd;
  pos_y = pos_y + dir_y * spd;
  if (pos_y >= pallet2Pos_y && pos_y <= pallet2Pos_y + 100 && pos_x >= canvasWidth - (ballRadius +10)) dir_x = -1;
  if (pos_y >= pallet1Pos_y && pos_y <= pallet1Pos_y + 100 && pos_x <= ballRadius +10) dir_x = 1;
  if (pos_y >= canvasHeigth - ballRadius)dir_y = -1;
  if (pos_y <=ballRadius) dir_y = 1;
  requestAnimationFrame(drawBall);
}

function drawPallet1(){
  ctx.beginPath();
  ctx.rect(5, pallet1Pos_y, 10, 100);
  ctx.fill();
  ctx.stroke();
  requestAnimationFrame(drawPallet1);
  
 };
function drawPallet2(){
  ctx.beginPath();
  ctx.rect(pallet2Pos_x, pallet2Pos_y, 10, 100);
  ctx.fill();
  ctx.stroke();
  requestAnimationFrame(drawPallet2);
}
