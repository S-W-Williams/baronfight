var TILE_SIZE = 50;
var STAGE = null;
var QUEUE = null
var IDS = [8112, 8124, 8128, 8126, 8139, 8143, 8136, 8120, 8138, 8135, 8134, 8105, 8326, 8351, 8359, 8306, 8345, 8313, 8304, 8321, 8316, 8347, 8410, 8339, 8005, 8008, 8021, 9101, 9111, 8009, 9104, 9105, 9103, 8014, 8017, 8299, 8437, 8439, 8465, 8242, 8446, 8463, 8430, 8435, 8429, 8451, 8453, 8444, 8214, 8229, 8230, 8224, 8226, 8243, 8210, 8234, 8233, 8237, 8232, 8236];

STAGE = new createjs.Stage("gameCanvas");



function init() {
    createjs.Ticker.on("tick", STAGE);
    drawBoard(750, 750);
}


//params: int height, int width
function drawBoard(height, width) {
    for (var i = 1; i*TILE_SIZE < height; i++) {
        for (var j = 1; j*TILE_SIZE < width; j++) {
            var ID = IDS[Math.floor(Math.random()*IDS.length)];
            var img = new Image();
            var m = new createjs.Matrix2D().translate(-160, -144);
            img.src = "./resources/runes/perk/" + ID.toString() + ".png";
            var shape = new createjs.Shape();
            shape.graphics.clear()
                .beginBitmapFill(img, "repeat", m)//, "repeat", matrix)
                .drawCircle(i*TILE_SIZE,j*TILE_SIZE, 54);
            STAGE.addChild(shape);
        }
    }
    STAGE.update();
}

