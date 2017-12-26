//RUNE SELECTION SCREEN
const GAME_RUNE_WIDTH = 100;
const GAME_RUNE_HEIGHT = 100;

//GAMEPLAY ELEMENTS.

const GAME_NUM_ROWS = 10;
const GAME_NUM_COLS = 10;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

const GAME_SPRITE_WIDTH = GAME_WIDTH / GAME_NUM_COLS;
const GAME_SPRITE_HEIGHT = GAME_HEIGHT / GAME_NUM_ROWS;

const GAME_COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
const GAME_NUM_COLORS = (level) => 2 + level;
const GAME_LEVEL_CAP = GAME_COLORS.length - 2;

const GAME_FALL_SPEED = 2;

//Must match 3 pieces to count.
const GAME_AMOUNT_TO_MATCH = 3;

const GAME_TINT_COLOR = 0x203470;
const GAME_UNTINT_COLOR = 0xFFFFFF;

const GAME_DEFAULT_STATS = {
    maxHP: 1000,
    maxMP: 800,
    armor: 20,
    magicResist: 20,
    moveSpeed: 300,
    attackDamage: 80,
    abilityPower: 0,
    attackSpeed: 1.2,
    currentRunes: []
};

var HEALTH_BAR = $('.health-bar');
var BAR = HEALTH_BAR.find('.bar');
var HIT = HEALTH_BAR.find('.hit');

var BASE_DAMAGE = 10;
var CPU_DAMAGE = 10;

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'phaser');
var game_state = {};




const perkIDs = [[8005, 8008, 8009, 8014, 8017, 8021],
    [8105, 8112, 8120, 8124, 8126, 8128, 8134, 8135, 8136, 8138, 8139, 8143],
    [8210, 8214, 8224, 8226, 8229, 8230, 8232, 8233, 8234, 8236, 8237, 8242, 8243, 8299],
    [8304, 8306, 8313, 8316, 8321, 8326, 8339, 8345, 8347, 8351, 8359],
    [8410, 8429, 8430, 8435, 8437, 8439, 8444, 8446, 8451, 8453, 8463, 8465],
    [9101, 9103, 9104, 9105, 9111]];
const perkStyles = [8000, 8100, 8200, 8300, 8400];

const runeTree =
    //Array of Branches
    [
        //Branch 1 - Precision
        [

            [8005, 8008, 8021],
            [9101, 9111, 8009],
            [9104, 9105, 9103],
            [8014, 8017, 8299]

        ],
        //Branch 2 - Domination
        [

            [8112, 8124, 8128],
            [8126, 8139, 8143],
            [8136, 8120, 8138],
            [8135, 8134, 8105]

        ],
        //Branch 3 - Sorcery
        [

            [8214, 8229, 8230],
            [8224, 8226, 8243],
            [8210, 8234, 8233],
            [8237, 8232, 8236]

        ],
        //Branch 4 - Resolve
        [
            [8437, 8439, 8465],
            [8242, 8446, 8463],
            [8430, 8435, 8429],
            [8451, 8453, 8444]


        ],
        //Branch 5 - Inspiration
        [
            [8326, 8351, 8359],
            [8306, 8345, 8313],
            [8304, 8321, 8316],
            [8347, 8410, 8339]
        ]
    ];

const getNextRuneOffer = function(branchID, level) {

    //Branch position is the hundredths place of branch ID.
    const position = branchID % 1000 / 100;

    return runeTree[position][level-2];

};