class Mango {
    constructor(x,y,width,height)
    {
        var options = {
            isStatic:true,
            restituition:0,
            friction:1,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var mangoPosition = this.body.position;

        push();
        translate(mangoPosition.x,mangoPosition.y);
        rectMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}