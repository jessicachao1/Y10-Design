function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(255,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape

  fill(0,0,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,0,0);

	// modifies the thickness of the border of an object
	strokeWeight(3);


	rect(10,10,100,50);
  fill(111,50,200);

	rect(10,100,100,50);
  fill(150,150,100);

	fill(50,255,20);
	stroke(210,55,155);
	strokeWeight(20);

	rect(150,10,100,50);
  fill(150,150,100);

	rect(150,100,100,50);
  fill(150,150,100);

  rect(120,250,100,50);
  rect(250,250,100,50);



}
