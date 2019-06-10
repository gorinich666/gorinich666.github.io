let i;
let planet1={
	x:0,
	y:0,
	razmer:70,
	otrisovka:function(){
	fill(255,255,0);
	ellipse(this.x, this.y, this.razmer, this.razmer);}	
},
planet2={
	x:50,
	y:0,
	razmer:20,
	p2:0,
	otrisovka:function(){
		push();
	for (i=0; i<36; i++);{
		fill(238,99,99);
		rotate(radians(this.p2));
		ellipse(this.x,this.y,this.razmer,this.razmer);
		this.p2 = this.p2+3;}
	pop();
	},
}, planet3={
	x:80,
	y:0,
	razmer:30,
	p3:0,
	otrisovka:function(){
	push();
	for (i=0; i<36; i++);{
		fill(139,26,26);
		rotate(radians(this.p3));
		ellipse(this.x,this.y,this.razmer,this.razmer);
		this.p3 = this.p3+2;}
	pop();}
},
		planet4={
			x:120,
			y:0,
			razmer:40,
			p4:0,
			otrisovka:function(){
	push();
	for (i=0; i<36; i++);{
		fill(139,37,0);
		rotate(radians(this.p4));
		ellipse(this.x,this.y,this.razmer,this.razmer);
		this.p4 = this.p4+3;
	}
	pop();}
		},
		planet5={
			x:170,
			y:0,
			razmer:50,
			p5:0,
			otrisovka:function(){
			push();
	for (i=0; i<36; i++);{
		fill(205,129,98);
		rotate(radians(this.p5));
		ellipse(this.x,this.y,this.razmer,this.razmer);
		this.p5 = this.p5+1;}
	pop();}
		},
		planet6={
			x:230,
			y:0,
			razmer:60,
			p6:0,
			otrisovka:function(){
	push();
	for (i=0; i<36; i++);{
		fill(255,127,0);
		rotate(radians(this.p6));
		ellipse(this.x,this.y,this.razmer,this.razmer);
		this.p6 = this.p6+2;}
	pop();}
		}
function setup() {
	 
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
}

function draw() {
	background(100);
	if(keyCode===32){
		ellipse(mouseX,mouseY,40,40);
		planetX = random(planetX);
		planetY = random(planetY);
	}
	translate(width/2,height/2);
	scale(1,-1);
	planet1.otrisovka();
	planet2.otrisovka();
	planet3.otrisovka();
	planet4.otrisovka();
	planet5.otrisovka();
	planet6.otrisovka();
}