/**
 * Created by user_kevin on 17/7/4.
 */
var game = new Phaser.Game(800,600,Phaser.CANVAS,'three',{
    create:create,
    render:render
});
var emitter;
function create() {
    game.stage.backgroundColor = 0x006336;
    //产生一个 bitmapDate 作为粒子的纹理
    var bmd = game.add.bitmapData(50,50);
    //渐变
    var radgrad = bmd.ctx.createRadialGradient(32,32,4,32,32,32);
    radgrad.addColorStop(0,'rgba(1,159,98,1)');
    radgrad.addColorStop(0,'rgba(1,159,98,0)');
    bmd.context.fillStyle = radgrad;
    bmd.context.fillRect(0,0,50,50);
    game.cache.addBitmapData('particleShade',bmd);

    emitter = game.add.emitter(game.world.centerX,200,200);
    emitter.width = 800;
    //使用自定义粒子类
    emitter.particleClass = MonsterParticle;
    emitter.makeParticles();
    emitter.minParticleSpeed.set(0,300);
    emitter.maxParticleSpeed.set(0,400);
    emitter.gravity = -200;
    emitter.start(false,1000,20);
    game.input.onDown.add(updateBitmapTexture,this);

}
function updateBitmapTexture() {
    var bmd = game.cache.getBitmapData('particleShade');
    bmd.context.clearRect(0,0,50,50);
    var radgrad = bmd.ctx.createRadialGradient(32,32,4,32,32,32);
    var c = Phaser.Color.getRGB(Phaser.Color.getRandomColor(0,255,255));
    radgrad.addColorStop(0,Phaser.Color.getWebRGB(c));
    c.a = 0;
    radgrad.addColorStop(1,Phaser.Color.getWebRGB(c));
    bmd.context.fillStyle = radgrad;
    bmd.context.fillRect(0,0,50,50);

}
function render() {

}
MonsterParticle = function (game, x, y) {
  Phaser.Particle.call(this,game,x,y,game.cache.getBitmapData('particleShade'));
};
MonsterParticle.prototype = Object.create(Phaser.Particle.prototype);
MonsterParticle.prototype.constructor = MonsterParticle;
