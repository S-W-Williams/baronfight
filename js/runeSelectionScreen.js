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
        game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 70, selectableRunes[0].slots ? "Select your Rune Tree!" : "Select a rune for your tree!", style).anchor.setTo(.5,.5);

        var subtitleStyle = {font: "bold 16px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle"  };


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

    //console.log("Selected Rune: " + rune.rune.id);

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


    //console.log(rune.rune);
    var runeInfo = game.add.text(game.world.width * 3/4 , 50, runeDescriptions[rune.rune.id].baronfight, style);
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


    //console.log("Selection: " + rune.rune.id);


    if (!rune.rune.slots) {
        //This is a rune and not a branch.
        addRuneToPanel(rune.rune);
    } else {
        addTreeToPanel(rune.rune);
    }

    //Ingenous Hunter and Cosmic Insight - Reduce cooldowns of ALL abilities by 30%.
    //TODO - When a player earns new active effects, those cooldowns must be reduced too.
    if (rune.rune.id === 8134 || rune.rune.id === 8347) {
        var abilities = Object.values(playerStats.abilities);
        for (var i = 0 ; i < abilities.length ; i++) {
            abilities[i].cooldown *= 0.7;
        }
    }

    //Celerity - Increase evasion rate by 10%. Gain 10 AD for every 10% Evasion Rate.
    if (rune.rune.id === 8234) {
        playerStats.moveSpeed += 1000;
    }

    //The Ultimate Hat - Your ultimate ability's (R Ability) cooldown is reduced by 30%.
    if (rune.rune.id === 8243) {
        playerStats.abilities["R"].cooldown *= 0.7;
    }

    //Future's Market - Start each round with 1 additional red and blue potion.
    if (rune.rune.id === 8321) {

        playerStats.maxPotions = playerStats.maxPotions + 1;

    }

    //Celestial Body - Increase HP by 300 but deal 10% less damage for the first 30 seconds.
    if (rune.rune.id === 8339) {
        playerStats.maxHP += 300;
        playerStats.health += 300;
    }

    //Iron Skin - Permanently gain 50 armor.
    if (rune.rune.id === 8430) {
        playerStats.armor += 50;
    }

    //Mirror Shell - Permanently gain 50 magic resistance.
    if (rune.rune.id === 8435) {
        playerStats.magicResist += 50;
    }

    //Unsealed Spellbook - Reduce all cooldowns by 15%. Clearing 6 or more pieces will permanently increase ability damage by 10%.
    if (rune.rune.id === 8326) {
        var abilities = Object.values(playerStats.abilities);
        for (var i = 0 ; i < abilities.length ; i++) {
            abilities[i].cooldown *= 0.85;
        }
    }

    //Predator - Gain an active (3): Dash - Channel for 3 seconds then triple clearing speed for 20 seconds.
    if (rune.rune.id === 8124) {
        playerStats.abilities["3"] = {
            cost: 0,
            cooldown: 20
        };
    }

    //Perfect Timing - Gain an active (4): Stasis - You cannot make any actions but you cannot be damaged for 10 seconds. Cooldown: 45 seconds.
    if (rune.rune.id === 8313) {
        playerStats.abilities["4"] = {
            cost: 0,
            cooldown: 55
        };
    }

    //Minion Dematerializer - Start each round witih 10 dematerializers. Activate them (5) to destroy any orb on your field.
    if (rune.rune.id === 8316) {
        playerStats.abilities["5"] = {
            cost: 0,
            cooldown: 0
        };
    }

    if (!rune.rune.slots) {
        //This is a rune and not a branch.
        showRuneInfoModal(rune.rune);
    } else {
        postRuneInfoModal();
    }

}

function postRuneInfoModal() {
    game.state.start('game', true, false, GAME_NUM_COLORS(level));

}

function cancelSelection() {

    game.state.start('runeSelect', true, false, selectableRunes);

}

game.state.add('runeSelect', game_state.runeSelect);
//game.state.start('runeSelect', true, false, [8005, 8008, 8009]);