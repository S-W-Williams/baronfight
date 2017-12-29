var board = [];

var isDragging = false;
var canMakeMove = true;
var currentSprite = null;
var currentDragColor = null;
var selectedSprites = [];
var numColors = GAME_COLORS.length;
var level = 1;
var cpuAttackTimer = 0;
var wToggle = false;
var wManaDecrementTime;

var stacks = 0;
var lastStackAppliedTime;

var runeRelatedData = {};

//Will be augmented by runes, spells, items, etc. as game progresses.
var playerStats = Object.assign({}, GAME_DEFAULT_STATS);

var bossStats = Object.assign({}, GAME_BOSS_STATS(level));

game_state.game = function() {};
game_state.game.prototype = {

    init: function(num) {

        numColors = num;

    },

    create: function() {
        //Untint all when mouse leaves game board.
        document.body.onmouseover = this.untintAll;

        resetBoard();

        addAbilityListeners();

        resetCooldowns();

        resetResources();

        bossStats = GAME_BOSS_STATS(level);

        var abilities = Object.values(playerStats.abilities);

        for (var i = 0 ; i < abilities.length ; i++) {
            abilities[i].lastCastTime = -Infinity;
        }

        wToggle = false;
        stacks = 0;

        runeRelatedData = {};

        //Transcendence - After 30 seconds, gain 50% CDR on ALL abilities.
        if (playerHasRune(8210)) {
            runeRelatedData["8210"] = {
                timeoutID: setTimeout(function() {
                    runeRelatedData["8210"].activated = true;
                    var abilities = Object.values(playerStats.abilities);
                    for (var i = 0 ; i < abilities.length ; i++) {
                        abilities[i].cooldown /= 2;
                    }
                }, 30000)
            };

            updateRuneCooldown(8210, 30000);
        }

        //Magical Footwear - After 30 seconds, gain 30% Evasion Rate
        if (playerHasRune(8304)) {
            runeRelatedData["8304"] = {
                timeoutID: setTimeout(function() {
                    runeRelatedData["8304"].activated = true;
                    playerStats.moveSpeed += 3000;
                }, 30000)
            };

            updateRuneCooldown(8304, 30000);
        }

        //Celestial Body - Increase HP by 300 but deal 10% less damage for the first 30 seconds.
        if (playerHasRune(8339)) {
            runeRelatedData["8339"] = {
                timeoutID: setTimeout(function() {
                    runeRelatedData["8339"].activated = false;
                }, 30000),
                activated: true
            };

            updateRuneCooldown(8339, 30000);
        }

        //Conditioning - After 30 seconds, gain 80 armor and magic resistance
        if (playerHasRune(8429)) {
            runeRelatedData["8429"] = {
                timeoutID: setTimeout(function() {
                    runeRelatedData["8429"].activated = true;
                    playerStats.armor += 80;
                    playerStats.magicResist += 80;
                }, 30000)
            };

            updateRuneCooldown(8429, 30000);
        }

        //Gathering Storm - Every 10 seconds, multiply your AD/AP by 1.1.
        if (playerHasRune(8236)) {
            runeRelatedData["8236"] = {
                intervalID: setInterval(function() {
                    playerStats.attackDamage *= 1.1;
                    playerStats.abilityPower *= 1.1;
                    runeRelatedData["8236"].currentMultiplier *= 1.1;
                }, 10000),
                currentMultiplier: 1
            };

        }

    },

    update: function() {
        canMakeMove = true;
        for (var i = 0 ; i < board.length ; i++) {
            for (var j = 0 ; j < board[i].length; j++) {
                const sprite = board[i][j];

                if (sprite == null) {
                    continue;
                }

                const correctPositionY = GAME_HEIGHT * sprite.row / GAME_NUM_ROWS;

                if (sprite.y < correctPositionY) {
                    sprite.y+= GAME_FALL_SPEED * playerStats.attackSpeed / GAME_DEFAULT_STATS.attackSpeed;
                    canMakeMove = false;
                }

                if (sprite.y > correctPositionY) {
                    sprite.y = correctPositionY;
                }

            }
        }

        if (game.time.now > cpuAttackTimer) {
            cpuAttacks();
        }
        if (wToggle && game.time.now > wManaDecrementTime + 1000) {
            if (playerStats.mana > 5) {
                //If enough mana, drain 5 this seconds
                playerStats.mana -= 5;
                updateManaBar(0, playerStats.mana, playerStats.maxMP, 5, playerStats.mana + 5)
                wManaDecrementTime = game.time.now + 1000;
            } else {
                //If not enough mana, turn off toggle automatically.
                tryCast("W");
            }
        }
    }

};

