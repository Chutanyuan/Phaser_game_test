/**
 * Created by user_kevin on 17/7/4.
 */
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-qipao', {
    preload: preload,
    create: create,
    update: update,
    render: render
});
var emitter;
var x;

function preload() {
    game.load.image('bubble', 'one/res/parcicles/bubble.png');
    game.load.image('water', 'one/res/skies/underwater2.png');
}

function create() {
    game.add.image(0, 0, 'water');
    emitter = game.add.emitter(game.world.centerX, 400, 400);
    emitter.makeParticles('bubble');
    emitter.setRotation(0, 0); //旋转关闭
    emitter.setAlpha(0, 1, 3000); // 设置透明度
    emitter.setScale(0.1, 0.5, 0.1, 0.5, 6000, Phaser.Easing.Quintic.Out); //设置缩放
    emitter.gravity = -20;
    emitter.start(false, 2000, 10);//设置remove时间
    emitter.emitX = 0; //设置 粒子发射位置 X
    emitter.emitY = game.height;
    game.add.tween(emitter).to({
        emitX: 800
    }, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);

}

function update() {
    // emitter.customSort(scalesort,this);
}

function scalesort(a, b) {
    if (a.scale.x < b.scale.x) {
        return -1;
    } else if (a.scale.x > b.scale.x) {
        return 1;
    } else {
        return 0;
    }
}

function render() {

}
