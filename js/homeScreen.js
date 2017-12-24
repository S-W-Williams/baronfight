game_state.home = function() {};
game_state.home.prototype = {


    create: function() {


        //TODO - Add Instructions to Home Screen.
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "BaronFight", style).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 70, "Click anywhere to continue!", style).anchor.setTo(.5,.5);

        game.input.onDown.add(advanceFromHome);

    }

};

function advanceFromHome() {

    game.state.remove('home');
    game.state.start('runeSelect', true, false, [8005, 8008, 8009]);
}

game.state.add('home', game_state.home);

game.state.start('home');
