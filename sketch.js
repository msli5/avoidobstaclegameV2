//Create Global varialbe be NOT assign value
let playerX, playerY, playerSize;
let obstacleX, obstacleY, obstacleSize, obstacleSpeedX, obstacleSpeedY;
let gameOver = false;
let newSpeed


function setup() {
  // Code here runs only once
  createCanvas(500, 600);
  
  //Initialize player properties
  playerX = width / 2;
  playerY = height - 150;
  playerSize = 30;
  newSpeed = 5;
  
  //Initialize obstacle properties
  obstacleX = random(width);
  obstacleY = random(height / 2);
  obstacleSize = 40;
  obstacleSpeedX = 0;
  obstacleSpeedY = 0;
}

function draw() {
  // Code here runs continuously
 background("lavender");

  //drawGrid() is referenced to the drawGrad.js file. You can hide the grid by adding "//" in front of it. If you want to see the grid OVER your sketch, move it to the line before }.
  //drawGrid();
  noStroke()
  
  //Check if the game is over, !gameOver means gameOver is false
  if (gameOver==false) {
    
    // Control player circle movement
    if (keyIsPressed==true) {
      //up arrow
      if (keyCode == 38 ){
        playerY -= newSpeed;
      } //close down arrow
      
      //down arrow
      if (keyCode == 40) {
        playerY += newSpeed;
      }//close down arrow
      
      //left arrow
      if (keyCode == 37){
        playerX -= newSpeed;
      } //close left arrow
      
      //right arrow
      if (keyCode == 39){
        playerX += newSpeed;
      } //right arrow
      
    }//close keyIsPresse
    
    //Create the blue player
    fill(0, 0, 255);
    ellipse(playerX, playerY, playerSize);
    
    // Keep player within bounds
    playerX = constrain(playerX, 15, width-15);
    playerY = constrain(playerY, 15, height-115);
    

    
    //Update and display the obstacle
    // obstacleX += obstacleSpeedX;
    // obstacleY += obstacleSpeedY;
    obstacleX += obstacleSpeedX;
    obstacleY += obstacleSpeedY;
    
    if (obstacleX < 0+20 || obstacleX > width-20){
       obstacleSpeedX *= -1;
    }
    
    if (obstacleY < 0+20 || obstacleY > height-120){
      obstacleSpeedY *= -1;
    } 
    
    //obstacle circle, red
    fill(255, 0, 0);
    ellipse(obstacleX, obstacleY, obstacleSize);
    
    //Check for collision
    if (collideCircleCircle(playerX, playerY, playerSize, obstacleX, obstacleY, obstacleSize)) {
      gameOver = true;
    }//close collision
    
  } //close Gameover
  
  else {
    //Display 'Game Over' message
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
  }// close else

  fill(153, 102, 255)
  rect(0,500,500,100)
  
  //speed button 1
  textAlign(CENTER, CENTER);
  fill("white")
  rect(40,540,80,30)
  fill("black")
  textSize(20)
  text("Easy", 70,555)
  
    //speed button 2
  fill("white")
  rect(220,540,80,30)
  fill("black")
  textSize(20)
  text("Medium", 260,555)

  
      //speed button 2
  fill("white")
  rect(380,540,80,30)
  fill("black")
  textSize(20)
  text("Hard", 420,555)
  
  
} //Closes the draw function

function mousePressed(){
   textAlign(CENTER, CENTER);
  //easy level button
  if(collidePointRect(mouseX,mouseY,40,540,80,30)){
    obstacleSpeedX=2.5;
    obstacleSpeedY=2.4;
  }
  
  //medium level button
  else if(collidePointRect(mouseX,mouseY,220,540,80,30)){
    obstacleSpeedX=4.5;
    obstacleSpeedY=4.4;
  }
  
  //hard level button
  else if(collidePointRect(mouseX,mouseY,380,540,80,30)){
    obstacleSpeedX=8.5;
    obstacleSpeedY=8.4;
  }
  
  else{
        obsNewSpeedX=1.5;
    obsNewSpeedY=1.4;
  }
}//close mousePressed