function cpuAttacks() {

    cpuAttackTimer = game.time.now + bossStats.attackPeriod;

    //Dodge Chance: Movement Speed / 10000.
    var rand = Math.random() * 10000;
    if (playerStats.moveSpeed > rand) {
        console.log("Enemy attack dodged!!!");

        //Fleet Footwork - Dodging an attack deals 20% of the enemy's Max HP as magic damage and increases evasion rate by 10% for 10 seconds.
        if (playerHasRune(8021)) {
            applyDamage(bossStats.maxHP / 5 * 100 / (100 + bossStats.magicResist), 1, 0);

            //If already active, refresh duration.
            if (runeRelatedData["8021"] && runeRelatedData["8021"].active) {
                clearTimeout(runeRelatedData["8021"].timeoutID);
                runeRelatedData["8021"].timeoutID = setTimeout(function() {
                    playerStats.moveSpeed -= 1000;
                    runeRelatedData["8021"].active = false;
                }, 10000);
                updateRuneCooldown(8021, 10000);
                return;
            }

            //Otherwise, increase evasion rate by 10% for 10 seconds.
            playerStats.moveSpeed += 1000;

            const timeoutID = setTimeout(function() {
                playerStats.moveSpeed -= 1000;
                runeRelatedData["8021"].active = false;
            }, 10000);
            updateRuneCooldown(8021, 10000);

            runeRelatedData["8021"] = {
                active: true,
                lastApplied: game.time.now,
                timeoutID: timeoutID
            };
        }

        return;
    }

    var damage = bossStats.attackDamage * level * 100 / (100 + playerStats.armor);

    //Second Wind - Everytime you take damage you also restore 20 health.
    if (playerHasRune(8444)) {
        damage -= 20;
    }

    applyDamage(damage, 0, 0);




}

function generateNewOrb(row, col) {
    const color = GAME_COLORS[Math.floor(Math.random() * numColors)];
    var zombie = false;

    if ((color === "red" || color === "yellow" || color === "blue") && playerHasRune(8136)) {
        var random = Math.random();
        if (random < 0.2) {
            zombie = true;
            console.log(color + "Ward");
        }
    }

    var sprite = game.add.sprite(GAME_WIDTH * col / GAME_NUM_COLS, GAME_HEIGHT * row / GAME_NUM_ROWS, zombie ? (color + "Ward") : color);



    sprite.color = color;
    sprite.zombie = zombie;
    sprite.row = row;
    sprite.col = col;

    sprite.width = GAME_SPRITE_WIDTH;
    sprite.height = GAME_SPRITE_HEIGHT;

    sprite.inputEnabled = true;
    sprite.events.onInputDown.add(beginDrag);
    sprite.events.onInputUp.add(endDrag);
    sprite.events.onInputOver.add(tintSprite);

    return sprite;
}


function tintSprite(sprite) {

    if (runeRelatedData["8120"]) {
        clearTimeout(runeRelatedData["8120"].timeoutID);
    }

    if (isDragging && (currentDragColor === sprite.color || currentDragColor === "ANY" || sprite.color === "ANY") && areAdjacent(sprite, currentSprite) && !selectedSprites.includes(sprite)) {
        sprite.tint = GAME_TINT_COLOR;
        selectedSprites = selectedSprites.concat(sprite);
        currentSprite = sprite;

        if (currentDragColor === "ANY") {
            currentDragColor = sprite.color;
        }

    } else if (!isDragging) {
        currentSprite = sprite;
    }
}

function untintAll() {

    var sprites = game.world.children;

    for (var i = 0; i < sprites.length; i++) {
        sprites[i].tint = GAME_UNTINT_COLOR;
    }

    selectedSprites = [];
}

