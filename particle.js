class Particle {
    constructor(x, y){
      var options={
        'restitution':0.5,
    'friction':1.0,
    'density':1.5,
      }
      this.body=Bodies.circle(x,y,this.r,options)
      this.color=color(random(0,255), random(0,255),  random(0,255));
      World.add(world,this.body);
      }
    display(){
      
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill(this.color);
        rect(0, 0, this.r,options);
        pop();
    }
}