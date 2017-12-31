const barons =
    [
        //Barons Encounterable at level 1.
        [
            {
                name: "Basic Baron",
                traits: ["Weak Overall", "Cannot Stun Player"],
                health: 800,
                maxHP: 800,
                armor: 10,
                magicResist: 10,
                attackDamage: 10,
                attackDelay: 5000,
                tenacity: 0,
                stun: 0,
                physical: 0.5,
            }
        ],
        //Barons Encounterable at levels 2 through 4.
        [
            {
                name: "Magician Baron",
                traits: ["Only deals magic damage", "High magic resistance", "Attacks infrequently", "Sometimes stuns the player"],
                health: 1200,
                maxHP: 1200,
                armor: 10,
                magicResist: 150,
                attackDamage: 40,
                attackDelay: 5000,
                tenacity: 0,
                stun: 0.15,
                physical: 0.15,
            },
            {
                name: "Knight Baron",
                traits: ["Only deals physical damage", "High armor", "Attacks infrequently", "Occasionally stuns player"],
                health: 1400,
                maxHP: 1400,
                armor: 100,
                magicResist: 10,
                attackDamage: 50,
                attackDelay: 5000,
                tenacity: 0,
                stun: 0.05,
                physical: 1
            },
            {
                name: "Fat Baron",
                traits: ["Deals low damage", "High armor and magic resist", "Attacks infrequently", "Sometimes stuns the player", "High tenacity"],
                health: 2000,
                maxHP: 2000,
                armor: 100,
                magicResist: 100,
                attackDamage: 20,
                attackDelay: 5000,
                tenacity: 0.5,
                stun: 0.04,
                physical: 0.52
            },
            {
                name: "Assassin Baron",
                traits: ["High attack speed", "High attack damage", "Very low health, and armor", "Moderate Magic Resist", "Does not stun player"],
                health: 400,
                maxHP: 400,
                armor: 10,
                magicResist: 80,
                attackDamage: 100,
                attackDelay: 1000,
                tenacity: 0,
                stun: 0,
                physical: 0.5
            },
            {
                name: "Elf Baron",
                traits: ["Very High Attack Speed", "Low Attack damage", "Average defense stats.", "Ocassionally stuns player"],
                health: 1200,
                maxHP: 1200,
                armor: 40,
                magicResist: 40,
                attackDamage: 10,
                attackDelay: 500,
                tenacity: 0.15,
                stun: 0.06,
                physical: 0.53
            }
        ],


        //Barons Encounterable at levels 5 through 6.
        [
            {
                name: "Cuckoo Baron",
                traits: ["High health", "Deals no damage", "Only stuns player"],
                health: 1500,
                maxHP: 1500,
                armor: 80,
                magicResist: 80,
                attackDamage: 0,
                attackDelay: 1000,
                tenacity: 0,
                stun: 0.25,
                physical: 1,
            },
            {
                name: "Angry Baron",
                traits: ["High health", "High attack speed", "High attack damage", "Mainly deals physical damage"],
                health: 1800,
                maxHP: 1800,
                armor: 120,
                magicResist: 75,
                attackDamage: 80,
                attackDelay: 2000,
                tenacity: 0,
                stun: 0,
                physical: 0.8
            },
            {
                name: "Wizard Baron",
                traits: ["Only deals magic damage", "High magic resistance", "Attacks frequently", "Sometimes stuns the player"],
                health: 1500,
                maxHP: 1500,
                armor: 75,
                magicResist: 120,
                attackDamage: 100,
                attackDelay: 2000,
                tenacity: 0.15,
                stun: 0.15,
                physical: 0.15
            },
            {
                name: "Jolly Baron",
                traits: ["Very High Health and Defense", "Medium Damage", "Average Attack Speed", "Occasionally stuns player", "High tenacity"],
                health: 2000,
                maxHP: 2000,
                armor: 200,
                magicResist: 200,
                attackDamage: 50,
                attackDelay: 2000,
                tenacity: 0.35,
                stun: 0.15,
                physical: 0.5
            },
            {
                name: "Hungry Baron",
                traits: ["Deals High physical damage", "Fast attack speed", "Does not stun player.", "Average health and armor", "Low Magic Resistance"],
                health: 1000,
                maxHP: 1000,
                armor: 180,
                magicResist: 25,
                attackDamage: 80,
                attackDelay: 500,
                tenacity: 0,
                stun: 0,
                physical: 0.80
            },
            {
                name: "Big Baron",
                traits: ["Deals low damage", "Extremely high health", "High armor and magic resist", "Sometimes stuns the player"],
                health: 2000,
                maxHP: 2000,
                armor: 200,
                magicResist: 200,
                attackDamage: 50,
                attackDelay: 1500,
                tenacity: 0.25,
                stun: 0.15,
                physical: 0.60
            }
        ],

        //Barons Encounterable at levels 7 through 8.
        [
            {
                name: "Furious Baron",
                traits: ["High health", "High attack speed", "High attack damage", "Mainly deals physical damage"],
                health: 3000,
                maxHP: 3000,
                armor: 120,
                magicResist: 75,
                attackDamage: 150,
                attackDelay: 2000,
                tenacity: .15,
                stun: 0,
                physical: 0.8
            },
            {
                name: "Grand Wizard Baron",
                traits: ["Only deals magic damage", "High magic resistance", "Attacks frequently", "Sometimes stuns the player"],
                health: 2500,
                maxHP: 2500,
                armor: 75,
                magicResist: 120,
                attackDamage: 200,
                attackDelay: 2000,
                tenacity: 0.15,
                stun: 0.15,
                physical: 0.15
            },
            {
                name: "Santa Baron",
                traits: ["Very High Health and Defense", "Average Attack Speed", "Occasionally stuns player", "High tenacity"],
                health: 4000,
                maxHP: 4000,
                armor: 200,
                magicResist: 200,
                attackDamage: 100,
                attackDelay: 3000,
                tenacity: 0.35,
                stun: 0.50,
                physical: 0.5
            },
            {
                name: "Starving Baron",
                traits: ["Deals High physical damage", "Fast attack speed", "Does not stun player.", "Average health and armor", "Low Magic Resistance"],
                health: 2000,
                maxHP: 2000,
                armor: 180,
                magicResist: 25,
                attackDamage: 60,
                attackDelay: 800,
                tenacity: .15,
                stun: 0,
                physical: 0.80
            },
            {
                name: "Tank Baron",
                traits: ["Deals low damage", "Extremely high health", "High armor and magic resist", "Sometimes stuns the player"],
                health: 4500,
                maxHP: 4500,
                armor: 200,
                magicResist: 200,
                attackDamage: 50,
                attackDelay: 1500,
                tenacity: 0.25,
                stun: 0.15,
                physical: 0.60
            }
        ],



    ];