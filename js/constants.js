//RUNE SELECTION SCREEN
const GAME_RUNE_WIDTH = 100;
const GAME_RUNE_HEIGHT = 100;
const RUNE_PLACEHOLDER = "resources/runes/perk/runeplaceholder.png";

//GAMEPLAY ELEMENTS.

const GAME_NUM_ROWS = 10;
const GAME_NUM_COLS = 10;
const GAME_WIDTH = 508;
const GAME_HEIGHT = 508;

const GAME_SPRITE_WIDTH = GAME_WIDTH / GAME_NUM_COLS;
const GAME_SPRITE_HEIGHT = GAME_HEIGHT / GAME_NUM_ROWS;

const GAME_COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
const GAME_NUM_COLORS = (level) => level >= 5 ? 7 : 2 + level;
const GAME_LEVEL_CAP = 8;

const GAME_PLAYER_STUN_DURATION = 3000;

const GAME_FALL_SPEED = 4;

//Must match 3 pieces to count.
const GAME_AMOUNT_TO_MATCH = 3;

const GAME_TINT_COLOR = 0x203470;
const GAME_UNTINT_COLOR = 0xFFFFFF;

//Health restored from consuming red potion.
//and Mana restored from consuming blue potion.
const GAME_POTION_STRENGTH = 200;

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
    redPotions: 2,
    bluePotions: 2,
    maxPotions: 2,
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
        },
        1: {
            cost: 0,
            cooldown: 1,
            redPotions: 1
        },
        2: {
            cost: -GAME_POTION_STRENGTH,
            cooldown: 1,
            bluePotions: 1
        }
    }
};

const GAME_BOSS_STATS = function(level) {

    if (level === 1) {
        return barons[0][0];
    } else if (level <= 4) {
        return randomBaronFrom(barons[1]);
    } else if (level <= 6) {
        return randomBaronFrom(barons[2]);
    } else {
        return randomBaronFrom(barons[3]);
    }

};

const randomBaronFrom = function(barons) {
    const rand = Math.floor(Math.random() * barons.length);
    return barons[rand];
};

//Current baron stats
var currentBaronStats = GAME_BOSS_STATS(1);


var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'phaser');
var game_state = {};

const getNextRuneOffer = function(runeTree, level) {

    if (level === 6) {
        var copy = runesReforged.slice();
        copy.splice(copy.indexOf(playerStats.currentRunes[0]), 1);
        return copy;

    } else if (level === 1) {
        return runesReforged;
    } else if (level > 6) {
        return runeTree.slots[level - 7].runes;
    }

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



