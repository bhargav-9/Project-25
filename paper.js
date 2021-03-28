class paper{
constructor(x,y){
  var Options={

    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2

  }
   this.x=x;
   this.y=y;
   
 this.body=Bodies.circle(x,y, 30, this.options)
 this.image = loadImage("paper.png");
 World.add(world, this.body);
 


}

display() {
    //ellipseMode(RADIUS);
   // ellipse(this.body.position.x, this.body.position.y, 30, 30);
   push()
   translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,0,70,70)
    pop()
  }
}




