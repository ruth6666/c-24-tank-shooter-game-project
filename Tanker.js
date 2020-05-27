class Tanker {
  constructor(x, y, width, height) 
  {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
    };

    display()
    {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rect(0,0,this.width,this.height);
      pop(); 
      fill("brown");

      arc(151,height-71,98,100,PI,TWO_PI);
      rect(151,height-60,100,20);
      rect(151,height-40,100,20);
            // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