function clearTinted() {

    for (var i = 0 ; i < selectedSprites.length; i++) {
        addPieceToCol(selectedSprites[i].col);
    }

    for (var i = 0 ; i < selectedSprites.length ; i++) {

        if (selectedSprites[i].zombie) {
            selectedSprites[i].loadTexture("zombieWard");
            selectedSprites[i].width = GAME_SPRITE_WIDTH;
            selectedSprites[i].height = GAME_SPRITE_HEIGHT;
            selectedSprites[i].color = "ANY";
            selectedSprites[i].zombie = false;
            selectedSprites[i].tint = GAME_UNTINT_COLOR;
            continue;
        }

        game.world.remove(selectedSprites[i]);

        shiftDownPiecesFromPosition(selectedSprites[i].row, selectedSprites[i].col);

    }

    selectedSprites = [];
}

function addPieceToCol(col) {
    var currentRow = 0;

    while (board[currentRow][col] != null) {
        currentRow--;
    }

    board[currentRow][col] = generateNewOrb(currentRow, col);
}

function shiftDownPiecesFromPosition(row, col) {

    for (var i = row - 1 ; i >= -GAME_NUM_ROWS ; i--) {

        if (board[i][col] == null) {
            break;
        }

        //console.log("Move down one row Board["+(i)+"]["+col+"]");
        board[i+1][col] = board[i][col];
        board[i+1][col].row = i+1;

        board[i][col] = null;
    }

}

function beginDrag() {

    if (!canMakeMove) {
        return;
    }

    if (playerHasRune(8120)) {

        const timeoutID = setTimeout(function() {
                currentSprite.color = "ANY";
                currentSprite.loadTexture("poro");

        }, 1000);

        runeRelatedData["8120"] = {
            timeoutID: timeoutID
        };

    }

    isDragging = true;

    selectedSprites = selectedSprites.concat(currentSprite);
    currentSprite.tint = GAME_TINT_COLOR;
    currentDragColor = currentSprite.color;
}

