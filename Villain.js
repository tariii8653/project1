class Villain{
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
        this.img.src = "../images/shootingGame/"+this.src;
        this.img.style.position = 'absolute';
        this.img.style.left = this.x+'px';
        this.img.style.top = this.y+'px';
        this.img.style.width = this.width+'px';
        this.img.style.height = this.height+'px';

        this.container.appendChild(this.img);
    }

    tick(){
        this.x += this.valX;
        this.y += this.valY;
    }
    render(){
        this.img.style.left = this.x+'px';
        this.img.style.top = this.y+'px';
        
        this.removeFromScreen();
    }
    delete(){
        this.container.removeChild(this.img);
        let index =villainArray.indexOf(this);
        villainArray.splice(index,1);
    }
    removeFromScreen(){
        if(this.x<0 || collisionCheck(this,plane)){
            lifeCount--;
            this.delete(); 
        }
    }
}