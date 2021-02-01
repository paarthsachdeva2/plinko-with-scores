const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world
var particles =[];
var plinkos =[];
var divisions=[];
var particle;
var gameState="play";
var count=0;


var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    } 
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(25);
  text("500",30,500);
 
  textSize(25);
  text("500",100,500);

  textSize(25);
  text("500",180,500);
  
  textSize(25);
  text("100",260,500);

  textSize(25);
  text("100",350,500);

  textSize(25);
  text("100",420,500);

  textSize(25);
  text("100",500,500);

  textSize(25);
  text("100",570,500);

  textSize(25);
  text("200",650,500);

  textSize(25);
  text("200",720,500);

  textSize(25);
  text("Count="+ count,350,50);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null)
   {
    
      particle.display();
       
   if (particle.body.position.y>760)
         {
               if (particle.body.position.x < 300) 
               {
                   score=score+500;      
                   particle=null;                         
               }
 
 
               else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
               {
                     score = score + 100;
                     particle=null;
                  
 
               }
               else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
               {
                     score = score + 200;
                    particle=null;
               }
              }
            
          }

         if(count>=5){
           gameState="end";
           textSize(30);
           text("GAME OVER",270,150);
         }
        }

function mousePressed(){
  if(gameState!=="end"){
    particle=new Particle(mouseX,10,10,10);
    particle.display();
    count++
  }
}
