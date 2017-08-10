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

    }
};