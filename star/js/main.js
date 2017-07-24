/**
 * Created by user_kevin on 17/7/11.
 */
var game = new Phaser.Game(800,600,Phaser.AUTO,'',{
    preload:preload,
    create:create,
    update:update
});
function preload() {
    game.load.image('star','star/res/star.png');
}
var distance = 300;
var speed = 4;
var stars;

var max = 200;
var xx = [];var yy = [];var zz = [];

function create() {
    if (game.renderType === Phaser.WEBGL){
        max = 2000;
    }
    var sprites = game.add.spriteBatch();
    stars = [];
    for (var i = 0; i <max;i++){
        xx[i] = Math.floor(Math.random()*800)-400;
        yy[i] = Math.floor(Math.random()*600)-300;
        zz[i] = Math.floor(Math.random()*1700)-100;
        var star = game.make.sprite(0,0,'star');
        star.anchor.setTo(0.5);
        sprites.addChild(star);
        stars.push(star);
    }
}
function update() {
    for (var i = 0; i< max;i++){
        stars[i].perspective = distance/(distance-zz[i])
        stars[i].x = game.world.centerX + xx[i]* stars[i].perspective;
        stars[i].y = game.world.centerY + yy[i]*stars[i].perspective;
        zz[i]+=speed;
        if (zz[i]>300){
            zz[i] -= 600;
        }
        stars[i].alpha = Math.min(stars[i].perspective/2,1);
        stars[i].scale.set(stars[i].perspective/2);
        stars[i].rotation += 0.1;
    }
}
