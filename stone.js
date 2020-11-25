class Stone {
    constructor(x,y,r)
    {
        var options = {
            isStatic:false,
            restituition:0,
            friction:1,
            density:1.2,

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.circle(20,50,1,options);
        World.add(world,this.body);
    }
    display(){
        var stonePosition = this.body.position;
     //   stonePosition.x = mouseX;
       // stonePosition.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(stonePosition.x,stonePosition.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image,this.x,this.y,30,30);
        pop();
    }
}

