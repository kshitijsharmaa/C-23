class Box{
    constructor(x,y,w,h){
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,w,h);
        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}