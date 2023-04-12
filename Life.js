class Life{
    constructor(container,width,height,empty){
        this.container = container;
        this.width = width;
        this. height = height;
        this.empty = empty;

        this.img = document.createElement('img');
        this.img.style.width = this.width+'px';
        this.img.style.height = this.height+'px';
        if(this.empty){//true면 빈 하트, false면 빨간하트
            this.img.src = "../images/shootingGame/emptyLife.png";
        }else{
            this.img.src = "../images/shootingGame/life.png";
        }

        this.container.appendChild(this.img);
    }
}