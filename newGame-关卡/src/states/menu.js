var MinerGame = MinerGame || {};
MinerGame.menuState = function () {

};
MinerGame.menuState.prototype = {
    create:function () {
        var music = this.game.add.audio('intro');
        music.loopFull(0.8);

        this.map = this.game.add.tilemap('menu');
        this.map.addTilesetImage('lavaTiles','tiles');
        this.map.createLayer('lavaLayer').resizeWorld();

        // spritesheet 资源 指定需要的图片作为 精灵 'frame = 5'
        this.add.sprite(this.world.centerX-8,this.world.centerY+48,'player').frame = 5;

        var lavaParticles = this.add.emitter(this.game.world.centerX,this.game.height,400);
        lavaParticles.width = this.game.world.width;
        lavaParticles.makeParticles('particle');
        lavaParticles.minParticleScale = 0.3;
        lavaParticles.maxParticleScale = 1.2;
        lavaParticles.setYSpeed(-500,-325);
        lavaParticles.alpha = 0.2;
        lavaParticles.gravity = 0;
        lavaParticles.setXSpeed(-5,5);
        lavaParticles.minRotation = 0;
        lavaParticles.maxRotation = 0;
        lavaParticles.start(false,2200,5,0);
    },
    update:function () {

    }
};