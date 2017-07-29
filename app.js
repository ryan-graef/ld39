var game;

document.addEventListener("DOMContentLoaded", function(event){
	//create a new game and run it
	game = new Phaser.Game(Config.size.width, Config.size.height, Phaser.OPENGL, 'game', null, false, false);

	//add the game states
	game.state.add('SplashState', new SplashState());
	game.state.add('LoadState', new LoadState());
	game.state.add('MainState', new MainState());
	game.state.add('BootupState', new BootupState());

    game.state.start('BootupState');
});