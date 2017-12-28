game_state.home = function() {};
game_state.home.prototype = {


    preload: function() {
        //Load individual rune images.
        for (var i=0 ; i < runesReforged.length; i++) {
            game.load.image(''+runesReforged[i].id, 'resources/runes/perkStyle/'+runesReforged[i].id+'.png');
            for (var j=0 ; j < runesReforged[i].slots.length; j++) {
                for (var k = 0 ; k < runesReforged[i].slots[j].runes.length; k++) {
                    game.load.image(''+runesReforged[i].slots[j].runes[k].id, 'resources/runes/perk/'+runesReforged[i].slots[j].runes[k].id+'.png');
                }
            }
        }

        //Load colored sphere images.
        for (var i = 0 ; i < GAME_COLORS.length ; i++) {
            game.load.image(GAME_COLORS[i], 'resources/balls/'+GAME_COLORS[i]+'.png');
        }

        game.load.image("poro", "resources/misc/poro.png");

    },

    create: function() {

        resetRunePanel();

        //TODO - Add Instructions to Home Screen.
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "BaronFight", style).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 70, "Click anywhere to continue!", style).anchor.setTo(.5,.5);

        game.input.onDown.add(advanceFromHome);

    }

};

function advanceFromHome() {
    game.state.start('runeSelect', true, false);
}

game.state.add('home', game_state.home);

game.state.start('home');
