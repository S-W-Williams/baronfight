var selectableRunes = [];

game_state.levelUp = function() {};
game_state.levelUp.prototype = {



    create: function() {

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };

        var graphics = game.add.graphics();
        graphics.beginFill(0, 0.8);
        graphics.drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        graphics.endFill();


        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "Level Up!", style).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 70, "Click anywhere to continue.", style).anchor.setTo(.5,.5);
        game.input.onDown.add(nextRuneSelect);


        //MAKE MODIFICATIONS TO PLAYER STATS, BOSS STATS, ETC. HERE.
        level++;

    }

};

function nextRuneSelect() {

    if (level > GAME_LEVEL_CAP) {
        game.state.start("win", true, false);
    } else {
        game.state.start('runeSelect', true, false, getNextRuneOffer(level >= 6 ? playerStats.currentRunes[5] : playerStats.currentRunes[0], level));
    }
}


game.state.add('levelUp', game_state.levelUp);
//game.state.start('lose', true, false);