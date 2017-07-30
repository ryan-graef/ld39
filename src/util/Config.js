Config = {
    name: "ReplaceWithGameName",
    version: "0.0.0",
    size: {width: 1280, height: 720},
    sprites: [
        //{key: "SpriteKey", imagePath: "path/to/image"}
        {key: "phaser", imagePath: "res/img/wrapper/phaser-logo-small.png"},
        {key: "pixel-guy", imagePath: "res/img/pixel-guy.png"},
        {key: "terminal", imagePath: "res/img/terminal.png"},
        {key: "housenobox", imagePath: "res/img/housenobox.png"},
        {key: "powerline", imagePath: "res/img/powerline.png"}
    ],
    spritesheets: [
        {key: "housebar", imagePath: "res/img/housebar.png", frameWidth: 14, frameHeight: 89},
        {key: "switchred", imagePath: "res/img/switchred.png", frameWidth: 63, frameHeight: 76},
        {key: "switchblue", imagePath: "res/img/switchblue.png", frameWidth: 63, frameHeight: 76},
        {key: "house", imagePath: "res/img/house.png", frameWidth: 46, frameHeight: 90},
        {key: "key", imagePath: "res/img/key.png", frameWidth: 73, frameHeight: 82}
    ],
    animSprites: [
        //{key: "SpriteKey", imagePath: "path/to/image", jsonPath: "path/to/json"}
    ],
    //tilemaps are assumed to be Tiled JSON.
    tileMaps: [
        //{key: "MapKey", jsonPath: "path/to/json"}
    ],
    fonts: [
        //{key: "FontKey", imagePath: "path/to/image", xmlPath: "path/to/XML"}
    ],
    sfx: [
        //{key: "SfxKey", filePath: "path/to/audiofile"}
        {key: "select", filePath: "res/sfx/select.wav"},
        {key: "newHouse", filePath: "res/sfx/newhouse.wav"},
        {key: "deadHouse", filePath: "res/sfx/deadhouse.wav"},
        {key: "blip1", filePath: "res/sfx/blip1.wav"},
        {key: "blip2", filePath: "res/sfx/blip2.wav"},
        {key: "locked", filePath: "res/sfx/locked.wav"},
        {key: "break", filePath: "res/sfx/break.wav"},
        {key: "brokenkey", filePath: "res/sfx/brokenkey.wav"},
        {key: "switch", filePath: "res/sfx/switch.wav"}
    ],
    //music loops by default
    music: [
        //{key: "MusicKey", filePath: "path/to/audiofile"}
        {key: "bgm", filePath: "res/sfx/bgm.ogg"}
    ],
    //will be populated by all the music objects after load
    musicObjects: { },
    //will be populated by all the sfx objects after load
    sfxObjects: { },

}