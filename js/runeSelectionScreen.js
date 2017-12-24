const perkIDs = [[8005, 8008, 8009, 8014, 8017, 8021],
    [8105, 8112, 8120, 8124, 8126, 8128, 8134, 8135, 8136, 8138, 8139, 8143],
    [8210, 8214, 8224, 8226, 8229, 8230, 8232, 8233, 8234, 8236, 8237, 8242, 8243, 8299],
    [8304, 8306, 8313, 8316, 8321, 8326, 8339, 8345, 8347, 8351, 8359],
    [8410, 8429, 8430, 8435, 8437, 8439, 8444, 8446, 8451, 8453, 8463, 8465],
    [9101, 9103, 9104, 9105, 9111]];
const perkStyles = [8000, 8100, 8200, 8300, 8400];

const GAME_RUNE_WIDTH = 100;
const GAME_RUNE_HEIGHT = 100;

game_state.runeSelect = function() {};

var selectableRunes = [];

game_state.runeSelect.prototype = {


    init(runes) {
        selectableRunes = runes;
    },

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


        //TODO - Add Instructions to Home Screen.
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "Select a Rune!", style).anchor.setTo(.5,.5);


        for (var i = 0 ; i < selectableRunes.length ; i++) {
            var sprite = game.add.sprite(35 + GAME_WIDTH * i / selectableRunes.length, GAME_HEIGHT/2 + 70, '' + selectableRunes[i]);

            sprite.runeID = selectableRunes[i];

            sprite.anchor.setTo(0, 0.5);
            sprite.width = GAME_RUNE_WIDTH;
            sprite.height = GAME_RUNE_HEIGHT;
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(runeSelected);
        }

    }

};

function runeSelected(rune) {

    console.log("Selected Rune: " + rune.runeID);

    game.state.remove('runeSelect');
    game.state.start('game', true, false, 7)
}

game.state.add('runeSelect', game_state.runeSelect);
//game.state.start('runeSelect', true, false, [8005, 8008, 8009]);