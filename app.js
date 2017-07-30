var game;

document.addEventListener("DOMContentLoaded", function(event){
	//create a new game and run it
	game = new Phaser.Game(Config.size.width, Config.size.height, Phaser.OPENGL, 'game', null, false, false);

	//  The Google WebFont Loader will look for this object, so create it before loading the script.
	WebFontConfig = {
	    //  The Google Fonts we want to load (specify as many as you like in the array)
	    google: {
	      families: ['Ubuntu Mono', 'Share Tech Mono']
	    }

	};

	//add the game states
	game.state.add('SplashState', new SplashState());
	game.state.add('LoadState', new LoadState());
	game.state.add('MainState', new MainState());
	game.state.add('GameoverState', new GameoverState());
	game.state.add('TutorialState', new TutorialState());
	game.state.add('TitleState', new TitleState());
	game.state.add('BootupState', new BootupState());

    game.state.start('BootupState');
});