const perkIDs = [[8005, 8008, 8009, 8014, 8017, 8021],
                [8105, 8112, 8120, 8124, 8126, 8128, 8134, 8135, 8136, 8138, 8139, 8143],
                [8210, 8214, 8224, 8226, 8229, 8230, 8232, 8233, 8234, 8236, 8237, 8242, 8243, 8299],
                [8304, 8306, 8313, 8316, 8321, 8326, 8339, 8345, 8347, 8351, 8359],
                [8410, 8429, 8430, 8435, 8437, 8439, 8444, 8446, 8451, 8453, 8463, 8465],
                [9101, 9103, 9104, 9105, 9111]];

const perkStyles = [8000, 8100, 8200, 8300, 8400];


// Initialize Phaser, and creates a 750x750px game
var game = new Phaser.Game(750, 750, Phaser.AUTO, 'phaser');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() { 
        for (var i=0 ; i < perkIDs.length; i++) {
            for (var j=0 ; j < perkIDs[i].length; j++) {
                game.load.image(''+perkIDs[i][j], 'resources/runes/perk/'+perkIDs[i][j]+'.png');
            }
        }

        for (var i=0 ; i < perkStyles.length; i++) {
            game.load.image(''+perkStyles[i], 'resources/runes/perkStyle/'+perkStyles[i]+'.png');
        }
        
    },

    create: function() { 
        this.testRune = game.add.sprite(250, 300, '9101');
        this.testRune2 = game.add.sprite(400, 500, '8100');
    },
    
    update: function() {
        this.testRune.angle += 1;
        this.testRune2.angle -= 1;
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.start('main'); 