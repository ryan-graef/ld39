TutorialState = function(){ }

TutorialState.prototype = {
    preload: function(){
        console.log('preload tutorial state');
        this.background = game.add.image(0, 0, 'terminalkeys');

        this.page1 = game.add.sprite(0, 0, 'page1');
        this.page2 = game.add.sprite(0, 0, 'page2');
        this.page2.alpha = 0;
        this.page3 = game.add.sprite(0, 0, 'page3');
        this.page3.alpha = 0;

    },

    create: function(){
        console.log('create tutorial state');
    },

    render: function(){

    },

    update: function(){
        if(game.input.keyboard.lastKey){
            if(game.input.keyboard.lastKey.isDown){
                if(game.input.keyboard.lastKey.repeats === 1){
                    Config.sfxObjects.select.play();
                    if(this.page2.alpha === 0){
                        this.page2.alpha = 1;
                    }else if(this.page3.alpha === 0) {
                        this.page3.alpha = 1;
                    }else{
                        game.state.start('TitleState');
                    }
                }        
            }
        }
    },

    render: function(){

    }
}