class Drops{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.5,
            isStatic:false
        }
        this.r = 3;
        this.body = Bodies.circle(x, y, this.r,options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }







}









