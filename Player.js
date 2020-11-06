class Player{
constructor(){
    this.index = null;
    this.name = null;
    this.score = 0;
}
getCount(){
    var countRef = database.ref("PlayerCount");
    countRef.on("value",function(data){
        playerCount = data.val();
    });
}
update(count){
database.ref('/').update({
    'PlayerCount':count
})
}
updateInfo(){
    var playerInfo = "players/player"+playerCount;
    database.ref(playerInfo).set({
        name:this.name,
        score:this.score
    })
}
static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",function(data){
         playerArray = data.val();
    })
}
}