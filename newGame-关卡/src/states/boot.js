var MinerGame = MinerGame || {};
MinerGame.bootState = function () {

};
MinerGame.bootState.prototype = {
    preload: function () {
        this.load.image('load-bar','res/img/load-bar.png');
        this.load.bitmapFont('carrier_command','res/font/carrier_command.png','res/font/carrier_command.xml');
    },
    create: function () {
        this.game.stage.backgroundColor = '#0ff';
        this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('preload');
    }
};
