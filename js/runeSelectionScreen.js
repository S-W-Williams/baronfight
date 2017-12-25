var selectableRunes = [];

game_state.runeSelect = function() {};
game_state.runeSelect.prototype = {


    init(runes) {
        selectableRunes = runes;
    },


    create: function() {

        var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, "Select your Rune Tree!", style).anchor.setTo(.5,.5);

        var subtitleStyle = {font: "bold 16px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle"  }


        for (var i = 0 ; i < selectableRunes.length ; i++) {
            var sprite = game.add.sprite(GAME_WIDTH * (2*i + 1) / selectableRunes.length / 2, GAME_HEIGHT/2 + 70, '' + selectableRunes[i]);
            var text = game.add.text(GAME_WIDTH * (2*i + 1) / selectableRunes.length / 2, GAME_HEIGHT/2 + 130, "Precision", subtitleStyle);

            sprite.associatedText = text;

            sprite.runeID = selectableRunes[i];
            text.runeID = selectableRunes[i];

            text.anchor.setTo(0.5, 0.5);
            sprite.anchor.setTo(0.5, 0.5);
            sprite.width = GAME_RUNE_WIDTH;
            sprite.height = GAME_RUNE_HEIGHT;
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(runeSelected);


        }

    },

    update: function() {
        for (var i = 0 ; i < game.world.children.length ; i++) {
            var sprite = game.world.children[i];

            if (Math.abs(sprite.width - sprite.transitionWidth) > 1) {
                if (sprite.width < sprite.transitionWidth) {
                    sprite.width++;
                } else if (sprite.width > sprite.transitionWidth) {
                    sprite.width--;
                }
            }

            if (Math.abs(sprite.height - sprite.transitionHeight) > 1) {
                if (sprite.height < sprite.transitionHeight) {
                    sprite.height++;
                } else if (sprite.height > sprite.transitionHeight) {
                    sprite.height--;
                }
            }

            if (Math.abs(sprite.x - sprite.transitionX) > 5) {
                if (sprite.x < sprite.transitionX) {
                    sprite.x += 5;
                } else if (sprite.x > sprite.transitionX) {
                    sprite.x -= 5;
                }
            }

            if (Math.abs(sprite.y - sprite.transitionY) > 1) {
                if (sprite.y < sprite.transitionY) {
                    sprite.y++;
                } else if (sprite.y > sprite.transitionY) {
                    sprite.y--;
                }
            }

            if (Math.abs(sprite.alpha - sprite.transitionAlpha) > 0.01) {
                if (sprite.alpha < sprite.transitionAlpha) {
                    sprite.alpha += 1 / 128;
                } else if (sprite.alpha > sprite.transitionAlpha) {
                    sprite.alpha -= 1 / 128;
                }
            }
        }
    }

};

function runeSelected(rune) {

    console.log("Selected Rune: " + rune.runeID);

    ///TODO: DISPLAY INFORMATION ABOUT RUNE AS WELL.

    for (var i = 0 ; i < game.world.children.length ; i++) {
        if (game.world.children[i].runeID !== rune.runeID) {
            game.world.children[i].transitionAlpha = 0;
        }
        game.world.children[i].inputEnabled = false;
    }

    rune.transitionWidth = 200;
    rune.transitionHeight = 200;
    rune.transitionX = 100;
    rune.transitionY = game.world.height / 2;

    rune.associatedText.transitionHeight = rune.associatedText.height / rune.associatedText.width * 150;
    rune.associatedText.transitionWidth = 150;
    rune.associatedText.transitionX = 100;
    rune.associatedText.transitionY = game.world.height / 2 + 150;

    var style = { font: "bold 32px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };

    var confirm = game.add.text(game.world.width*3/4,game.world.height/2 - 25,"Confirm", style);
    confirm.anchor.setTo(0.5, 0);
    confirm.alpha = 0;
    confirm.transitionAlpha = 1;
    confirm.inputEnabled = true;
    confirm.events.onInputUp.add(() => confirmSelection(rune));

    var cancel = game.add.text(game.world.width*3/4,game.world.height/2 + 25,"Cancel", style);
    cancel.anchor.setTo(0.5, 0);
    cancel.alpha = 0;
    cancel.transitionAlpha = 1;
    cancel.inputEnabled = true;
    cancel.events.onInputUp.add(cancelSelection);

}

function confirmSelection(rune) {


    playerStats.currentRunes = playerStats.currentRunes.concat(rune.runeID);
    game.state.start('game', true, false, GAME_NUM_COLORS(level));

}

function cancelSelection() {

    game.state.start('runeSelect', true, false, selectableRunes);

}

game.state.add('runeSelect', game_state.runeSelect);
//game.state.start('runeSelect', true, false, [8005, 8008, 8009]);