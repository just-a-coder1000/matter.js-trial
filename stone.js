class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 70;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("grey");
      strokeWeight(2);
      stroke("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  