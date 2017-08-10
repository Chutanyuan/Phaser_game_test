var game = new Phaser.Game(768,224,Phaser.AUTO,'gif',{
    preload:preload,
    create:create
});
function preload(){
    game.load.image('gif','gif/pubu.gif');
}
function create(){
  var gif = game.add.image(0,0,'gif');
}
