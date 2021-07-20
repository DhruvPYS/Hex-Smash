class BoxG {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density': 0.1
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        
        World.add(world, this.body);
      }
      display()

      {
        push();
        fill ("cyan")
        translate(this.body.position.x, this.body.position.y);

        rotate (this.body.angle)

        rectMode(CENTER)

        rect( 0, 0, 30, 40);
        pop();

        
      }
}