var selectableRunes = [];

game_state.lose = function() {};
game_state.lose.prototype = {



    create: function() {

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "You Lose!", style).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 70, "Click to go home.", style).anchor.setTo(.5,.5);
        game.input.onDown.add(advanceFromLose);


        //Reset player to default stats.
        level = 1;
        playerStats = Object.assign({}, GAME_DEFAULT_STATS);
    }

};

function advanceFromLose() {
    game.state.start('home', true, false);
}


game.state.add('lose', game_state.lose);
//game.state.start('lose', true, false);