function attack(length, color) {

    var bonusDamage = 0;
    var bonusLifeSteal = 0;

    if (stacks == 0 || lastStackAppliedTime + GAME_STACK_DURATION > game.time.now) {
        stacks++;
        lastStackAppliedTime = game.time.now;
        updateStackCount(stacks);

        //Rune effects triggered from stacks.
        if (stacks >= GAME_STACK_TRIGGER_AMOUNT) {
            stacks = 0;
            //Press the Attack and Electrocute - Landing 3 stacks deals 20% of the enemy's max hp as magic damage.
            if (playerHasRune(8005) || playerHasRune(8112)) {
                //Deal 20% of the boss's HP as magic damage.
                applyDamage(bossStats.maxHP / 5 * 100 / (100 + bossStats.magicResist), 1, 0);
            }
            //Grasp of the Undying - Landing 3 stacks deals 30% of the player's max hp as magic damage.
            if (playerHasRune(8437)) {
                //Deal 30% of the player's HP as magic damage.
                applyDamage(playerStats.maxHP * 0.3 * 100 / (100 + bossStats.magicResist), 1, 0);
            }
            //Phase Rush - Landing 3 stacks increases evasion rate by 20% for 5 seconds.
            if (playerHasRune(8230)) {
                //If already active, refresh duration.
                if (runeRelatedData["8230"] && runeRelatedData["8230"].active) {
                    clearTimeout(runeRelatedData["8230"].timeoutID);
                    runeRelatedData["8230"].timeoutID = setTimeout(function() {
                        playerStats.moveSpeed -= 2000;
                        runeRelatedData["8230"].active = false;
                    }, 5000);
                    updateRuneCooldown(8230, 5000);
                    return;
                }

                //Otherwise, increase evasion rate by 20% for 5 seconds.
                playerStats.moveSpeed += 2000;

                const timeoutID = setTimeout(function() {
                    playerStats.moveSpeed -= 2000;
                    runeRelatedData["8021"].active = false;
                }, 5000);
                updateRuneCooldown(8230, 5000);

                runeRelatedData["8230"] = {
                    active: true,
                    lastApplied: game.time.now,
                    timeoutID: timeoutID
                };
            }
        }
    } else {
        stacks = 1;
    }

    //Effects corresponding to damaging an enemy champion.
    if (length >= 5) {

        //Lethal Tempo - Clearing 5 or more pieces increases clear speed by 50% for 5 seconds.
        if (playerHasRune(8008)) {

            //If already active, refresh duration.
            if (runeRelatedData["8008"] && runeRelatedData["8008"].active) {
                clearTimeout(runeRelatedData["8008"].timeoutID);
                runeRelatedData["8008"].timeoutID = setTimeout(function() {
                    playerStats.attackSpeed /= 2;
                    runeRelatedData["8008"].active = false;
                }, 5000);
                updateRuneCooldown(8008, 5000);
                return;
            }

            //Otherwise, multiply attack speed by 2 and add timer to return.
            playerStats.attackSpeed *= 2;

            const timeoutID = setTimeout(function() {
                playerStats.attackSpeed /= 2;
                runeRelatedData["8008"].active = false;
            }, 5000);

            updateRuneCooldown(8008, 5000);

            runeRelatedData["8008"] = {
                active: true,
                lastApplied: game.time.now,
                timeoutID: timeoutID
            };
        }
    }

    //Effects corresponding to killing an enemy champion.
    if (length >= 6) {

        //Presence of Mind - Clearing 6 or more pieces restores mana to 100%.
        if (playerHasRune(8009)) {
            playerStats.mana = playerStats.maxMP;
            //UPDATE MANA BARS
        }

        //Eyeball Collection - Clearing 6 or more pieces permanently increases your attack damage by 10.
        if (playerHasRune(8138)) {
            playerStats.attackDamage += 10;
        }

        //Legend: Bloodline - Clearing 6 or more pieces permanently increases lifesteal by 1%.
        if (playerHasRune(9103)) {
            playerStats.lifeSteal += 0.01;
        }

        //Legend: Alacrity - Clearing 6 or more pieces permanently increases clear speed by 2%.
        if (playerHasRune(9104)) {
            playerStats.attackSpeed *= 1.02;
        }

        //Legend: Tenacity - Clearing 6 or more pieces permanently increases tenacity by 2%.
        if (playerHasRune(9105)) {
            playerStats.tenacity += 0.02;
        }

        //Triumph - Clearing 6 or more pieces restores 10% of your HP.
        if (playerHasRune(9111)) {
            applyDamage(-0.1 * playerStats.maxHP, 0, 0);
        }


    }

    var damage = ((Math.pow(length, 2) * 2) + playerStats.attackDamage) * 100 / (100 + bossStats.armor);

    //Celerity - Increase evasion rate by 10%. Gain 10 AD for every 10% evasion rate.
    if (playerHasRune(8234)) {
        damage += playerStats.moveSpeed / (100 + bossStats.armor);
    }

    //Coup de Grace - Orb clears deal double damage to enemies below 40% HP.
    if (playerHasRune(8014) && bossStats.health < bossStats.maxHP) {
        damage *= 2;
    }

    //Cut down - Orb clears deal 50% more damage when enemies have more percentage health than you do.
    if (playerHasRune(8017) && bossStats.health / bossStats.maxHP > playerStats.health / playerStats.maxHP) {
        damage *= 1.5;
    }

    //Relentless Hunter - Clearing yellow orbs permanently increases clear speed by 10%.
    if (playerHasRune(8105) && (color === "yellow" || color === "ANY")) {
        playerStats.attackSpeed *= 1.1;
    }

    //Cheap Shot - When your enemy is stunned, your orb clears deal double damage.
    if (playerHasRune(8126) && cpuAttackTimer >= game.time.now + bossStats.attackPeriod) {
        damage *= 2;
    }

    //Dark Harvest - Damage dealt from clearing 6 or more orbs will be doubled.
    if (playerHasRune(8128) && length >= 6) {
        damage *= 2;
    }

    //Scorch - All orb clears burn enemies for an additional 30% damage.
    if (playerHasRune(8237)) {
        damage *= 1.3;
    }

    //Taste of Blood - Heal 15% of your max HP everytime you damage an enemy (20 second cooldown).
    if (playerHasRune(8139)) {

        //If already active, refresh duration.
        if (!runeRelatedData["8139"] || runeRelatedData["8139"].lastCastTime + 20000 < game.time.now) {
            runeRelatedData["8139"] = {
                lastCastTime: game.time.now
            };

            applyDamage(playerStats.maxHP * -0.15, 0, 0);

            updateRuneCooldown(8139, 20000);
        }

    }

    //Sudden Impact - After using any active ability, your next orb clear will ignore ALL armor.
    if (playerHasRune(8143)) {
        if (playerStats["8143"] && playerStats["8143"].active) {
            playerStats["8143"].active = false;
            damage *= (100 + bossStats.armor) / 100;
        }
    }


    //Waterwalking - Clearing blue orbs increases evasion rate by 30% for 5 seconds.
    if (playerHasRune(8232) && (color === "blue" || color === "ANY")) {
        //If already active, refresh duration.
        if (runeRelatedData["8232"] && runeRelatedData["8232"].active) {
            clearTimeout(runeRelatedData["8232"].timeoutID);
            runeRelatedData["8232"].timeoutID = setTimeout(function() {
                playerStats.moveSpeed -= 3000;
                runeRelatedData["8232"].active = false;
            }, 5000);
            updateRuneCooldown(8232, 5000);
            return;
        }

        //Otherwise, increase evasion rate by 30%.
        playerStats.attackSpeed += 3000;

        const timeoutID = setTimeout(function() {
            playerStats.attackSpeed -= 3000;
            runeRelatedData["8232"].active = false;
        }, 5000);
        updateRuneCooldown(8232, 5000);

        runeRelatedData["8232"] = {
            active: true,
            lastApplied: game.time.now,
            timeoutID: timeoutID
        };
    }

    //Absolute Focus - When above 70% HP, deal 40% increased damage.
    if (playerHasRune(8233) && playerStats.health > playerStats.maxHP * 0.7) {
        damage *= 1.4;
    }


    //Summon Aery - Orb clears summon Aery to increase your damage by 50% (10 second cooldown).
    if (playerHasRune(8214)) {

        if (!runeRelatedData["8214"] || runeRelatedData["8214"].lastCastTime + 10000 < game.time.now) {

            runeRelatedData["8214"] = {
                lastCastTime: game.time.now
            };

            damage *= 1.5;
        }

    }

    //Last Stand - Deal 2% more damage for every 1% of HP you're missing.
    if (playerHasRune(8299)) {
        const missingHpPercentage = 1 - playerStats.health / playerStats.maxHealth;
        damage *= 1 + missingHpPercentage;
    }

    //Celestial Body - Increase HP by 300 but deal 10% less damage for the first 30 seconds.
    if (playerHasRune(8339)) {
        if (runeRelatedData["8339"].activated) {
            damage *= 0.9;
        }
    }

    //Glacial Augment - Clearing 5 or more orbs will slow enemy attacks by 50% for 5 seconds.
    if (playerHasRune(8351)) {

        //If already active, refresh duration.
        if (runeRelatedData["8351"] && runeRelatedData["8351"].active) {
            clearTimeout(runeRelatedData["8351"].timeoutID);
            runeRelatedData["8351"].timeoutID = setTimeout(function() {
                bossStats.attackPeriod /= 2;
                runeRelatedData["8351"].active = false;
            }, 5000);
            updateRuneCooldown(8351, 5000);
            return;
        }

        //Otherwise, slow enemy attacks by 50%.
        bossStats.attackPeriod *= 2;

        const timeoutID = setTimeout(function() {
            bossStats.attackPeriod /= 2;
            runeRelatedData["8351"].active = false;
        }, 5000);

        updateRuneCooldown(8351, 5000);

        runeRelatedData["8351"] = {
            active: true,
            lastApplied: game.time.now,
            timeoutID: timeoutID
        };
    }

    //Font of Life - Gain 40% lifesteal when attacking stunned enemies.
    if (playerHasRune(8463) && cpuAttackTimer >= game.time.now + bossStats.attackPeriod) {
        bonusLifeSteal += 0.4;
    }

    //Demolish - Clearing green orbs grant a stack. Every 5th stack will damage the enemy for 30% of its max HP as magic damage.

    if (color === "green" && playerHasRune(8446)) {
        if (!runeRelatedData["8446"]) {
            runeRelatedData["8446"] = 1;
        } else {
            runeRelatedData["8446"]++;

            if (runeRelatedData["8446"] >= 5){
                runeRelatedData["8446"] = 0;
                applyDamage(0.3 * bossStats.maxHP * 100 / (100 + bossStats.magicResist), 1, 0);
            }
        }
    }

    applyDamage(damage, 1, playerStats.lifeSteal + bonusLifeSteal);

}

