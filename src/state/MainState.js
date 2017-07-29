MainState = function(){ }

MainState.prototype = {
    preload: function(){
        console.log('preload main state');
    },

    create: function(){
        console.log('create main state');

        //remove this line if not using lighting effects
        game.plugins.add(Phaser.Plugin.PhaserIlluminated);

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'pixel-guy');
        this.sprite.anchor.setTo(0.5);
        this.sprite.scale.setTo(5);
    },

    update: function(){

    },

    render: function(){

    }
}