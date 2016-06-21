var bubbles = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	//frameRate(1000);
}

/*Esta funcion se remite alrededor de los 30fps*/
function draw() {
	background(0);

	var i;
	var z;
	for(i=0;i<bubbles.length;i++){
		bubbles[i].move();
		bubbles[i].display();

		for(z=0;z<bubbles.length;z++){
			if(z!=i && bubbles[i].collapse(bubbles[z])){	
				bubbles[i].speedX *= -1
				bubbles[i].speedY *= -1;
			}			
		}
		
	}


}


function mousePressed(){
	bubbles.push(new Bubble(mouseX,mouseY));
}


function Bubble(x,y){
	this.x = x;
	this.minusX = false;

	this.y = y;
	this.minusY = false;

	this.r = random(10,20);
	this.speedX = random(-2,2);
	this.speedY = random(-2,2);


	this.display = function(){

		fill(255);
		ellipse(this.x,this.y,this.r*2,this.r*2);		
	}

	this.move = function(){

		if(this.x > width || this.x < 0){
			this.speedX *= -1;
		}

		if(this.y > height || this.y < 0){
			this.speedY *= -1;
		}
	
		this.x = this.x+this.speedX;
		this.y = this.y+this.speedY;
	}

	this.collapse = function(bubble){
		var distancia = int(dist(this.x, this.y, bubble.x, bubble.y));
		//alert(distancia);
		if(distancia < this.r+bubble.r){
			return true;
		}else{
			return false;
		}
		
	}
}

