class Block {

    constructor(x, y, width, height) {

        var options={
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display() {
        
        console.log(this.body.speed);
        if (this.body.speed <3) {
          var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }else{
          World.remove(world, this.body);
          push();
           this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
         
          pop();

          
          push();
         fill("white");
          strokeWeight(2.5);
          textSize(25);
          text("press the space bar to restart session", 900, 500);
          pop();

        }
      }
      
}
