class Form{
    constructor(){
        
this.title =createElement("h1");
this.title.html("Infinite Cycling");

this.button = createButton("Continue");
this.input = createInput("Your Name Here");
this.reset = createButton("reset");
this.reset.position(displayWidth-100,displayHeight-100);

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        
    }
    display(){
        this.button.position(displayWidth/2-20,displayHeight/2);
        this.title.position(displayWidth/2-30,displayHeight/4);
        this.input.position(displayWidth/2-50,displayHeight/3);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.getCount();
            playerCount+=1;
            player.index = playerCount;
            
            player.name = this.input.value();
            player.updateInfo();
            player.update(playerCount);
             playRef = ("Players found:"+playerCount);
           
            
            
           
           
        })
        this.reset.mousePressed(()=>{
            player.update(0);
            game.update(0);
            
        })
        fill("white");
            if(gameState===0){
                text(playRef,displayWidth/2-50,displayHeight/3-20);
            }
    }
}