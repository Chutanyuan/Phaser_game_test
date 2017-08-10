var MinerGame = MinerGame||{};

MinerGame.game = new Phaser.Game(640,480,Phaser.AUTO,'minerGame');

MinerGame.game.state.add('boot',MinerGame.bootState);
MinerGame.game.state.add('preload',MinerGame.preloadState);
MinerGame.game.state.add('menu',MinerGame.menuState);


MinerGame.game.state.start('boot');
