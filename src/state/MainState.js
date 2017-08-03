MainState = function(){ }

MainState.prototype = {
    preload: function(){
        console.log('preload main state');
    },

    create: function(){
        console.log('create main state');

        if(!Config.muted && !Config.musicObjects.bgm.isPlaying){
            Config.musicObjects.bgmslow.stop();
            Config.musicObjects.bgm.play("", 0, 0.3, true);
        }

        //remove this line if not using lighting effects
        game.plugins.add(Phaser.Plugin.PhaserIlluminated);

        this.background = game.add.image(0, 0, 'terminal');

        this.keys = [{string: ' 1 ', keyCode: Phaser.Keyboard.ONE}, {string: ' 2 ', keyCode: Phaser.Keyboard.TWO}, {string: ' 3 ', keyCode: Phaser.Keyboard.THREE}, {string: ' 4 ', keyCode: Phaser.Keyboard.FOUR}, {string: ' 5 ', keyCode: Phaser.Keyboard.FIVE}, {string: ' 6 ', keyCode: Phaser.Keyboard.SIX}, {string: ' 7 ', keyCode: Phaser.Keyboard.SEVEN}, {string: ' 8 ', keyCode: Phaser.Keyboard.EIGHT}, {string: ' 9 ', keyCode: Phaser.Keyboard.NINE}, {string: ' 0 ', keyCode: Phaser.Keyboard.ZERO}, {string: ' = ', keyCode: Phaser.Keyboard.EQUALS}, {string: ' [ ', keyCode: Phaser.Keyboard.OPEN_BRACKET}, {string: ' ] ', keyCode: Phaser.Keyboard.CLOSED_BRACKET}, {string: 'DEL', keyCode: Phaser.Keyboard.DELETE},
                    {string: 'ESC', keyCode: Phaser.Keyboard.ESC}, {string: ' Q ', keyCode: Phaser.Keyboard.Q}, {string: ' W ', keyCode: Phaser.Keyboard.W}, {string: ' E ', keyCode: Phaser.Keyboard.E}, {string: ' R ', keyCode: Phaser.Keyboard.R}, {string: ' T ', keyCode: Phaser.Keyboard.T}, {string: ' Y ', keyCode: Phaser.Keyboard.Y}, {string: ' U ', keyCode: Phaser.Keyboard.U}, {string: ' I ', keyCode: Phaser.Keyboard.I}, {string: ' O ', keyCode: Phaser.Keyboard.O}, {string: ' P ', keyCode: Phaser.Keyboard.P}, {string: ' RET ', keyCode: Phaser.Keyboard.ENTER}, 
                    {string: 'CTL', keyCode: Phaser.Keyboard.CONTROL}, {string: ' A ', keyCode: Phaser.Keyboard.A}, {string: ' S ', keyCode: Phaser.Keyboard.S}, {string: ' D ', keyCode: Phaser.Keyboard.D}, {string: ' F ', keyCode: Phaser.Keyboard.F}, {string: ' G ', keyCode: Phaser.Keyboard.G}, {string: ' H ', keyCode: Phaser.Keyboard.H}, {string: 'J ', keyCode: Phaser.Keyboard.J}, {string: ' K ', keyCode: Phaser.Keyboard.K}, {string: ' L ', keyCode: Phaser.Keyboard.L}, {string: ' ; ', keyCode: Phaser.Keyboard.COLON}, //{string: ' RUN ', keyCode: null}, {string: ' BRK ', keyCode: null},
                    {string: 'SFT', keyCode: Phaser.Keyboard.SHIFT}, {string: ' Z ', keyCode: Phaser.Keyboard.Z}, {string: ' X ', keyCode: Phaser.Keyboard.X}, {string: ' C ', keyCode: Phaser.Keyboard.C}, {string: ' V ', keyCode: Phaser.Keyboard.V}, {string: ' B ', keyCode: Phaser.Keyboard.B}, {string: ' N ', keyCode: Phaser.Keyboard.N}, {string: ' M ', keyCode: Phaser.Keyboard.M}, {string: ' , ', keyCode: Phaser.Keyboard.COMMA}, {string: ' . ', keyCode: Phaser.Keyboard.PERIOD}, {string: ' / ', keyCode: Phaser.Keyboard.QUESTION_MARK}, {string: 'SFT', keyCode: Phaser.Keyboard.SHIFT},
                    {string: ' ← ', keyCode: Phaser.Keyboard.LEFT}, {string: ' ↑ ', keyCode: Phaser.Keyboard.UP}, {string: ' → ', keyCode: Phaser.Keyboard.RIGHT}, {string: ' ↓ ', keyCode: Phaser.Keyboard.DOWN}];

        this.playableKeys = [{string: ' 1 ', keyCode: Phaser.Keyboard.ONE}, {string: ' 2 ', keyCode: Phaser.Keyboard.TWO}, {string: ' 3 ', keyCode: Phaser.Keyboard.THREE}, {string: ' 4 ', keyCode: Phaser.Keyboard.FOUR}, {string: ' 5 ', keyCode: Phaser.Keyboard.FIVE}, {string: ' 6 ', keyCode: Phaser.Keyboard.SIX}, {string: ' 7 ', keyCode: Phaser.Keyboard.SEVEN}, {string: ' 8 ', keyCode: Phaser.Keyboard.EIGHT}, {string: ' 9 ', keyCode: Phaser.Keyboard.NINE}, {string: ' 0 ', keyCode: Phaser.Keyboard.ZERO},
            {string: ' Q ', keyCode: Phaser.Keyboard.Q}, {string: ' W ', keyCode: Phaser.Keyboard.W}, {string: ' E ', keyCode: Phaser.Keyboard.E}, {string: ' R ', keyCode: Phaser.Keyboard.R}, {string: ' T ', keyCode: Phaser.Keyboard.T}, {string: ' Y ', keyCode: Phaser.Keyboard.Y}, {string: ' U ', keyCode: Phaser.Keyboard.U}, {string: ' I ', keyCode: Phaser.Keyboard.I}, {string: ' O ', keyCode: Phaser.Keyboard.O}, {string: ' P ', keyCode: Phaser.Keyboard.P}, 
            {string: ' A ', keyCode: Phaser.Keyboard.A}, {string: ' S ', keyCode: Phaser.Keyboard.S}, {string: ' D ', keyCode: Phaser.Keyboard.D}, {string: ' F ', keyCode: Phaser.Keyboard.F}, {string: ' G ', keyCode: Phaser.Keyboard.G}, {string: ' H ', keyCode: Phaser.Keyboard.H}, {string: 'J ', keyCode: Phaser.Keyboard.J}, {string: ' K ', keyCode: Phaser.Keyboard.K}, {string: ' L ', keyCode: Phaser.Keyboard.L},
            {string: ' Z ', keyCode: Phaser.Keyboard.Z}, {string: ' X ', keyCode: Phaser.Keyboard.X}, {string: ' C ', keyCode: Phaser.Keyboard.C}, {string: ' V ', keyCode: Phaser.Keyboard.V}, {string: ' B ', keyCode: Phaser.Keyboard.B}, {string: ' N ', keyCode: Phaser.Keyboard.N}, {string: ' M ', keyCode: Phaser.Keyboard.M}];

        this.createKeyboard();

        this.blueSwitch = game.add.sprite(1179, 531, 'switchblue', 1);
        this.redSwitch = game.add.sprite(1163, 430, 'switchred', 1);
        this.blueSwitch.inputEnabled = true;
        this.redSwitch.inputEnabled = true;
        this.blueSwitch.events.onInputDown.add(function(){
            this.blueSwitch.frame = 1;
            this.houses.forEach(function(house){
                if(house.lockedBy === 'blue'){
                    house.lockedBy = null;
                    house.sprite.frame = 0;
                    Config.sfxObjects.switch.play();
                    house.text.setText(house.activeKey.string);
                }
            }, this);
        }, this);
        this.redSwitch.events.onInputDown.add(function(){
            this.redSwitch.frame = 1;
            this.houses.forEach(function(house){
                if(house.lockedBy === 'red'){
                    house.lockedBy = null;
                    house.sprite.frame = 0;
                    Config.sfxObjects.switch.play();
                    house.text.setText(house.activeKey.string);
                }
            }, this);
        }, this);

        this.houses = [];
        this.createHouse();
        this.createHouse();
        this.createHouse();

        this.timeBetweenHouses = 1500;
        this.timeUntilNextHouse = this.timeBetweenHouses;
        Config.score = 0;

        var textStyle = {fill: "#21E026", align: 'right'};
        this.scoreLabel = game.add.text(750, 345, 'SCORE: ', textStyle);
        this.scoreLabel.font = 'Share Tech Mono';
        this.scoreLabel.fontSize = 28;
        this.scoreText = game.add.text(875, 345, '0', textStyle);
        this.scoreText.font = 'Share Tech Mono';
        this.scoreText.fontSize = 28;

        this.lifeCount = 3;
        this.lives = [];
        for(var i = 0; i < this.lifeCount; i++){
            var lifeSprite = game.add.sprite(125 + 40*i, 325, 'housenobox');
            lifeSprite.scale.set(0.75);
            this.lives.push(lifeSprite);
        }

        this.timeSinceLastLock = 0;
        this.difficultyMultiplier = 1;

    },

    update: function(){
        this.difficultyMultiplier += 0.0005;
        console.log(this.difficultyMultiplier);
        this.keySprites.forEach(function(keySprite){
            if(keySprite.sprite.frame === 0){
                keySprite.text.x = keySprite.sprite.centerX;
                keySprite.text.y = keySprite.sprite.centerY + 15;
            } else{
                keySprite.text.x = keySprite.sprite.centerX - 3;
                keySprite.text.y = keySprite.sprite.centerY - 20;
            }
        });

        if(game.input.keyboard.lastKey){
            this.keySprites.forEach(function(keySprite){
                if(keySprite.key.keyCode === game.input.keyboard.lastKey.keyCode){
                    if(game.input.keyboard.lastKey.isDown){
                        keySprite.sprite.anchor.y = -0.15;

                        if(keySprite.sprite.frame === 1 && !Config.sfxObjects.brokenkey.playing){
                            Config.sfxObjects.brokenkey.play();
                        }else{
                            this.playableKeys.forEach(function(playableKey){
                                if(playableKey.keyCode === game.input.keyboard.lastKey.keyCode){
                                    //will this key break?
                                    if(game.rnd.integerInRange(0, 1000) > 1000-(5*this.difficultyMultiplier)) {
                                        keySprite.sprite.frame = 1;
                                        Config.sfxObjects.break.play();
                                    }
                                }
                            }, this);
                        }
                            

                        this.houses.forEach(function(house){
                            if(house.activeKey.keyCode === game.input.keyboard.lastKey.keyCode && !house.lockedBy && keySprite.sprite.frame === 0){
                                if(house.life > 0){
                                    house.activeKey = this.playableKeys[game.rnd.integerInRange(0, this.playableKeys.length - 1)];
                                    house.text.setText(house.activeKey.string);
                                    house.life = house.maxLife - Math.floor(10*this.difficultyMultiplier);
                                    Config.sfxObjects.select.play();

                                    var aliveHouseCount = 0;
                                    this.houses.forEach(function(house){
                                        if(house.life > 0){
                                            aliveHouseCount++;
                                        }
                                    }, this);

                                    Config.score += 10 * aliveHouseCount;
                                    this.scoreText.setText(Config.score);
                                }
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

        //will a house get locked?
        if(game.rnd.integerInRange(0, 48000) > (48060 - Math.floor((this.timeSinceLastLock*this.difficultyMultiplier)))){
            Config.sfxObjects.locked.play();
            this.timeSinceLastLock = 0;


            var unlockedHouses = [];
            this.houses.forEach(function(house){
                if(!house.lockedBy && house.life != -1){
                    unlockedHouses.push(house);
                }
            }, this);

            if(unlockedHouses.length > 0){
                var house = unlockedHouses[game.rnd.integerInRange(0, unlockedHouses.length -1)];
                house.sprite.frame = 1;
                if(game.rnd.sign() > 0){
                    house.lockedBy = 'red';
                    house.text.setText('RED');
                    this.redSwitch.frame = 0; 
                } else {
                    house.lockedBy = 'blue';
                    house.text.setText('BLU');
                    this.blueSwitch.frame = 0;
                }
            }
        } else {
            this.timeSinceLastLock++;
        }

        this.houses.forEach(function(house) {
            if(house.life > 0){
                house.life--;

                if(house.life < house.maxLife/4){
                    if(house.life % 20 > 9){
                        house.sprite.alpha = 0.5;

                        if(house.life % 20 === 10){
                            Config.sfxObjects.blip1.play();
                        }
                    }else{
                        house.sprite.alpha = 1;

                        if(house.life % 20 === 0){
                            Config.sfxObjects.blip2.play();
                        }
                    }

                }else if(house.life < house.maxLife/2){

                    if(house.life % 40 > 19){
                        house.sprite.alpha = 0.5;

                        if(house.life % 40 === 20){
                            Config.sfxObjects.blip2.play();
                        }
                    }else{
                        house.sprite.alpha = 1;

                        if(house.life % 40 === 0){
                            Config.sfxObjects.blip1.play();
                        }
                    }
                }else{
                    house.sprite.alpha = 1;
                }
            } else {
                house.sprite.alpha = 0.25

                if(house.life === 0){
                    house.life--;
                    Config.sfxObjects.deadHouse.play();
                    house.text.setText('');

                    this.lifeCount--;

                    if(this.lifeCount >= 0){
                        this.lives[this.lifeCount].kill();

                        if(this.lifeCount === 0){
                            //gameover
                            game.state.start('GameoverState');
                        }
                    }
                }
            }
            
            house.timeSpriteFull.crop({x: 0, y: 0, width: house.timeSpriteEmpty.width, height: house.timeSpriteEmpty.height * (house.life / house.maxLife), right: house.timeSpriteEmpty.width, bottom: house.timeSpriteEmpty.height});

        }, this);

        this.timeUntilNextHouse--;
        if(this.timeUntilNextHouse < 0){
            this.timeUntilNextHouse = Math.floor(this.timeBetweenHouses*this.difficultyMultiplier/2);

            if(this.houses.length != 8 &&  this.houses.length < 16){
                this.houses[this.houses.length-1].powerlineSprite.alpha = 1;
            }

            this.createHouse();
        } else if (this.timeUntilNextHouse < this.timeBetweenHouses/12){
            if(this.houses.length != 8 &&  this.houses.length < 16){
                if(this.timeUntilNextHouse % 20 > 9 ){
                    this.houses[this.houses.length-1].powerlineSprite.alpha = 0.5;
                } else {
                    this.houses[this.houses.length-1].powerlineSprite.alpha = 1;
                }
            }
        } else if (this.timeUntilNextHouse < this.timeBetweenHouses/8){
            if(this.houses.length != 8 &&  this.houses.length < 16){
                if(this.timeUntilNextHouse % 40 > 19 ){
                    this.houses[this.houses.length-1].powerlineSprite.alpha = 0.5;
                } else {
                    this.houses[this.houses.length-1].powerlineSprite.alpha = 1;
                }
            }
        }

        if(game.input.keyboard.lastKey){
            if(game.input.keyboard.lastKey.isDown){
                if(game.input.keyboard.lastKey.repeats === 1){
                    if(game.input.keyboard.lastKey.keyCode === Phaser.Keyboard.ESC){
                        Config.sfxObjects.select.play();
                        if(Config.musicObjects.bgm.isPlaying){
                            Config.musicObjects.bgm.stop();
                            Config.muted = true;
                        } else {
                            Config.musicObjects.bgm.play();
                            Config.muted = false;
                        }
                    }
                }
            }
        }
    },

    render: function(){

    },

    createHouse: function() {
        if(this.houses.length < 16){
            var textStyle = {fill: "#21E026"}

            var row = Math.floor(this.houses.length / 8);

            var sprite = game.add.sprite(70 + 125*(this.houses.length%8), 50 + 115 * row, 'house', 0);
            var key = this.playableKeys[game.rnd.integerInRange(0, this.playableKeys.length - 1)];
            var text = game.add.text(sprite.centerX, sprite.centerY + 20, key.string, textStyle);
            text.font = 'Share Tech Mono';
            text.fontSize = 20;
            text.anchor.x = 0.5;

            var timeSpriteEmpty = game.add.sprite(sprite.x + 55, sprite.y + sprite.height, 'housebar', 0);
            timeSpriteEmpty.anchor.y = 1;
            var timeSpriteFull = game.add.sprite(sprite.x + 55, sprite.y + sprite.height, 'housebar', 1);
            timeSpriteFull.anchor.y = 1;

            var powerlineSprite = game.add.sprite(sprite.x + 75, sprite.y + 25, 'powerline');
            powerlineSprite.alpha = 0;

            if(this.houses[this.houses.length -1]){
                this.houses[this.houses.length-1].powerlineSprite.alpha = 1;
            }
            this.houses.push({
                sprite: sprite,
                activeKey: key,
                text: text,
                life: 1500,
                maxLife: 1500,
                timeSpriteFull: timeSpriteFull,
                timeSpriteEmpty: timeSpriteEmpty,
                powerlineSprite: powerlineSprite,
                lockedBy: null
            });



            Config.sfxObjects.newHouse.play();
        } else {
            var deadHouse = null;
            this.houses.forEach(function(house){
                if(house.life < 0){
                    deadHouse = house;
                }
            }, this);

            if(deadHouse){
                deadHouse.life = deadHouse.maxLife;
                deadHouse.key = this.playableKeys[game.rnd.integerInRange(0, this.playableKeys.length - 1)];
                deadHouse.text.setText(deadHouse.key.string);
                deadHouse.sprite.alpha = 1;
                deadHouse.lockedBy = null;
            }
        }
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