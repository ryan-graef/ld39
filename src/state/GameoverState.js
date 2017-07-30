GameoverState = function(){ }

GameoverState.prototype = {
    preload: function(){
        console.log('preload gameover state');
    },

    create: function(){
        if(!Config.muted && !Config.musicObjects.bgmslow.isPlaying){
            Config.musicObjects.bgm.stop();
            Config.musicObjects.bgmslow.play("", 0, 0.3, true);
        }

        EventTracking.logEvent('gameover', Config.score);

        console.log('create gameover state');

        this.background = game.add.image(0, 0, 'terminalkeys');

        this.createText();

        this.score = 0;
    },

    createText: function() {
        var textStyle = {fill: "#21E026", align: 'center'};
        var textStyleSmall = {fill: "#21E026", align: 'center'};
        this.text1 = game.add.text(game.world.centerX - 100, 75, 'Major Power Grid failure!', textStyle);
        this.text1.font = 'Share Tech Mono';
        this.text1.fontSize = 36;
        this.text2 = game.add.text(game.world.centerX - 100, 135, 'Fault occured at: 0 points!', textStyleSmall);
        this.text2.font = 'Share Tech Mono';
        this.text2.fontSize = 28;
        this.text3 = game.add.text(game.world.centerX - 100, 185, 'System is now in recovery mode.  Choose an option:', textStyleSmall);
        this.text3.font = 'Share Tech Mono';
        this.text3.fontSize = 28;
        this.text4 = game.add.text(game.world.centerX - 350, 225, 'R - Restore Power Grid from beginning', textStyleSmall);
        this.text4.font = 'Share Tech Mono';
        this.text4.fontSize = 28;
        this.text4 = game.add.text(game.world.centerX - 100, 275, 'ESC - Return to main menu', textStyleSmall);
        this.text4.font = 'Share Tech Mono';
        this.text4.fontSize = 28;
        this.text1.anchor.set(0.5);
        this.text2.anchor.set(0.5);
        this.text3.anchor.set(0.5);
        this.text4.anchor.set(0.5);

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

                if(game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.R){
                    game.state.start('MainState');
                } else if(game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.ESC){
                    game.state.start('TitleState');
                }
            }
        }

        if(this.score < Config.score){
            this.score += 200;

            if(this.score > Config.score){
                this.score = Config.score;
            }
             this.text2.setText('Fault occured at: ' + this.score + ' points!')
        }
    },

    render: function(){

    },

    createKeyboard: function() {
        this.keySprites = [];
        //var textStyle = { font: "57px Ubuntu+Mono" };
        var lastRow = -1;
        var xOffset = 0;
        this.keys.forEach(function(key, index){
            var row = index > 13 ? index > 25 ? index > 36 ? index > 48 ? index > 50 ? 5 : 4 : 3 : 2 : 1 : 0;
            xOffset += 62;

            if(row > lastRow){
                lastRow = row;
                xOffset = -12 * row;
            }

            var xPos = 85 + xOffset;
            var yPos = 410 + row * 44;
            var sprite = game.add.sprite(xPos, yPos, 'key', 0);
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(function(){
                if(sprite.frame === 1){
                    Config.sfxObjects.switch.play();
                }

                sprite.frame = 0;
            }, this);

            //special case for arrow keys
            if(row >= 4){
                sprite.scale.x = -1;
                sprite.x = 1120 + xOffset;
                sprite.y = 345 + row * 44;
            }

            var text = game.add.text(sprite.centerX, sprite.centerY, key.string);
            text.font = 'Ubuntu Mono';
            text.fontSize = 20;
            text.anchor.set(0.5);

            this.keySprites.push({
                sprite: sprite,
                text:  text,
                key: key
            });
        }, this);
    }
}