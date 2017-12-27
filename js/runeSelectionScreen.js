var selectableRunes = [];

game_state.runeSelect = function() {};
game_state.runeSelect.prototype = {


    init(runes) {

        if (runes == null) {
            selectableRunes = runesReforged;
        } else {
            selectableRunes = runes;
        }

    },


    create: function() {

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "Select your Rune Tree!", style).anchor.setTo(.5,.5);

        var subtitleStyle = {font: "bold 16px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle"  }


        for (var i = 0 ; i < selectableRunes.length ; i++) {
            var sprite = game.add.sprite(GAME_WIDTH * (2*i + 1) / selectableRunes.length / 2, GAME_HEIGHT/2 + 70, '' + selectableRunes[i].id);
            var text = game.add.text(GAME_WIDTH * (2*i + 1) / selectableRunes.length / 2, GAME_HEIGHT/2 + 130, selectableRunes[i].name, subtitleStyle);

            sprite.associatedText = text;

            text.wordWrap = true;
            text.wordWrapWidth = GAME_WIDTH / selectableRunes.length;

            sprite.rune = selectableRunes[i];
            text.rune = selectableRunes[i];

            text.anchor.setTo(0.5, 0.5);
            sprite.anchor.setTo(0.5, 0.5);
            sprite.width = GAME_RUNE_WIDTH;
            sprite.height = GAME_RUNE_HEIGHT;
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(runeSelected);


        }

    }

};

function runeSelected(rune) {

    console.log("Selected Rune: " + rune.rune.id);

    ///TODO: DISPLAY INFORMATION ABOUT RUNE AS WELL.

    for (var i = 0 ; i < game.world.children.length ; i++) {
        if (!game.world.children[i].rune || game.world.children[i].rune.id !== rune.rune.id) {
            game.add.tween(game.world.children[i]).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
        }
        game.world.children[i].inputEnabled = false;
    }

    game.add.tween(rune).to({
        width: 200,
        height: 200,
        x: 130,
        y: game.world.height/2 - 26
    }, 1000, Phaser.Easing.Linear.None, true);

    game.add.tween(rune.associatedText).to({
        fontSize: 30,
        x: 130,
        y: game.world.height / 2 + 124
    }, 1000, Phaser.Easing.Linear.None, true);

    var style = { font: "bold 18px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };


    console.log(rune.rune);
    var runeInfo = game.add.text(game.world.width * 3/4 , 50, runeDescriptions[rune.rune.id] ? runeDescriptions[rune.rune.id] : rune.rune.shortDesc, style);
    runeInfo.anchor.setTo(0.5, 0);
    runeInfo.alpha = 0;
    game.add.tween(runeInfo).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true);
    runeInfo.wordWrap = true;
    runeInfo.wordWrapWidth = game.world.width / 2 - 50;

    var buttonStyle = { font: "bold 26px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };

    var confirm = game.add.text(game.world.width*3/4 - 20,game.world.height - 120,"Confirm", buttonStyle);
    confirm.anchor.setTo(0.5, 0);
    confirm.alpha = 0;
    game.add.tween(confirm).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true);
    confirm.inputEnabled = true;
    confirm.events.onInputUp.add(() => confirmSelection(rune));

    var cancel = game.add.text(game.world.width*3/4 - 20,game.world.height - 90,"Cancel", buttonStyle);
    cancel.anchor.setTo(0.5, 0);
    cancel.alpha = 0;
    game.add.tween(cancel).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true);
    cancel.inputEnabled = true;
    cancel.events.onInputUp.add(cancelSelection);

}

function confirmSelection(rune) {

    playerStats.currentRunes = playerStats.currentRunes.concat(rune.rune);
    game.state.start('game', true, false, GAME_NUM_COLORS(level));

}

function cancelSelection() {

    game.state.start('runeSelect', true, false, selectableRunes);

}

game.state.add('runeSelect', game_state.runeSelect);
//game.state.start('runeSelect', true, false, [8005, 8008, 8009]);