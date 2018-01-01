var selectableRunes = [];

game_state.win = function() {};
game_state.win.prototype = {



    create: function() {

        var smallStyle = { font: "bold 25px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 140, "You Win!", style).anchor.setTo(.5,.5);
        var text = game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 , "Baron winds up to hit you with one final blow. But you strike back first and he is slain. You've saved Veigar from his foolish antics for now, but it's only a matter of time before he starts stirring up some more trouble!", smallStyle);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 140, "Click to go home.", style).anchor.setTo(.5,.5);
        game.input.onDown.add(advanceFromWin);

        text.anchor.setTo(.5,.5);
        text.wordWrap = true;
        text.wordWrapWidth = game.world.width;

        //Reset player to default stats.
        level = 1;
        playerStats = Object.assign({}, GAME_DEFAULT_STATS);
    }

};

function advanceFromWin() {
    game.state.start('home', true, false);
}


game.state.add('win', game_state.win);
//game.state.start('lose', true, false);