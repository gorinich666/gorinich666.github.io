let i;
let speed = 0;
let razmer= 10;
let planets = [];
let planet1={
	x:0,
	y:0,
	razmer:70,
	otrisovka:function(){
	fill(255,255,0);
	ellipse(this.x, this.y, this.razmer, this.razmer);}	
}
function setup() {
	 
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
}

function draw() {
	background(100);
    text ('Скорость вращения: '+speed, 10,10);
    text ('Размер планеты: '+razmer, 10, 20);
	translate(width/2,height/2);
    planet1.otrisovka();
    for (let i=0; i < planets.length; i++) {
      planets[i].otrisovka();
    }
	
}
function mouseClicked () {
    planets.push(new planet(mouseX-width/2,mouseY-height/2,razmer,speed));
  }
function keyPressed () {
  if (keyCode === 39){
   speed += 1; 
  }
  else if (keyCode === 37){
   speed -= 1; 
  }
  else if (keyCode === 38){
   razmer += 5; 
  }
  else if (keyCode === 40){
   razmer -= 5; 
  }
}
function planet (x,y,razmer,speed){
  this.razmer=razmer;
  this.x=x;
  this.y=y;
  this.angle=0;
  this.speed=speed;
  this.otrisovka = function () {
    push();
      fill (238,99,99);
      rotate(radians(this.angle));
      ellipse(this.x, this.y, this.razmer, this.razmer);
      this.angle=this.angle+speed;
    pop();
  }
  
}