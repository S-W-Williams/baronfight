game_state.nextBaron = function() {};
game_state.nextBaron.prototype = {



    create: function() {

        var bg = game.add.sprite(0, 0, 'baron');
        bg.width = GAME_WIDTH;
        bg.height = GAME_HEIGHT;


        var bigStyle = { font: "bold 64px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle", stroke: "#000000", strokeThickness: 6  };
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle", stroke: "#000000", strokeThickness: 6  };
        var smallStyle = { font: "bold 20px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle", stroke: "#000000", strokeThickness: 6  };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 160, "The next baron you face is:", style).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 100, currentBaronStats.name + "!", bigStyle).anchor.setTo(.5,.5);

        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 40 , "Traits:", style).anchor.setTo(.5,.5);

        for (var i = 0 ; i < currentBaronStats.traits.length ; i++) {
            game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 25 * i, currentBaronStats.traits[i], smallStyle).anchor.setTo(.5,.5);
        }

        game.add.text(GAME_WIDTH/2, GAME_HEIGHT - 50, "Click anywhere to continue!", style).anchor.setTo(.5,.5);

        game.input.onDown.add(advanceFromNextBaron);
    }

};

function advanceFromNextBaron() {
    game.state.start('runeSelect', true, false, getNextRuneOffer(level >= 6 ? playerStats.currentRunes[5] : playerStats.currentRunes[0], level));
}


game.state.add('nextBaron', game_state.nextBaron);
//game.state.start('lose', true, false);