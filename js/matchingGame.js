var board = [];

var isDragging = false;
var currentSprite = null;
var currentDragColor = null;
var selectedSprites = [];
var numColors = GAME_COLORS.length;
var level = 1;
var cpuAttackTimer = 0;
var CPU_ATTACK_PERIOD = 1000; //Scale this with level

//Will be augmented by runes, spells, items, etc. as game progresses.
var playerStats = GAME_DEFAULT_STATS;

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
    },

    update: function() {
        for (var i = 0 ; i < board.length ; i++) {
            for (var j = 0 ; j < board[i].length; j++) {
                const sprite = board[i][j];

                if (sprite == null) {
                    continue;
                }

                const correctPositionY = GAME_HEIGHT * sprite.row / GAME_NUM_ROWS;

                if (sprite.y < correctPositionY) {
                    sprite.y+= GAME_FALL_SPEED;
                }

            }
        }

        if (game.time.now > cpuAttackTimer) {
            cpuAttacks();
        }
    }

};

function cpuAttacks() {

    console.log("Attack at " + game.time.now);

    cpuAttackTimer = game.time.now + CPU_ATTACK_PERIOD;
    var damage = CPU_DAMAGE * level;
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
    isDragging = true;

    selectedSprites = selectedSprites.concat(currentSprite);
    currentSprite.tint = GAME_TINT_COLOR;
    currentDragColor = currentSprite.color;
}

function attack(length, color) {
    var levelDamage = BASE_DAMAGE / level; // Need to come up with better scaling equation
    //var damage = length * Math.log(length) * levelDamage; // n log n scaling for damage
    var damage = (Math.pow(length, 2) * 2) + BASE_DAMAGE;
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

// Add and start the 'main' state to start the game
game.state.add('game', game_state.game);

//3 indicates the number of colors to start with.
//game.state.start('game', false, false, 3);

//To restart, use game.state.restart('game', false, false, numColors);