class Sling {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 100,
            stiffness: 0.5
        }
        this.bodyA = bodyA
        this.bodyB = bodyB
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)
    }
}