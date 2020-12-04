class Particle{

    constructor(x,y,r) {

      

var options= {

isStatic:false,
restitutions:1,
friction:0.5,
density:1.2

}

this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body)

    }

    display() {

var particlepos=this.body.position;


  push()
  translate(particlepos.x,particlepos.y);
ellipseMode(CENTER)

ellipse(0,0,this.r,this.r);
pop()

 }

}