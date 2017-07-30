GameoverState = function(){ }

GameoverState.prototype = {
    preload: function(){
        console.log('preload gameover state');
    },

    create: function(){
        console.log('create gameover state');

        this.keys = [{string: ' 1 ', keyCode: Phaser.Keyboard.ONE}, {string: ' 2 ', keyCode: Phaser.Keyboard.TWO}, {string: ' 3 ', keyCode: Phaser.Keyboard.THREE}, {string: ' 4 ', keyCode: Phaser.Keyboard.FOUR}, {string: ' 5 ', keyCode: Phaser.Keyboard.FIVE}, {string: ' 6 ', keyCode: Phaser.Keyboard.SIX}, {string: ' 7 ', keyCode: Phaser.Keyboard.SEVEN}, {string: ' 8 ', keyCode: Phaser.Keyboard.EIGHT}, {string: ' 9 ', keyCode: Phaser.Keyboard.NINE}, {string: ' 0 ', keyCode: Phaser.Keyboard.ZERO}, {string: ' = ', keyCode: Phaser.Keyboard.EQUALS}, {string: ' [ ', keyCode: Phaser.Keyboard.OPEN_BRACKET}, {string: ' ] ', keyCode: Phaser.Keyboard.CLOSED_BRACKET}, {string: 'DEL', keyCode: Phaser.Keyboard.DELETE},
                    {string: 'ESC', keyCode: Phaser.Keyboard.ESC}, {string: ' Q ', keyCode: Phaser.Keyboard.Q}, {string: ' W ', keyCode: Phaser.Keyboard.W}, {string: ' E ', keyCode: Phaser.Keyboard.E}, {string: ' R ', keyCode: Phaser.Keyboard.R}, {string: ' T ', keyCode: Phaser.Keyboard.T}, {string: ' Y ', keyCode: Phaser.Keyboard.Y}, {string: ' U ', keyCode: Phaser.Keyboard.U}, {string: ' I ', keyCode: Phaser.Keyboard.I}, {string: ' O ', keyCode: Phaser.Keyboard.O}, {string: ' P ', keyCode: Phaser.Keyboard.P}, {string: ' RET ', keyCode: Phaser.Keyboard.ENTER}, 
                    {string: 'CTL', keyCode: Phaser.Keyboard.CONTROL}, {string: ' A ', keyCode: Phaser.Keyboard.A}, {string: ' S ', keyCode: Phaser.Keyboard.S}, {string: ' D ', keyCode: Phaser.Keyboard.D}, {string: ' F ', keyCode: Phaser.Keyboard.F}, {string: ' G ', keyCode: Phaser.Keyboard.G}, {string: ' H ', keyCode: Phaser.Keyboard.H}, {string: 'J ', keyCode: Phaser.Keyboard.J}, {string: ' K ', keyCode: Phaser.Keyboard.K}, {string: ' L ', keyCode: Phaser.Keyboard.L}, {string: ' ; ', keyCode: Phaser.Keyboard.COLON}, //{string: ' RUN ', keyCode: null}, {string: ' BRK ', keyCode: null},
                    {string: 'SFT', keyCode: Phaser.Keyboard.SHIFT}, {string: ' Z ', keyCode: Phaser.Keyboard.Z}, {string: ' X ', keyCode: Phaser.Keyboard.X}, {string: ' C ', keyCode: Phaser.Keyboard.C}, {string: ' V ', keyCode: Phaser.Keyboard.V}, {string: ' B ', keyCode: Phaser.Keyboard.B}, {string: ' N ', keyCode: Phaser.Keyboard.N}, {string: ' M ', keyCode: Phaser.Keyboard.M}, {string: ' , ', keyCode: Phaser.Keyboard.COMMA}, {string: ' . ', keyCode: Phaser.Keyboard.PERIOD}, {string: ' / ', keyCode: Phaser.Keyboard.QUESTION_MARK}, {string: 'SFT', keyCode: Phaser.Keyboard.SHIFT},
                    {string: ' ← ', keyCode: Phaser.Keyboard.LEFT}, {string: ' ↑ ', keyCode: Phaser.Keyboard.UP}, {string: ' → ', keyCode: Phaser.Keyboard.RIGHT}, {string: ' ↓ ', keyCode: Phaser.Keyboard.DOWN}];

        this.background = game.add.image(0, 0, 'terminal');

        this.createKeyboard();

        var textStyle = { font: "48px Arial", fill: "#21E026", align: 'center'};
        var textStyleSmall = { font: "28px Arial", fill: "#21E026", align: 'center'};
        this.text1 = game.add.text(game.world.centerX - 100, 75, 'You\'re fired!', textStyle);
        this.text2 = game.add.text(game.world.centerX - 100, 150, 'There are riots in the streets over the lack of power!', textStyleSmall);
        this.text3 = game.add.text(game.world.centerX - 100, 200, 'At least you managed to keep the lights on for a little while.', textStyleSmall);
        this.text4 = game.add.text(game.world.centerX - 100, 275, 'Rumor has it the power plant in the next town over is hiring.\nWant to try again?', textStyleSmall);
        this.text1.anchor.set(0.5);
        this.text2.anchor.set(0.5);
        this.text3.anchor.set(0.5);
        this.text4.anchor.set(0.5);

        var textStyleScore = { font: "24px Arial", fill: "#21E026", align: 'right'};
        this.scoreText = game.add.text(800, 345, 'Score: ' + Config.score, textStyleScore);

        this.restartText = game.add.text(125 + 40, 345, 'R to restart', textStyleScore);
    },

    update: function(){
        this.keySprites.forEach(function(keySprite){
            keySprite.text.x = keySprite.sprite.centerX;
            keySprite.text.y = keySprite.sprite.centerY;
        });
        if(game.input.keyboard.lastKey){
            this.keySprites.forEach(function(keySprite){
                if(keySprite.key.keyCode === game.input.keyboard.lastKey.keyCode){
                    if(game.input.keyboard.lastKey.isDown){
                        keySprite.sprite.anchor.y = -0.15;

                        if(game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.R){
                            game.state.start('MainState');
                        }
                       
                    } else {
                        keySprite.sprite.anchor.y = 0;
                    }
                } else {
                    keySprite.sprite.anchor.y = 0;
                }
            }, this);
        }
    },

    render: function(){

    },

    createKeyboard: function() {
        this.keySprites = [];
        var textStyle = { font: "20px Arial" };
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
            var yPos = 440 + row * 44;
            var sprite = game.add.sprite(xPos, yPos, 'key');

            //special case for arrow keys
            if(row >= 4){
                sprite.scale.x = -1;
                sprite.x = 1120 + xOffset;
                sprite.y = 345 + row * 44;
            }

            var text = game.add.text(sprite.centerX, sprite.centerY - 5, key.string, textStyle);
            text.anchor.set(0.5);

            this.keySprites.push({
                sprite: sprite,
                text:  text,
                key: key
            });
        }, this);
    }
}