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
        game.load.image("redWard", "resources/misc/redWard.gif");
        game.load.image("blueWard", "resources/misc/blueWard.gif");
        game.load.image("yellowWard", "resources/misc/yellowWard.gif");
        game.load.image("zombieWard", "resources/misc/zombieWard.png");
        game.load.image("baron", "resources/misc/baron.png");
        game.load.image("runes", "resources/misc/rune.png");
        game.load.image("fighting", "resources/misc/bg.png");
        game.load.image("sr", "resources/misc/sr.png");

    },

    create: function() {

        resetRunePanel();

        currentBaronStats = GAME_BOSS_STATS(level);

        var bg = game.add.sprite(0, 0, 'baron');
        bg.width = GAME_WIDTH;
        bg.height = GAME_HEIGHT;

        //TODO - Add Instructions to Home Screen.
        var bigStyle = { font: "bold 64px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle", stroke: "#000000", strokeThickness: 6 };
        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle", stroke: "#000000", strokeThickness: 6  };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "Bust-A-Baron", bigStyle).anchor.setTo(.5,.5);
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 + 70, "Click anywhere to continue!", style).anchor.setTo(.5,.5);

        game.input.onDown.add(advanceFromHome);

    }

};

function advanceFromHome() {
    game.state.start('nextBaron', true, false);
}

game.state.add('home', game_state.home);

game.state.start('home');
