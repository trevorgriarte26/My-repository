class Sling {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.01
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.rope.bodyA != null){
            strokeWeight(5)
            push();
            strokeWeight(7)
            stroke("#301608")
            if(this.bodyA.position.x < 210){
                image(this.sling3,this.bodyA.position.x - 30,this.bodyA.position.y - 10,15,30)
                line(this.bodyA.position.x  - 20,this.bodyA.position.y,this.pointB.x - 10,this.pointB.y)
                line(this.bodyA.position.x  - 20,this.bodyA.position.y,this.pointB.x + 30,this.pointB.y - 3)
            }else{
                strokeWeight(4)
                image(this.sling3,this.bodyA.position.x + 20,this.bodyA.position.y - 10,15,30)
                line(this.bodyA.position.x  + 25,this.bodyA.position.y,this.pointB.x - 10,this.pointB.y)
                line(this.bodyA.position.x  + 25,this.bodyA.position.y,this.pointB.x + 30,this.pointB.y - 3)
            }
            pop();
        }
    }
    fly(){
        this.rope.bodyA = null
    }
    attach(body){
       this.rope.bodyA = body 
    }
}