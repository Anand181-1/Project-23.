class Spot1 {
    constructor(x,y) {
        var options = {
          isStatic:true
        }

        this.box = Bodies.rectangle(x, y, 200, 20, options);
        this.width = 200;
        this.height = 20;
        World.add(world, this.box);
    }
  display() {
    var pos = this.box.position;
    fill("red")
    rect(pos.x,pos.y,this.width,this.height); 
    noFill();
  }
}