function applyDamage(damage, playerNumber, lifeSteal) {

    character = playerNumber == 0 ? playerStats : bossStats;

    //Revitalize - All potions, shields, and healing is 50% stronger. This is increased to 100% when below 40% HP.
    if (damage < 0 && playerNumber == 0 && playerHasRune(8453)) {
        if (playerStats.health / playerStats.maxHP < 0.4) {
            damage *= 2;
        } else {
            damage *= 1.5;
        }
    }

    //Guardian - Absorb 50 damage the next time you take damage (cooldown: 10 seconds).
    if (damage > 0 && playerNumber == 0 && playerHasRune(8465)) {
        if (!runeRelatedData["8465"] || runeRelatedData["8465"].lastCastTime + 10000 < game.time.now) {
            runeRelatedData["8465"] = {
                lastCastTime: game.time.now
            };
            damage -= 50;

            if (damage < 0) {
                damage = 0;
            }

        }
    }

    var total = character.maxHP;
    var value = character.health;
    var newValue = value - damage;

    character.health = newValue;

    if (newValue <= 0) {
        newValue = 0;
        if (playerNumber == 0) {
            game.state.start("lose", true, false);
        } else {

            //Transcendence - After 30 seconds, gain 50% CDR on ALL abilities.
            if (playerHasRune(8210)) {

                clearInterval(runeRelatedData["8210"].timeoutID);
                if (runeRelatedData["8210"].activated) {
                    var abilities = Object.values(playerStats.abilities);
                    for (var i = 0 ; i < abilities.length ; i++) {
                        abilities[i].cooldown *= 2;
                    }
                }

            }

            //Magical Footwear - After 30 seconds, gain 30% evasion rate.
            if (playerHasRune(8304)) {

                clearInterval(runeRelatedData["8304"].timeoutID);
                if (runeRelatedData["8304"].activated) {
                    playerStats.moveSpeed -= 3000;
                }

            }

            //Celestial Body - Increase HP by 300 but deal 10% less damage for the first 30 seconds.
            if (playerHasRune(8339)) {
                clearInterval(runeRelatedData["8339"].timeoutID);

            }

            //Conditioning - After 30 seconds, gain 80 armor and magic resistance
            if (playerHasRune(8429)) {

                clearInterval(runeRelatedData["8429"].timeoutID);

                if (runeRelatedData["8429"].activated) {
                    playerStats.armor -= 80;
                    playerStats.magicResist -= 80;
                }

            }

            //Gathering Storm - Every 10 seconds, multiply your AD/AP by 1.1
            if (playerHasRune(8236)) {

                clearInterval(runeRelatedData["8236"].intervalID);
                playerStats.attackDamage /= runeRelatedData["8236"].currentMultiplier;
                playerStats.abilityPower /= runeRelatedData["8236"].currentMultiplier;

            }

            game.state.start("levelUp", false, false);
        }
    }

    //Overheal - You can heal past 100% HP.
    if (newValue >= total && !playerHasRune(9101)) {
        newValue = total;
    }

    updateHealthBar(playerNumber, newValue, total, damage, value);

    if (lifeSteal > 0 && damage > 0) {
        applyDamage(-damage * lifeSteal, 1 - playerNumber, 0);
    }

    //Ravenous Hunter - Heal for 30% of ALL damage dealt.
    if (damage > 0 && playerNumber == 1 && playerHasRune(8135)) {
        applyDamage(-0.3 * damage, 0, 0);
    }


    //Nullifying Orb - Restore 20% of your Max HP after falling below 30% Health (20 second cooldown).
    if (newValue < playerStats.maxHP / 5 && playerHasRune(8224)) {

        if (!runeRelatedData["8224"] || runeRelatedData["8224"].lastCastTime + 20000 < game.time.now) {
            runeRelatedData["8224"] = {
                lastCastTime: game.time.now
            };

            applyDamage(-0.2 * playerStats.maxHP, 0, 0);

            updateRuneCooldown(8224, 20000);
        }

    }

    //Overgrowth - Every set of orbs you clear permanently increases your HP and max HP by 10.
    if (playerHasRune(8451)) {
        playerStats.maxHP += 10;
        playerStats.health += 10;
    }

}

