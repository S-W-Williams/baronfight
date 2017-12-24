var board = [];

var isDragging = false;
var currentSprite = null;
var currentDragColor = null;
var selectedSprites = [];
var numColors = COLORS.length;

game_state.game = function() {};
game_state.game.prototype = {

    init: function(numberOfColors = COLORS.length) {
        numColors = numberOfColors;
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

    }

};

function generateNewOrb(row, col) {
    const color = COLORS[Math.floor(Math.random() * numColors)];
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

function endDrag() {
    isDragging = false;

    if (selectedSprites.length >= GAME_AMOUNT_TO_MATCH) {
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