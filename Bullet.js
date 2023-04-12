class Bullet{
    constructor(container,x,y,width,height,valX,valY,src){
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.valX = valX;
        this.valY = valY;
        this.src = src;

        this.img = document.createElement('img');
        this.img.src = "../images/shootingGame/"+src;
        this.img.style.position = 'absolute';
        this.img.style.left =this.x+'px';
        this.img.style.top = this.y+'px';
        this.img.style.width = this.width+'px';
        this.img.style.height = this.height+'px';

        this.container.appendChild(this.img);
    }
    delete(){
        this.container.removeChild(this.img);
        let index = bulletArray.indexOf(this);
        bulletArray.splice(index,1);
    }
    tick(){
        this.x += this.valX;
        this.y+= this.valY;
    }
    render(){
        this.img.style.left =this.x+'px';
        this.img.style.top = this.y+'px';
        this.removeFromScreen()
    }

    removeFromScreen(){
        if(this.x > stage.clientWidth-30){
            this.delete();
        }
        for(let i=0;i<villainArray.length;i++){
            if(collisionCheck(this,villainArray[i])){
                this.delete();
                this.container.removeChild(villainArray[i].img);
                villainArray.splice(i,1);
                score += 100;
            }
        }
    }


}