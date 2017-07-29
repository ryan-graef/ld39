Config = {
    name: "ReplaceWithGameName",
    version: "0.0.0",
    size: {width: 1280, height: 720},
    sprites: [
        //{key: "SpriteKey", imagePath: "path/to/image"}
        {key: "phaser", imagePath: "res/img/wrapper/phaser-logo-small.png"},
        {key: "pixel-guy", imagePath: "res/img/pixel-guy.png"},
        {key: "terminal", imagePath: "res/img/terminal.png"},
        {key: "key", imagePath: "res/img/key.png"},
        {key: "house", imagePath: "res/img/house.png"},
        {key: "housenobox", imagePath: "res/img/housenobox.png"},
        {key: "powerline", imagePath: "res/img/powerline.png"}
    ],
    spritesheets: [
        {key: "housebar", imagePath: "res/img/housebar.png", frameWidth: 14, frameHeight: 89}
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
        {key: "blip2", filePath: "res/sfx/blip2.wav"}
    ],
    //music loops by default
    music: [
        //{key: "MusicKey", filePath: "path/to/audiofile"}
    ],
    //will be populated by all the music objects after load
    musicObjects: { },
    //will be populated by all the sfx objects after load
    sfxObjects: { },

}