function resetResources() {
    playerStats.health = playerStats.maxHP;
    bossStats.health = bossStats.maxHP;

    playerStats.mana = playerStats.maxMP;

    playerStats.potions = GAME_DEFAULT_STATS.potions;

    resetResourceBars();

    updateNumPotions(playerStats.potions);

}

function endDrag() {
    isDragging = false;

    if (runeRelatedData["8120"]) {
        clearTimeout(runeRelatedData["8120"].timeoutID);
    }

    if (selectedSprites.length >= GAME_AMOUNT_TO_MATCH) {
        color = selectedSprites[0].color;
        attack(selectedSprites.length, color);
        clearTinted();
    } else {
        untintAll();
    }

}

function areAdjacent(a, b) {
    return !(a.row < b.row - 1 || a.row > b.row + 1 || a.col < b.col - 1 || a.col > b.col + 1);
}


//params.numColors - Number of Colors
function resetBoard() {

    game.world.removeAll();

    for (var i = -GAME_NUM_ROWS ; i < GAME_NUM_ROWS ; i++) {
        board[i] = [];
    }

    for (var i = 0; i < GAME_NUM_ROWS; i++) {
        for (var j = 0; j < GAME_NUM_COLS; j++) {
            const rowPosition = i;
            const colPosition = j;
            var sprite = generateNewOrb(rowPosition, colPosition);

            //sprite.events.onInputOut.add(this.untintAll);
            board[i][j] = sprite;

        }
    }
}

