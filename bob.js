class Bob{
    constructor(x,y,radius){
        
        
    var option={
      isStatic:true
    }    
      
      
    this.body=Bodies.circle(x,y,radius,option)
    this.radius=radius
   
    World.add(world,this.body)
    
    }
    display(){
    var pos=this.body.position
    push();
    
    fill("pink")
    circle(pos.x,pos.y,this.radius)
    pop();
    }
    }
    