var MinerGame = MinerGame||{};
MinerGame.secrets = 0;
MinerGame.totalSecrets = 153;
MinerGame.startTime = MinerGame.startTime || 0;
MinerGame.totalTime = 0;
MinerGame.deaths = 0;
MinerGame.hardModeDeaths = 0;
MinerGame.level = 1;
MinerGame.playState = function(){

};
MinerGame.playState.prototype = {
    create:function () {
        this.game.camera.flash(0x000000, 250);

        this.map = this.game.add.tilemap(MinerGame.level);
        this.map.addTilesetImage('stageTiles', 'tiles');

        this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.stageLayer = this.map.createLayer('stageLayer');
        this.trapsLayer = this.map.createLayer('trapsLayer');
        this.fragileLayer = this.map.createLayer('fragileLayer');
        this.springLayer = this.map.createLayer('springLayer');
        this.drillLayer = this.map.createLayer('drillLayer');

        // set collisions on stageLayer, trapsLayer, fragileLayer and springLayer
        this.map.setCollisionBetween(1, 2000, true, 'stageLayer');
        this.map.setCollisionBetween(1, 2000, true, 'trapsLayer');
        this.map.setCollisionBetween(1, 2000, true, 'fragileLayer');
        this.map.setCollisionBetween(1, 2000, true, 'springLayer');
        this.map.setCollisionBetween(1, 2000, true, 'drillLayer');

        // resize game world to match layer dimensions
        this.backgroundLayer.resizeWorld();


        var lavaParticles = this.add.emitter(this.game.world.centerX,this.game.height,400);
        lavaParticles.width = this.game.world.width;
        lavaParticles.makeParticles('particle');
        lavaParticles.minParticleScale = 0.3;
        lavaParticles.maxParticleScale = 1.2;
        lavaParticles.setYSpeed(-500,-325);
        lavaParticles.alpha = 0.4;
        lavaParticles.gravity = 0;
        lavaParticles.setXSpeed(-5,5);
        lavaParticles.minRotation = 0;
        lavaParticles.maxRotation = 0;
        lavaParticles.start(false,2200,5,0);

        //岩浆喷射
        this.lavaSplash = this.add.emitter(0,0,200);
        this.lavaSplash.y = this.game.height-28;
        this.lavaSplash.makeParticles('particle');
        this.lavaSplash.minRotation = 0;
        this.lavaSplash.maxRotation = 0;
        this.lavaSplash.minParticleScale = 0.3;
        this.lavaSplash.maxParticleScale = 1.5;
        this.lavaSplash.setYSpeed(-280,-150);
        this.lavaSplash.gravity = 500;
    },
    update:function () {
        if (Math.random() > 0.97 && !this.lavaSplash.on) {
            this.lavaSplash.x = Math.floor(Math.random() * this.game.width/3 + this.game.width/3);
            this.lavaSplash.start(false, 5000, 20);
            this.game.time.events.add(700, function() {
                this.lavaSplash.on = false;
            }, this);
        }
    }
};