function addAbilityListeners() {
    var q = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    var w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var e = game.input.keyboard.addKey(Phaser.Keyboard.E);
    var r = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var one = game.input.keyboard.addKey(Phaser.Keyboard.ONE);

    q.onDown.add(() => tryCast("Q"));
    w.onDown.add(() => tryCast("W"));
    e.onDown.add(() => tryCast("E"));
    r.onDown.add(() => tryCast("R"));
    one.onDown.add(() => tryCast("1"));
}

function tryCast(key) {

    console.log("Cast " + key);

    var cost = playerStats.abilities[key].cost;
    var isHexQ = false;

    if (playerHasRune(8226)) {
        if (!runeRelatedData["8226"]) {
            runeRelatedData["8226"] = {
                counter: 1
            };
        } else if (++runeRelatedData["8226"].counter == 4) {
            runeRelatedData["8226"].counter = 0;
            cost = -playerStats.maxMP / 4;
        }
    }

    if (key === "W" && wToggle) {
        wToggle = false;
        playerStats.attackDamage -= 20 + 0.2 * playerStats.abilityPower;
        playerStats.lifeSteal -= .2 + .002 * playerStats.abilityPower;
        setCooldown("W", 0);
        return;
    }

    if (cost > playerStats.mana) {
        console.log("Not enough mana!");
        return;
    } else if (game.time.now < playerStats.abilities[key].cooldown * 1000 + playerStats.abilities[key].lastCastTime) {
        if (!playerHasRune(8306) || key !== "Q") {
            console.log("You may not cast this ability yet!");
            return;
        } else {
            isHexQ = true;
        }
    } else if (playerStats.abilities[key].potions && playerStats.potions < playerStats.abilities[key].potions) {
        console.log("You are out of potions!");
        return;
    }

    if (playerStats.abilities[key].potions) {
        playerStats.potions -= playerStats.abilities[key].potions;
        updateNumPotions(playerStats.potions);
    }

    playerStats.mana -= cost;
    updateManaBar(0, playerStats.mana, playerStats.maxMP, cost, playerStats.mana + cost);
    playerStats.abilities[key].lastCastTime = game.time.now;
    castEffect(key, isHexQ);

    //Sudden Impact - After using any active ability, your next orb clear will ignore ALL armor.
    if (playerHasRune(8143)) {
        playerStats["8143"] = {
            active: true
        };
    }

}

