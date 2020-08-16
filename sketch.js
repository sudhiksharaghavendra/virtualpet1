const Engine = Matter.Engine;
const World = Matter.World;
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  engine = Engine.create();
	world = engine.world;
  Dog=createSprite(250,250,10,10);
 World.add(world,Dog);
 getFood()
}


function draw() {  
 background(46, 139, 87)
  drawSprites();
  //add styles here
  imageMode(CENTER)
  image(dog,Dog.position.x,Dog.position.y,100,100)
  Engine.run(engine);
  text(foodStock,250,200,)
}
function getFood(){
  database.ref("food").on("value",function(data){
    foodStock=data.val()
  })
}
function updateFood(count){
database.ref("/").update({
 food:count 
})
}
function keyPressed()
{
  if(keyCode===UP_ARROW){
    foodStock--
    updateFood(foodStock)
  }
}

