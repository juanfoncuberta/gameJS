function Lava(initialPosition,characterType){

    this.pos = initialPosition;
    this.size = new Vector(1,1);
    if(characterType === '=')this.speed = new Vector(2,0);
    else if(characterType === '|')this.speed = new Vector(0,2);
    else if(characterType === 'v'){
        this.speed = new Vector(0,3);
        this.respawnPosition = initialPosition;

    }

}

Lava.prototype.type = 'lava';


Lava.prototype.act = function(step,level){

    let  newPosition = this.pos.plus(this.speed.times(step));
    
    if(!level.obstacleAt(newPosition,this.size)) this.pos = newPosition;
    else if(this.respawnPosition)this.pos = this.respawnPosition;
    else this.speed = this.speed.times(-1);
    //  console.log(this.speed);
    
}