var MinerGame = MinerGame || {};
MinerGame.preloadState = function () {

};

MinerGame.preloadState.prototype = {
    preload: function () {
        var loadingText = this.game.add.bitmapText(this.game.world.centerX,this.game.world.centerY-64,'carrier_command','it/s just a game',14);
        loadingText.anchor.setTo(0.5,0.5);
        var preloadBar  = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'load-bar');
        preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(preloadBar);

        this.load.tilemap('menu','res/tilemaps/menu.json',null,Phaser.Tilemap.TILED_JSON);
        for (var i = 1; i<=17; i++){
            this.load.tilemap(''+i,'res/tilemaps/'+i+'.json',null,Phaser.Tilemap.TILED_JSON);
        }
        for (var i = 1; i<=2; i++){
            this.load.tilemap(i+' hard','res/tilemaps/'+i+' hard.json');
        }
        this.load.tilemap('final','res/tilemaps/final.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('final hard','res/tilemaps/final hard.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('victory','res/tilemaps/victory.json',null,Phaser.Tilemap.TILED_JSON);


        this.load.spritesheet('player','res/img/player.png',16,16,16);
        this.load.spritesheet('player-speedo', 'res/img/player-speedo.png', 16, 16, 16);
        this.load.spritesheet('dust','res/img/dust.png',8,8);
        this.load.spritesheet('player-warp', 'res/img/player-warp.png', 24, 24);
        this.load.spritesheet('player-speedo-warp', 'res/img/player-speedo-warp.png', 24, 24);
        this.load.spritesheet('portal', 'res/img/portal.png', 16, 16);
        this.load.spritesheet('secret', 'res/img/secret.png', 16, 16);
        this.load.spritesheet('block-dust', 'res/img/block-dust.png', 16, 16);
        this.load.spritesheet('drill', 'res/img/drill.png', 16, 8);
        this.load.spritesheet('battery', 'res/img/battery.png', 36, 16);
        this.load.spritesheet('robot', 'res/img/robot.png', 24, 32);

        this.load.image('tiles','res/img/tiles.png');
        this.load.image('outside-tiles','res/img/outside-tiles.png');
        this.load.image('particle','res/img/particle.png');
        this.load.image('powerup', 'res/img/item-gun.png');
        this.load.image('infinite-battery', 'res/img/infinite-battery.png');
        this.load.image('secret-particle', 'res/img/secret-particle.png');
        this.load.image('drill-particle', 'res/img/drill-particle.png');
        this.load.image('mist', 'res/img/mist.png');
        this.load.image('cloud-particle', 'res/img/cloud-particle.png');


        this.load.audio('intro', 'res/audio/intro.mp3');
        this.load.audio('start_game', 'res/audio/start_game.wav');
        this.load.audio('field1', 'res/audio/field1.mp3');
        this.load.audio('field2', 'res/audio/field2.mp3');
        this.load.audio('jump', 'res/audio/jump.wav');
        this.load.audio('player_die', 'res/audio/player_die.wav');
        this.load.audio('secret', 'res/audio/secret.wav');
        this.load.audio('footstep', 'res/audio/footstep.wav');
        this.load.audio('dust', 'res/audio/dust.wav');
        this.load.audio('spring', 'res/audio/spring.wav');
        this.load.audio('drill', 'res/audio/drill.wav');
        this.load.audio('drill-burst', 'res/audio/drill_burst.wav');
        this.load.audio('powerup', 'res/audio/powerup.wav');
        this.load.audio('blip', 'res/audio/blip.wav');
        this.load.audio('dead-drill', 'res/audio/dead-drill.wav');
        this.load.audio('final-level', 'res/audio/final-level.mp3');
        this.load.audio('victory', 'res/audio/victory.mp3');
        this.load.audio('hard-mode', 'res/audio/hard-mode.mp3');
        this.load.audio('rumble', 'res/audio/rumble.wav');
    },
    create: function () {
        this.state.start('menu')
    }
};