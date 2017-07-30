TitleState = function(){ }

TitleState.prototype = {
    preload: function(){
        console.log('preload title state');
    },

    create: function(){
        console.log('create title state');

        if(!Config.muted){
            Config.musicObjects.bgm.stop();
            Config.musicObjects.bgmslow.play("", 0, 0.3, true);
        }

        this.background = game.add.image(0, 0, 'terminalkeys');

        var textStyle = {fill: "#21E026", align: 'center'};
        this.text1 = game.add.text(game.world.centerX - 100, 75, 'Power Grid Management System v3780', textStyle);
        this.text1.font = 'Share Tech Mono';
        this.text1.fontSize = 36;
        this.text1.anchor.set(0.5);
        this.texth = game.add.text(game.world.centerX - 100, 135, 'Please choose an option:', textStyle);
        this.texth.font = 'Share Tech Mono';
        this.texth.fontSize = 28;
        this.texth.anchor.set(0.5);
        this.textr = game.add.text(game.world.centerX - 100, 185, 'R - Open Power Management Grid', textStyle);
        this.textr.font = 'Share Tech Mono';
        this.textr.fontSize = 28;
        this.textr.anchor.set(0.5);
        this.textr = game.add.text(game.world.centerX - 100, 225, 'H - Read Help Documentation', textStyle);
        this.textr.font = 'Share Tech Mono';
        this.textr.fontSize = 28;
        this.textr.anchor.set(0.5);
        this.textm = game.add.text(game.world.centerX - 100, 265, 'M - ' + (Config.muted ? 'Unmute Music' : 'Mute Music'), textStyle);
        this.textm.font = 'Share Tech Mono';
        this.textm.fontSize = 28;
        this.textm.anchor.set(0.5);

        var textStyleScore = {fill: "#21E026", align: 'right'};
        this.scoreText = game.add.text(600, 355, 'A game made by @Cudabear for LD39: Running out of Power', textStyleScore);
        this.scoreText.font = 'Share Tech Mono';
        this.scoreText.fontSize = 14;

        this.restartText = game.add.text(85, 355, '©1973 Digital Computer Systems Inc.', textStyleScore);
        this.restartText.font = 'Share Tech Mono';
        this.restartText.fontSize = 14;
    },

    update: function(){
        if(game.input.keyboard.lastKey){
            if(game.input.keyboard.lastKey.isDown){
                if(game.input.keyboard.lastKey.repeats === 1){
                    if(game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.R){
                        game.state.start('MainState');
                        Config.sfxObjects.select.play();
                    } else if(game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.H){
                        game.state.start('TutorialState');
                        Config.sfxObjects.select.play();
                    } else if(game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.M){
                        Config.sfxObjects.select.play();
                        if(Config.musicObjects.bgmslow.isPlaying){
                            this.textm.setText('M - Unmute Music');
                            Config.musicObjects.bgmslow.stop();
                            Config.muted = true;
                        } else {
                            this.textm.setText('M - Mute Music');
                            Config.musicObjects.bgmslow.play();
                            Config.muted = false;
                        }
                    }
                }
            }
        }
    },

    render: function(){

    }
}