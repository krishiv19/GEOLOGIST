class Rubber{
    constructor(x,y){
        var options= {
            'friction':5,
            'restitution':0.3,
            'density':1
        }
        this.body = Bodies.circle(x,y,30,options);

        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("blue");
        ellipse(pos.x,pos.y,30,30);
    }
}