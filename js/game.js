const perkIDs = [[8005, 8008, 8009, 8014, 8017, 8021],
                [8105, 8112, 8120, 8124, 8126, 8128, 8134, 8135, 8136, 8138, 8139, 8143],
                [8210, 8214, 8224, 8226, 8229, 8230, 8232, 8233, 8234, 8236, 8237, 8242, 8243, 8299],
                [8304, 8306, 8313, 8316, 8321, 8326, 8339, 8345, 8347, 8351, 8359],
                [8410, 8429, 8430, 8435, 8437, 8439, 8444, 8446, 8451, 8453, 8463, 8465],
                [9101, 9103, 9104, 9105, 9111]];
const perkStyles = [8000, 8100, 8200, 8300, 8400];


const GAME_NUM_ROWS = 6;
const GAME_NUM_COLS = 6;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

const GAME_SPRITE_WIDTH = GAME_WIDTH / GAME_NUM_COLS;
const GAME_SPRITE_HEIGHT = GAME_HEIGHT / GAME_NUM_ROWS;

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'phaser');
var game_state = {};

var SELECTED_RUNE_A = null;
var SELECTED_RUNE_B = null;

var HEALTH_BAR = $('.health-bar');
var BAR = HEALTH_BAR.find('.bar');
var HIT = HEALTH_BAR.find('.hit');

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

        game.load.image("attack", "resources/images/attack.png");
    },

    create: function() {
        //Random stuff here for now...
        this.testRune = game.add.sprite(100, 200, '9101');
        this.testRune2 = game.add.sprite(300, 400, '8100');

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        var text = game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2, "Loading...", style);
        text.anchor.setTo(0.5, 0.5);

        game.stage.backgroundColor = "#DDD";
    },
    
    update: function() {
        this.testRune.angle += 1;
        this.testRune2.angle -= 1;
    }
};


game_state.game = function() {};
game_state.game.prototype = {create: create};

function create() {
    game.board =  [];

    //Untint all when mouse leaves game board.
    document.body.onmouseover = mouseOut;

    for (var i = 0; i < GAME_NUM_ROWS; i++) {
        var row = [];
        for (var j = 0; j < GAME_NUM_COLS; j++) {
            const rowPosition = i;
            const colPosition = j;
            if (attackOrRune()) {
                const runeCategory = Math.floor(Math.random() * perkIDs.length);
                const rune = Math.floor(Math.random() * perkIDs[runeCategory].length);
                var sprite = game.add.sprite(GAME_WIDTH * rowPosition / GAME_NUM_COLS, GAME_HEIGHT * colPosition / GAME_NUM_ROWS, '' + perkIDs[runeCategory][rune]);
                sprite.isRune = true;

            } else {
                var sprite = game.add.sprite(GAME_WIDTH * rowPosition / GAME_NUM_COLS, GAME_HEIGHT * colPosition / GAME_NUM_ROWS, "attack");
                sprite.isRune = false;
            }
            //const key = sprite.key;
            sprite.row = rowPosition;
            sprite.col = colPosition;
            sprite.width = GAME_SPRITE_WIDTH; sprite.height = GAME_SPRITE_HEIGHT;
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(selectRune, this);
            sprite.events.onInputOver.add(mouseOver);
            sprite.events.onInputOut.add(mouseOut);
            row[j] = sprite;

        }
        //sprites[i] = row;
    }
    game.turn = 0;
    //game.input.addMoveCallback(makeMove, this);
}

function selectRune(sprite) {
    if (SELECTED_RUNE_A) {
        SELECTED_RUNE_B = sprite;
        makeMove();
        SELECTED_RUNE_A.tint = 0xffffff;
        SELECTED_RUNE_A = null;
        SELECTED_RUNE_B = null;
    } else {
        SELECTED_RUNE_A = sprite;
        SELECTED_RUNE_A.tint = 0x00FF00;
    }

}

function makeMove(pointer, x, y) {
    if (!SELECTED_RUNE_A.isRune && !SELECTED_RUNE_B.isRune) {
        //damageCharacter(100, true);
        damageCharacter(100, false);
    }
}


///Player is true if player takes damage;
///Player is false if CPU takes damage.
function damageCharacter(damage, player) {

    var playerNumber = (player ? 0 : 1);

    var total = HEALTH_BAR[playerNumber].dataset.total;
    var value = HEALTH_BAR[playerNumber].dataset.value;
    var newValue = value - damage;

    if (newValue < 0) {
        newValue = 0;
    }

    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";

    // show hit bar and set the width
    HIT[playerNumber].style.width = hitWidth;
    HEALTH_BAR[playerNumber].dataset.value = newValue;

    setTimeout(function(){
        HIT[playerNumber].style.width = "0";
        BAR[playerNumber].style.width = barWidth + "%";
    }, 500);
}

function cpuMove() {

}


function mouseOver(sprite) {

    untintAll();

    //Tint the selected sprite.
    sprite.tint =  0x203470;
    var runeInfoBox = $('#runeInfo');
    runeInfoBox.show();
    runeInfoBox.text("Row " + sprite.row + " Column " + sprite.col);
}


function mouseOut(sprite) {
    sprite.tint = 0xffffff;
}

// Params: int spriteId
function mouseOut() {

    untintAll();
    var runeInfoBox = $('#runeInfo');
    runeInfoBox.hide();
}

function untintAll() {
    //Untint all other sprites.
    var sprites = game.world.children;

    for (var i = 0; i < sprites.length; i++) {
        if (sprites[i].tint != 0x00FF00)
            sprites[i].tint = 0xffffff;
    }
}

function attackOrRune() {
    return (Math.random() < 0.5 ? true : false);
}

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);
game.state.add('game', game_state.game);
game.state.start('main');

//Start Game after 5 seconds.
setTimeout(() => game.state.start('game'), 5000);