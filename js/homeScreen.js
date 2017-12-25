game_state.home = function() {};
game_state.home.prototype = {


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

        //Load colored sphere images.
        for (var i = 0 ; i < GAME_COLORS.length ; i++) {
            game.load.image(GAME_COLORS[i], 'resources/balls/'+GAME_COLORS[i]+'.png');
        }

    },

    create: function() {


        //TODO - Add Instructions to Home Screen.
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "BaronFight", style).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 70, "Click anywhere to continue!", style).anchor.setTo(.5,.5);

        game.input.onDown.add(advanceFromHome);

    }

};

function advanceFromHome() {
    game.state.start('runeSelect', true, false, [8000, 8100, 8200, 8300, 8400]);
}

game.state.add('home', game_state.home);

game.state.start('home');
