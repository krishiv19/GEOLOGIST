class Iron {
    constructor(x, y) {
      var options = {
          'friction':0.3,
          'density':3
     }

      this.body = Bodies.rectangle(x, y, 80, 60, options);
      this.width = 80;
      this.height = 60;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };