class Block{
  constructor(x, y, width, height) {
    var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      
      this.visibility = 255;

      this.image = loadImage("block.png");

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
display(){

if (this.body.speed < 0){

        World.remove(world, this.body);

        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,33,40);

       this.visibility = this.visibility - 5;
       tint(255,this.visibility);
       
      }else{

       var pos = this.body.position;

  push();
  rectMode(CENTER);
  
  //rect(pos.x, pos.y, this.width, this.height);
  
  pop();
}
    console.log (this.body.speed);
    
  }
}