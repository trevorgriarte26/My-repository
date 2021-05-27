class Sling {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 100,
            stiffness: 0.5
        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        if(this.rope.bodyA != null){
            strokeWeight(5)
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
    fly(){
        this.rope.bodyA = null
    }
}