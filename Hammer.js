class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 130, 40, options);
      this.width = 130;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
      //fill("pink");
      //text("Hammer",pos.x,pos.y);
    }
  };