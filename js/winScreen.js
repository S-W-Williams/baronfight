var selectableRunes = [];

game_state.win = function() {};
game_state.win.prototype = {



    create: function() {

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "You Win!", style).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 70, "Click to go home.", style).anchor.setTo(.5,.5);
        game.input.onDown.add(advanceFromWin);


        //Reset player to default stats.
        level = 1;
        playerStats = GAME_DEFAULT_STATS;
    }

};

function advanceFromWin() {
    game.state.start('home', true, false);
}


game.state.add('win', game_state.win);
//game.state.start('lose', true, false);