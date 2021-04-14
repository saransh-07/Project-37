class Game{
    constructor(){

    }
    getState(){
   var stateRef = database.ref("GameState");
   stateRef.on("value",function(data){
      gameState = data.val();
   });
    }
    update(state){
        database.ref('/').update({
          'GameState':state
        });
    }
    start(){
         player = new Player();
        form=new Form();
        form.display();
        var cyclist1 = createSprite(displayWidth/4-200,displayHeight,20,100);
        cyclist1.addImage("cyclist1",cyclistA);

        var cyclist2 = createSprite((displayWidth/4)*3,displayHeight,20,100);
       cyclist2.addImage("cyclist2",cyclistB);
     cyclists = [cyclist1,cyclist2];
       
    }
    play(){
       
            form.hide();
        Player.getPlayerInfo();
       
        if(playerArray!=undefined){
            background(0,255,0);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            var x = 175;
            var y;
            var index = 0;
                for(var plr in playerArray){
                index=index+1
                x=x+500;
               
                y = displayHeight  - playerArray[plr].score;
                if(cyclists[index-1]===undefined){
                    cyclists[index-1]={};
                }
                cyclists[index-1].x = x;
                 cyclists[index-1].y = y;
              
              
            }
           if(index === player.index){
                    image(star,cyclists[index-1].x,cyclists[index-1].y,10,10);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cyclists[index-1].y;
                    }    
        }
        
            if(keyDown("UP_ARROW") && player.index!==undefined){
            player.score +=10;
            player.updateInfo();
            }
           
            drawSprites();
            if(index!==undefined){
                console.log(index);
            }
            
}
}

