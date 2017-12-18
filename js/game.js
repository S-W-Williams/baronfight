const perkIDs = [[8005, 8008, 8009, 8014, 8017, 8021],
                [8105, 8112, 8120, 8124, 8126, 8128, 8134, 8135, 8136, 8138, 8139, 8143],
                [8210, 8214, 8224, 8226, 8229, 8230, 8232, 8233, 8234, 8236, 8237, 8242, 8243, 8299],
                [8304, 8306, 8313, 8316, 8321, 8326, 8339, 8345, 8347, 8351, 8359],
                [8410, 8429, 8430, 8435, 8437, 8439, 8444, 8446, 8451, 8453, 8463, 8465],
                [9101, 9103, 9104, 9105, 9111]];
const perkStyles = [8000, 8100, 8200, 8300, 8400];


const rows = 10;
const cols = 10;

var sprites = [];

// Initialize Phaser, and creates a 750x750px game
var game = new Phaser.Game(750, 750, Phaser.AUTO, 'phaser');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() {
        //Load individual rune images.
        for (var i=0 ; i < perkIDs.length; i++) {
            for (var j=0 ; j < perkIDs[i].length; j++) {
                game.load.image(''+perkIDs[i][j], 'resources/runes/perk/'+perkIDs[i][j]+'.png');
            }
        }

        //Load rune category images.
        for (var i=0 ; i < perkStyles.length; i++) {
            game.load.image(''+perkStyles[i], 'resources/runes/perkStyle/'+perkStyles[i]+'.png');
        }
    },

    create: function() {
        //Random stuff here for now...
        this.testRune = game.add.sprite(250, 300, '9101');
        this.testRune2 = game.add.sprite(400, 500, '8100');

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        var text = game.add.text(375, 375, "Loading...", style);
        text.anchor.setTo(0.5, 0.5);
    },
    
    update: function() {
        this.testRune.angle += 1;
        this.testRune2.angle -= 1;
    }
};

function onClickTest(text) {
    alert(text);
}

// Params: int spriteId
function mouseOver(sprite) {
    sprite.tint =  0x203470;
}

// Params: int spriteId
function mouseOut(sprite) {
    sprite.tint = 0xffffff;
}

game_state.game = function() {};
game_state.game.prototype = {

    create: function() {
        game.board =  [];

        for (var i = 0; i < rows; i++) {
            var row = [];
            for (var j = 0; j < cols; j++) {
                const runeCategory = Math.floor(Math.random() * perkIDs.length);
                const rune = Math.floor(Math.random() * perkIDs[runeCategory].length);

                var sprite = game.add.sprite(750 * i / rows, 750 * j / cols, '' + perkIDs[runeCategory][rune]);
                sprite.width = 75; sprite.height = 75;
                sprite.inputEnabled = true;

                sprite.events.onInputUp.add(() => onClickTest("Clicked Rune ID: " + sprite.key + " Row " + i + " Column " + j));
                sprite.events.onInputOver.add(mouseOver);
                sprite.events.onInputOut.add(mouseOut);
                //Save sprite to sprite dict
                row[j] = sprite;
            }
            sprites[i] = row;
        }
    }
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);
game.state.add('game', game_state.game);
game.state.start('main');

//Start Game after 5 seconds.
setTimeout(() => game.state.start('game'), 5000);