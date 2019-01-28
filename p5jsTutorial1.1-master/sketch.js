function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(28,25,253)

  // change the paint brush to a specific color according to RGB values
  fill(28,255,242);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,100,100);
  rect(700-70-1,0,70,70);
  rect(0,449,100,50);

  fill(28,255,88);
  rect(700-70-1,449,70,50);

  rect(700-350-50,500-250-50,70,70);
  rect(700-350-50,500-250+50,70,70);
  rect(700-350-50,500-250+100,70,70);



}
