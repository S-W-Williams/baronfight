//RUNE SELECTION SCREEN
const GAME_RUNE_WIDTH = 100;
const GAME_RUNE_HEIGHT = 100;
const RUNE_PLACEHOLDER = "resources/runes/perk/runeplaceholder.png";

//GAMEPLAY ELEMENTS.

const GAME_NUM_ROWS = 10;
const GAME_NUM_COLS = 10;
const GAME_WIDTH = 540;
const GAME_HEIGHT = 540;

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

//RUNE-SPECIFIC CONSTANTS
//Match stacking lasts 4 seconds.
const GAME_STACK_DURATION = 4000;
//Triggering stack effects require 3 stacks.
const GAME_STACK_TRIGGER_AMOUNT = 3;


//PLAYER DEFAULT STATS
const GAME_DEFAULT_STATS = {
    health: 1000,
    mana: 300,
    maxHP: 1000,
    maxMP: 300,
    armor: 20,
    magicResist: 20,
    moveSpeed: 300,
    attackDamage: 10,
    abilityPower: 0,
    attackSpeed: 1.2,
    tenacity: 0,
    lifeSteal: 0,
    currentRunes: [],
    abilities: {
        Q: {
            cost: 40,
            cooldown: 15
        },
        W: {
            cost: 5,
            cooldown: 1
        },
        E: {
            cost: 40,
            cooldown: 15
        },
        R: {
            cost: 100,
            cooldown: 60
        }
    }
};

const GAME_BOSS_STATS = (level) => ({
    maxHP: 200 * level,
    health: 200 * level,
    armor: 5 * level,
    magicResist: 5 * level,
    attackDamage: 5 * level,
    attackPeriod: 1000,
    tenacity: 0.1 * level
});

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'phaser');
var game_state = {};

const getNextRuneOffer = function(runeTree, level) {

    return runeTree.slots[level-2].runes;

};

const playerHasRune = function(id) {
    for (var i = 0 ; i < playerStats.currentRunes.length ; i++) {
        if (playerStats.currentRunes[i].id === id) {
            return true;
        }
    }
    return false;
};
