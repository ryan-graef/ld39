SplashState = function(){ }

SplashState.prototype = {
    logoImage: null,
    playedBlink: false,
    logoEye: null,
    logoText: null,
    frameCounter: 0,

    preload: function(){
        console.log('preload splash state');
        this.load.atlasJSONHash('logoImage', 'res/img/wrapper/manfredi.png', 'res/img/wrapper/manfredi.json');
        this.load.image('logoText', 'res/img/wrapper/logo.png');
        this.load.image('loadBar', 'res/img/wrapper/loadbar.png');
    },

    create: function(){
        console.log('create splash state');

        this.logoImage = this.add.sprite(this.world.centerX, this.world.centerY - 80, 'logoImage');
        this.logoEye = this.add.sprite(this.world.centerX, this.world.centerY - 80, 'logoImage');
        this.logoEye.animations.add('eye', [6, 7, 8, 9, 10, 11, 12, 13, 14], 9, false);
        this.logoImage.animations.add('blink', [0, 1, 2, 3, 4, 5], 6, false);
        this.logoEye.height = 256;
        this.logoEye.width = 256;
        this.logoImage.height = 256;
        this.logoImage.width = 256;
        this.logoEye.anchor.setTo(0.5);
        this.logoImage.anchor.setTo(0.5);
        this.logoEye.alpha = 0;
        this.logoImage.alpha = 0;

        this.logoText = this.add.sprite(this.world.centerX, this.world.centerY + 80, 'logoText');
        this.logoText.anchor.setTo(0.5);
        this.logoText.alpha = 0;
    },

    update: function(){
        this.frameCounter++;

        if(this.frameCounter > 120 && this.frameCounter < 480){
            if(this.logoImage.alpha < 1){
                this.logoImage.alpha += 0.005;
            }else{
                if(!this.playedBlink){
                    this.logoImage.animations.play('blink');
                    this.playedBlink = true;
                }
            }

            if(this.logoImage.alpha > 0.5 && this.logoText.alpha < 1){
                this.logoText.alpha += 0.005;
            }
        }

        if(this.frameCounter > 480){

            if(this.logoImage.alpha > 0){
                this.logoImage.alpha -= 0.01;

                if(this.logoImage.alpha > 0.5){
                    this.logoEye.alpha = 1;
                    this.logoEye.animations.play('eye');
                }
            }else if(this.frameCounter > 600){
                this.logoEye.alpha -= 0.01;
            }

            if(this.logoText.alpha > 0){
                this.logoText.alpha -= 0.01;
            }
        }

        if(this.frameCounter > 720 || game.input.keyboard.lastKey){
            console.log('kicking off load state');
            this.state.start('LoadState');
        }  
    },

    render: function(){

    }
}