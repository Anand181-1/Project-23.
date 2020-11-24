class Spot2 {
    constructor(x,y) {
        var options = {
           isStatic:true 
        }
        this.box = Bodies.rectangle(x, y, 20, 100, options);
        this.width = 20;
        this.height = 100;

        World.add(world, this.box);
    }
    display() {
        var pos = this.box.position;
        fill("red")
        rect(pos.x,pos.y,this.width,this.height); 
        noFill();
    }
}