function castEffect(key, isHexQ) {
    if (key === "Q") {
        var damage = bossStats.maxHP * (0.1 + .001 * playerStats.abilityPower);

        if (isHexQ) {
            const percentageCooldownElapsed = (game.time.now - playerStats.abilities["Q"].lastCastTime) / playerStats.abilities["Q"].cooldown / 1000;
            damage *= percentageCooldownElapsed;
        }

        //Arcane Comet - Your damaging abilities (Q) hurls a comet at your enemy, doubling the damage.
        if (playerHasRune(8229)) {
            damage *= 2;
        }

        applyDamage(damage, 1, 0);
    } else if (key === "W") {
        wToggle = true;
        wManaDecrementTime = game.time.now;
        playerStats.attackDamage += 20 + 0.2 * playerStats.abilityPower;
        playerStats.lifeSteal += .2 + .002 * playerStats.abilityPower;
        setCooldown("W", 9999999);
        return;
    } else if (key === "E") {
        cpuAttackTimer = game.time.now += 1000 * (2 + .02 * playerStats.abilityPower) + bossStats.attackPeriod;

        //Approach Velocity - Increase evasion rate by 20% for 5 seconds after your enemy is stunned.
        if (playerHasRune(8410)) {

            //If already active, refresh duration.
            if (runeRelatedData["8410"] && runeRelatedData["8410"].active) {
                clearTimeout(runeRelatedData["8410"].timeoutID);
                runeRelatedData["8410"].timeoutID = setTimeout(function() {
                    playerStats.moveSpeed -= (2000 + 1000 * (2 + .02 * playerStats.abilityPower));
                    runeRelatedData["8410"].active = false;
                }, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));
                updateRuneCooldown(8410, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));
                return;
            }

            //Otherwise, increase evasion rate by 20% for 5 seconds.
            playerStats.moveSpeed += 2000 + 1000 * (2 + .02 * playerStats.abilityPower);

            const timeoutID = setTimeout(function() {
                playerStats.moveSpeed -= (2000 + 1000 * (2 + .02 * playerStats.abilityPower));
                runeRelatedData["8410"].active = false;
            }, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));
            updateRuneCooldown(8410, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));

            runeRelatedData["8410"] = {
                active: true,
                lastApplied: game.time.now,
                timeoutID: timeoutID
            };

        }

        //Aftershock - Increase armor and magic resist by 60 for 5 seconds after your enemy is stunned.
        if (playerHasRune(8439)) {

            //If already active, refresh duration.
            if (runeRelatedData["8439"] && runeRelatedData["8439"].active) {
                clearTimeout(runeRelatedData["8439"].timeoutID);
                runeRelatedData["8439"].timeoutID = setTimeout(function() {
                    playerStats.armor -= 60;
                    playerStats.magicResist -= 60;
                    runeRelatedData["8439"].active = false;
                }, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));
                updateRuneCooldown(8439, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));
                return;
            }

            //Otherwise, increase evasion rate by 20% for 5 seconds.
            playerStats.armor += 60;
            playerStats.magicResist += 60;

            const timeoutID = setTimeout(function() {
                playerStats.armor -= 60;
                playerStats.magicReist -= 60;
            }, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));
            updateRuneCooldown(8439, 5000 + 1000 * (2 + .02 * playerStats.abilityPower));

            runeRelatedData["8439"] = {
                active: true,
                lastApplied: game.time.now,
                timeoutID: timeoutID
            };

        }

    } else if (key === "R") {
        if (numColors > 1)  {
            numColors--;
        }
        resetBoard();
    } else if (key === "1") {
        applyDamage(-GAME_POTION_STRENGTH, 0, 0);
    }

    setCooldown(key, playerStats.abilities[key].cooldown * 1000);
}

function resetCooldowns() {

    const keys = Object.keys(playerStats.abilities);

    for (var i = 0 ; i < keys.length; i++) {
        setCooldown(keys[i], 0);
    }

    for (var i = 0 ; i < playerStats.currentRunes.length; i++) {
        updateRuneCooldown(playerStats.currentRunes[i].id, 0);
    }
}


function stunPlayer(duration) {
    var tenacity = playerStats.tenacity;

    //Unflinching - For each ability on cooldown, gain 20% tenacity.
    if (playerHasRune(8242)) {
        const abilities = Object.values(playerStats.abilities);
        for (var i = 0 ; i < abilities.length ; i++) {
            if (game.time.now < playerStats.abilities[key].cooldown * 1000 + playerStats.abilities[key].lastCastTime) {
                tenacity += 0.2;
            }
        }
    }

    const ccDuration = (1 - tenacity) * duration;

    //STUN PLAYER OR DISABLE INPUT OR SOMETHING.
}

// Add and start the 'main' state to start the game
game.state.add('game', game_state.game);

//3 indicates the number of colors to start with.
//game.state.start('game', false, false, 3);

//To restart, use game.state.restart('game', false, false, numColors);