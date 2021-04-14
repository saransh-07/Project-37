
var gameState,playerCount,game;
var database,star,bg,form,player;
var playerArray,cyclistA,cyclistB;
var cyclists,playRef;
playerCount=0;
  function preload(){
    track =  loadImage("track.png");
    cyclistA = loadImage("./cyclist1.png");
    cyclistB = loadImage("./cyclist2.png");
     star = loadImage("star.png");
bg = loadImage("background.png");
  }
function setup(){
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
game=new Game();

game.getState();
game.start();
game.update(0);
}
function draw(){
  background(100);
  player.getCount();
  image(bg,0,0,displayWidth,displayHeight);
  
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
  console.log(player.index);

}
