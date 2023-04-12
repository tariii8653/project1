class Plane{
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
        this.img.style.left = this.x+'px';
        this.img.style.top = this.y+'px';
        this.img.style.width = this.width+'px';
        this.img.style.height = this.height+'px';

        this.container.appendChild(this.img);
    }
    tick(){
        if(this.x < 0){
            this.x = 0
        }else if(this.x > stage.clientWidth-this.width){
            this.x = stage.clientWidth-this.width;
        }else{
            this.x += this.valX;
        }
        if(this.y < 0){
            this.y = 0;
        }else if(this.y > stage.clientHeight-this.height){
            this.y =  stage.clientHeight-this.height;
        }else{
            this.y += this.valY;
        }
    }

    render(){
        this.img.style.left = this.x+'px';
        this.img.style.top = this.y+'px';
    }
    
}