var board = [];

var isDragging = false;
var canMakeMove = true;
var currentSprite = null;
var currentDragColor = null;
var selectedSprites = [];
var numColors = GAME_COLORS.length;
var level = 1;
var cpuAttackTimer = 0;

//Will be augmented by runes, spells, items, etc. as game progresses.
var playerStats = Object.assign({}, GAME_DEFAULT_STATS);

game_state.game = function() {};
game_state.game.prototype = {

    init: function(numberOfColors = GAME_COLORS.length) {
        numColors = numberOfColors;

        resetHealthBars();

    },

    create: function() {
        //Untint all when mouse leaves game board.
        document.body.onmouseover = this.untintAll;

        resetBoard();

        addAbilityListeners();
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
                    sprite.y+= GAME_FALL_SPEED * playerStats.moveSpeed / GAME_DEFAULT_STATS.moveSpeed;
                    canMakeMove = false;
                }

            }
        }

        if (game.time.now > cpuAttackTimer) {
            cpuAttacks();
        }
    }

};

function cpuAttacks() {

    cpuAttackTimer = game.time.now + GAME_BOSS_STATS(level).attackPeriod;
    var damage = GAME_BOSS_STATS(level).attackDamage * level * 100 / (100 + playerStats.armor);
    applyDamage(damage, 0);
}

function generateNewOrb(row, col) {
    const color = GAME_COLORS[Math.floor(Math.random() * numColors)];
    var sprite = game.add.sprite(GAME_WIDTH * col / GAME_NUM_COLS, GAME_HEIGHT * row / GAME_NUM_ROWS, color);

    sprite.color = color;
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
    if (isDragging && currentDragColor === sprite.color && areAdjacent(sprite, currentSprite) && !selectedSprites.includes(sprite)) {
        sprite.tint = GAME_TINT_COLOR;
        selectedSprites = selectedSprites.concat(sprite);
        currentSprite = sprite;
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

    isDragging = true;

    selectedSprites = selectedSprites.concat(currentSprite);
    currentSprite.tint = GAME_TINT_COLOR;
    currentDragColor = currentSprite.color;
}

function attack(length, color) {
    var damage = (Math.pow(length, 2) * 2) + playerStats.attackDamage * 100 / (100 + GAME_BOSS_STATS(level).armor);
    applyDamage(damage, 1);
}

function applyDamage(damage, playerNumber) {
    var total = HEALTH_BAR[playerNumber].dataset.total;
    var value = HEALTH_BAR[playerNumber].dataset.value;
    var newValue = value - damage;

    if (newValue <= 0) {
        newValue = 0;
        if (playerNumber == 0) {
            game.state.start("lose", true, false);
        } else {
            game.state.start("levelUp", false, false);
        }
    }

    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";

    // show hit bar and set the width
    HIT[playerNumber].style.width = hitWidth;
    HEALTH_BAR[playerNumber].dataset.value = newValue;

    setTimeout(function(){
        HIT[playerNumber].style.width = "0";
        BAR[playerNumber].style.width = barWidth + "%";
    }, 500);
}

function resetHealthBars() {

    HEALTH_BAR[0].dataset.total = playerStats.maxHP;
    HEALTH_BAR[1].dataset.total = GAME_BOSS_STATS(level).maxHP;

    HEALTH_BAR[0].dataset.value = HEALTH_BAR[0].dataset.total;
    HEALTH_BAR[1].dataset.value = HEALTH_BAR[1].dataset.total;

    BAR[0].style.width = "100%";
    BAR[1].style.width = "100%";

}

function endDrag() {
    isDragging = false;

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

    q.onDown.add(() => tryCast("Q"));
    w.onDown.add(() => tryCast("W"));
    e.onDown.add(() => tryCast("E"));
    r.onDown.add(() => tryCast("R"));
}

function tryCast(key) {

    if (key === "W" && wToggle) {
        wToggle = false;
        return;
    }

    if (playerStats.abilities[key].cost > playerStats.mana) {
        console.log("Not enough mana!");
    } else if (game.time.now < playerStats.abilities[key].cooldown * 1000 + playerStats.abilities[key].lastCastTime) {
        console.log("You may not cast this ability yet!");
    }

    playerStats.mana -= playerStats.abilities[key].cost;
    playerStats.abilities[key].lastCastTime = game.time.now;
    playerStats.abilities[key].castEffect(key);
}

function castEffect(key) {
    if (key === "Q") {
        var damage = HEALTH_BAR[1].dataset.total * (0.1 + .001 * playerStats.abilityPower);
        applyDamage(damage, 1);
    } else if (key === "W") {
        wToggle = true;
    } else if (key === "E") {
        cpuAttackTimer = game.time.now += 1000 * (2 + .02 * playerstats.abilityPower) + GAME_BOSS_STATS(level).attackPeriod;
    } else if (key === "R") {
        if (numColors > 1)  {
            numColors--;
        }
        resetBoard();
    }
}

// Add and start the 'main' state to start the game
game.state.add('game', game_state.game);

//3 indicates the number of colors to start with.
//game.state.start('game', false, false, 3);

//To restart, use game.state.restart('game', false, false, numColors);