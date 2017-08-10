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
        //岩浆灰散发
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
        //logo
        this.titleText = this.game.add.bitmapText(this.game.world.centerX,this.game.world.centerY,'carrier_command','Little miner',32);
        this.titleText.anchor.setTo(0.5,0.5);
        // menu text
        this.startText = this.game.add.bitmapText(this.game.world.centerX,this.game.height-150,'carrier_command','press\'x\'to start',12);
        this.startText.anchor.setTo(0.5,0.5);
        this.game.add.bitmapText(this.game.world.centerX, this.game.height - 12, 'carrier_command', 'the game by a chinese man', 8).anchor.setTo(0.5, 0.5);
        var startKey = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
        startKey.onDown.add(function () {
           if (this.starting){
               return
           }
           this.starting = true;
            music.stop();
            var startSound = this.add.audio('start_game');
            startSound.volume -= .6;
            startSound.play();
            // menu text fade in and out for 1.5 sec
            var startTween = this.game.add.tween(this.startText).to({ alpha: 0 }, 100, "Linear", true, 0, -1, true);
            // after 1.5 sec, transition to next state
            this.game.time.events.add(700, function() {
                this.game.camera.fade(0x000000, 250);
                MinerGame.currentTrack = null;
                MinerGame.newLevel = true;
                MinerGame.hardModeTime = 0;
                MinerGame.hardModeDeaths = 0;
                // CHANGE FOR DEBUGGING/TESTING LEVELS //
                MinerGame.hardMode = false; // false
                MinerGame.level = '1'; // 1
                MinerGame.drillEnabled = false; // false
                // LEVEL TESTING //
                MinerGame.startTime = this.game.time.totalElapsedSeconds();
                MinerGame.deaths = 0;
                MinerGame.secrets = 0;
                this.game.camera.onFadeComplete.addOnce(function() {
                    this.starting = false;
                    this.game.state.start('play');
                }, this);
            }, this);
        },this);
    },
    update:function () {
        if (Math.random() > 0.97 && !this.lavaSplash.on) {
            this.lavaSplash.x = Math.floor(Math.random() * this.game.width);
            this.lavaSplash.start(false, 5000, 20);
            this.game.time.events.add(700, function() {
                this.lavaSplash.on = false;
            }, this);
        }
    }
};