MainState = function(){ }

MainState.prototype = {
    preload: function(){
        console.log('preload main state');
    },

    create: function(){
        console.log('create main state');

        //remove this line if not using lighting effects
        game.plugins.add(Phaser.Plugin.PhaserIlluminated);

        this.background = game.add.image(0, 0, 'terminal');

        this.keys = [{string: ' 1 ', keyCode: Phaser.Keyboard.ONE}, {string: ' 2 ', keyCode: Phaser.Keyboard.TWO}, {string: ' 3 ', keyCode: Phaser.Keyboard.THREE}, {string: ' 4 ', keyCode: Phaser.Keyboard.FOUR}, {string: ' 5 ', keyCode: Phaser.Keyboard.FIVE}, {string: ' 6 ', keyCode: Phaser.Keyboard.SIX}, {string: ' 7 ', keyCode: Phaser.Keyboard.SEVEN}, {string: ' 8 ', keyCode: Phaser.Keyboard.EIGHT}, {string: ' 9 ', keyCode: Phaser.Keyboard.NINE}, {string: ' 0 ', keyCode: Phaser.Keyboard.ZERO}, {string: ' = ', keyCode: Phaser.Keyboard.EQUALS}, {string: ' [ ', keyCode: Phaser.Keyboard.OPEN_BRACKET}, {string: ' ] ', keyCode: Phaser.Keyboard.CLOSED_BRACKET}, {string: 'DEL', keyCode: Phaser.Keyboard.DELETE},
                    {string: 'ESC', keyCode: Phaser.Keyboard.ESC}, {string: ' Q ', keyCode: Phaser.Keyboard.Q}, {string: ' W ', keyCode: Phaser.Keyboard.W}, {string: ' E ', keyCode: Phaser.Keyboard.E}, {string: ' R ', keyCode: Phaser.Keyboard.R}, {string: ' T ', keyCode: Phaser.Keyboard.T}, {string: ' Y ', keyCode: Phaser.Keyboard.Y}, {string: ' U ', keyCode: Phaser.Keyboard.U}, {string: ' I ', keyCode: Phaser.Keyboard.I}, {string: ' O ', keyCode: Phaser.Keyboard.O}, {string: ' P ', keyCode: Phaser.Keyboard.P}, {string: ' RET ', keyCode: Phaser.Keyboard.ENTER}, 
                    {string: 'CTRL', keyCode: Phaser.Keyboard.CONTROL}, {string: ' A ', keyCode: Phaser.Keyboard.A}, {string: ' S ', keyCode: Phaser.Keyboard.S}, {string: ' D ', keyCode: Phaser.Keyboard.D}, {string: ' F ', keyCode: Phaser.Keyboard.F}, {string: ' G ', keyCode: Phaser.Keyboard.G}, {string: ' H ', keyCode: Phaser.Keyboard.H}, {string: 'J ', keyCode: Phaser.Keyboard.J}, {string: ' K ', keyCode: Phaser.Keyboard.K}, {string: ' L ', keyCode: Phaser.Keyboard.L}, {string: ' ; ', keyCode: Phaser.Keyboard.COLON}, //{string: ' RUN ', keyCode: null}, {string: ' BRK ', keyCode: null},
                    {string: 'SHFT', keyCode: Phaser.Keyboard.SHIFT}, {string: ' Z ', keyCode: Phaser.Keyboard.Z}, {string: ' X ', keyCode: Phaser.Keyboard.X}, {string: ' C ', keyCode: Phaser.Keyboard.C}, {string: ' V ', keyCode: Phaser.Keyboard.V}, {string: ' B ', keyCode: Phaser.Keyboard.B}, {string: ' N ', keyCode: Phaser.Keyboard.N}, {string: ' M ', keyCode: Phaser.Keyboard.M}, {string: ' , ', keyCode: Phaser.Keyboard.COMMA}, {string: ' . ', keyCode: Phaser.Keyboard.PERIOD}, {string: ' / ', keyCode: Phaser.Keyboard.QUESTION_MARK}, {string: 'SHFT', keyCode: Phaser.Keyboard.SHIFT},
                    {string: ' ← ', keyCode: Phaser.Keyboard.LEFT}, {string: ' ↑ ', keyCode: Phaser.Keyboard.UP}, {string: ' → ', keyCode: Phaser.Keyboard.RIGHT}, {string: ' ↓ ', keyCode: Phaser.Keyboard.DOWN}];

        this.createKeyboard();

        this.houses = [];
        this.createHouse();

        this.timeBetweenHouses = 100;
        this.timeUntilNextHouse = 100;
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

                        this.houses.forEach(function(house){
                            if(house.activeKey.keyCode === game.input.keyboard.lastKey.keyCode){
                                house.activeKey = this.keys[game.rnd.integerInRange(0, this.keys.length - 1)];
                                house.text.setText(house.activeKey.string);
                                house.life = house.maxLife;
                            }
                        }, this);
                    } else {
                        keySprite.sprite.anchor.y = 0;
                    }
                } else {
                    keySprite.sprite.anchor.y = 0;
                }
            }, this);
        }

        this.houses.forEach(function(house) {
            if(house.life > 0){
                house.life--;

                if(house.life < house.maxLife/4){
                    if(house.life % 20 > 9){
                        house.sprite.alpha = 0.5;
                    }else{
                        house.sprite.alpha = 1;
                    }

                }else if(house.life < house.maxLife/2){

                    if(house.life % 40 > 19){
                        house.sprite.alpha = 0.5;
                    }else{
                        house.sprite.alpha = 1;
                    }
                }else{
                    house.sprite.alpha = 1;
                }
            } else {
                house.sprite.alpha = 0.25
            }
            
            house.timeSpriteFull.crop({x: 0, y: 0, width: house.timeSpriteEmpty.width, height: house.timeSpriteEmpty.height * (house.life / house.maxLife), right: house.timeSpriteEmpty.width, bottom: house.timeSpriteEmpty.height});

        }, this);

        this.timeUntilNextHouse--;
        if(this.timeUntilNextHouse < 0){
            this.timeUntilNextHouse = this.timeBetweenHouses;
            this.createHouse();
        }
    },

    render: function(){

    },

    createHouse: function() {
        if(this.houses.length < 24){
            var textStyle = { font: "18px Arial", fill: "#21E026"}

            var row = Math.floor(this.houses.length / 8);

            var sprite = game.add.sprite(70 + 125*(this.houses.length%8), 50 + 115 * row, 'house');
            var key = this.keys[game.rnd.integerInRange(0, this.keys.length - 1)];
            var text = game.add.text(sprite.centerX - 10, sprite.centerY + 20, key.string, textStyle);

            var timeSpriteEmpty = game.add.sprite(sprite.x + 55, sprite.y + sprite.height, 'housebar', 0);
            timeSpriteEmpty.anchor.y = 1;
            var timeSpriteFull = game.add.sprite(sprite.x + 55, sprite.y + sprite.height, 'housebar', 1);
            timeSpriteFull.anchor.y = 1;

            var powerlineSprite = game.add.sprite(sprite.x + 75, sprite.y + 25, 'powerline');
            powerlineSprite.alpha = 1;
            this.houses.push({
                sprite: sprite,
                activeKey: key,
                text: text,
                life: 1000,
                maxLife: 1000,
                timeSpriteFull: timeSpriteFull,
                timeSpriteEmpty: timeSpriteEmpty,
                powerlineSprite: powerlineSprite
            });
        }
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