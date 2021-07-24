class Paper {
    constructor(x, y) {
        var option={
            isStatic:false,
            restitution:0.3,
            density:0.4,
            friction:0.2
        }
        this.body=Bodies.circle(x,y,40,option);
        this.radius=40;

        this.image = loadImage("paper.png");
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
  };