class Plinko {
    constructor (x,y){
      var options = {
           isStatic:true,
      }
      this.body = Bodies.circle(x,y,20/2,options);
      this.radii = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      circle(0, 0, this.radii);
      pop();
    }
  };