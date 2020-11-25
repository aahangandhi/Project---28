class Tree {
    constructor(x,y)
    {
        var options = {
            isStatic:true,
            restituition:0,
            friction:1,
        }
        this.image = loadImage("sprites/tree.png");
        this.body = Bodies.rectangle(this.x,this.y,options);
        World.add(world,this.body);
    }
    display(){
        var treePosition = this.body.position;

        push();
        translate(treePosition.x,treePosition.y);
        rectMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}