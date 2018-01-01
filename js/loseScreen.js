var selectableRunes = [];

game_state.lose = function() {};
game_state.lose.prototype = {



    create: function() {

        var smallStyle = { font: "bold 25px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 140, "You Lose!", style).anchor.setTo(.5,.5);
        var text = game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 , "Baron winds up and hits you with one final blow! You HP reaches zero! Luckily, on the rift, champions are able to respawn after a few seconds. Maybe next time, you can take down this Baron Nashor and win the game.", smallStyle);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 140, "Click to go home.", style).anchor.setTo(.5,.5);

        text.anchor.setTo(.5,.5);
        text.wordWrap = true;
        text.wordWrapWidth = game.world.width;
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