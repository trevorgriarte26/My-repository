const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var gameState = 'onSling'
var bg
var msg = "hi"

function preload() {
    getData();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    rope = new Sling(bird.body,{x:200,y:50})

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

    rope.display();
    text(msg,50,50)

}

function mouseDragged(){
    if(gameState === 'onSling'){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}

function mouseReleased(){
    gameState = 'released'
    rope.fly()
}

function keyPressed(){
    if(keyCode === 32){
        gameState = 'onSling'
        rope.attach(bird.body)
    }
}

async function getData(){
    var data = await fetch('https://worldtimeapi.org/api/timezone/America/Los_Angeles')
    var myData = await data.json()
    var day = myData.day_of_week
    switch(day){
        case 0: msg = "Today is Monday!"
        break;
        case 1: msg = "Today is Tuesday!"
        break;
        case 2: msg = "Today is Wednesday!"
        break;
        case 3: msg = "Today is Thursday!"
        break;
        case 4: msg = "Today is Friday!"
        break;
        case 5: msg = "Today is Saturday!"
        break;
        case 6: msg = "Today is Sunday!"
        break;
    }
    console.log(myData)
    var hour = myData.datetime.slice(11,13)
    if(hour >= 6 && hour <= 19){
        bg = loadImage("sprites/bg.png")
    }else{
        bg = loadImage("sprites/bg2.jpg")
    }
    backgroundImg = bg
}