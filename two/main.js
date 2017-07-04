/**
 * Created by user_kevin on 17/7/4.
 */
var game = new Phaser.Game(800,600,Phaser.CANVAS,"two",{
    preload:preload,
    create:create
});
function preload() {
    game.load.image('diamond','two/res/diamond.png');
}
var emitter;
function create() {
    game.physics.startSystem(Phaser.ARCADE);
    game.stage.backgroundColor = 0x446688;
    emitter = game.add.emitter(0,0,100);
    emitter.setRotation(0,0);
    emitter.setScale(0.1,1,0.1,1,1000,Phaser.Easing.Quintic.Out);
    emitter.makeParticles('diamond');
    emitter.gravity = 200;
    game.input.onDown.add(startEmitter,this);
}
function startEmitter(point) {
    emitter.x = point.x;
    emitter.y = point.y;
    emitter.start(true,2000,null,3);
}