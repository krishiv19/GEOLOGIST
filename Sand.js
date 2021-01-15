class Sand{
    constructor(x,y){
        var options= {
            'friction':5,
            'restitution':1.3,
            'density':1
        }
        this.body = Bodies.circle(x,y,5,options);

        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("red");
        ellipse(pos.x,pos.y,5,5);
    }
}