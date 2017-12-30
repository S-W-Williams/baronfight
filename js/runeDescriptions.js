const runeDescriptions = {
    8000: {
        baronfight: "Become a Legend - Precision runes are focused on attacks and sustained damage. Primarily for marksmen, select this branch if you want to empower your basic attacks."
    },
    8100: {
        baronfight: "Hunt and Eliminate   Prey - Domination runes are focused on burst damage and target access. Select this branch if you access to fast damage, increased burst, and general utility."
    },
    8200: {
        baronfight: "Unleash Destruction - Sorcery runes are focused around ability damage and resource manipulation. Select this branch if you want to empower your abilities and ease their costs."
    },
    8300: {
        baronfight: "Outwit Mere Mortals - Inspiration runes are focused around creativity and rule bending. Select this branch if you enjoy using unique tools and abilities to outwit your opponent."
    },
    8400: {
        baronfight: "Live Forever - Resolve runes are focused around durability and crowd control. Select this branch if you want to outlive your enemies and solidify your resistances."
    },
    8005: {
        league: "Basic attacks apply stacks for 4 seconds. 3 Stacks deal bonus damage",
        baronfight: "Hitting an enemy adds a stack for 4 seconds. Landing 3 stacks on the enemy will destroy the stacks to deal 20% of their maximum HP as magic damage.",
        champions: [102, 81, 24, 429, 114, 110],
        stacks: true
    },
    8008: {
        league: "1.5 seconds after attacking a champion, increase attack speed.",
        baronfight: "After clearing 5 or more pieces, double clear speed for 5 seconds."
    },
    8009: {
        league: "Restore all mana spent when killing an enemy champion in past 7 sec",
        baronfight: "Restore mana to 100% whenever you clear 6 or more pieces."
    },
    8014: {
        league: "Deal Increased damage to champions below 40% HP.",
        baronfight: "Your orb clears deal double damage to enemies below 40% HP."
    },
    8017: {
        leauge: "Deal increased damage to champions with more HP than you.",
        baronfight: "Your orb clears deal 50% more damage when enemies have more percentage HP than you do."
    },
    8021: {
        league: "Energized Attacks (From movement), deal additional damage and grant movement speed",
        baronfight: "When dodging an attack, deal 20% of your enemy's Max HP as magic damage and increase your evasion rate by 10% for 10 seconds."
    },
    8105: {
        league: "Gain out of combat move speed",
        baronfight: "Everytime you clear a set of yellow orbs, permanently increase clear speed by 10%."
    },
    8112: {
        league: "Hitting a champion 3 times within 3 seconds will electrocute the target for bonus damage.",
        baronfight: "Hitting an enemy adds a stack for 4 seconds. Landing 3 stacks on the enemy will destroy the stacks to deal 20% of their maximum HP as magic damage.",
        stacks: true
    },
    8120: {
        league: "Entering brush will begin a channel that will summon a ghost poro ward",
        baronfight: "Clicking and holding your mouse over a piece for 1 second will transform it into a ghost poro that can be used as ANY color."
    },
    8124: {
        league: "Give your boots an active ability: Channel for 3 seconds then gain 45% Movespeed until you enter combat",
        baronfight: "Gain an Active (3): Dash - Channel for 3 seconds (You cannot take any actions while channeling) then triple clearing speed for 20 seconds. This cannot be cast while already in effect."
    },
    8126: {
        league: "You deal bonus damage to impaired enemies.",
        baronfight: "When your enemy  is impaired, your orb clears deal double damage."
    },
    8128: {
        league: "Killing enemies drop soul essence, which empower your next attack depending on amount collected",
        baronfight: "Damage dealt from clearing 6 or more orbs will be doubled."
    },
    8134: {
        league: "Reduce active cooldowns from items by 10%",
        baronfight: "Reduce cooldowns of ALL abilities by 30%."
    },
    8135: {
        league: "Heal for 2.5% of damage dealt by your abilities.",
        baronfight: "Heal for 30% of ALL damage dealt."
    },
    8136: {
        league: "Killing enemy wards replace it with an allied zombie ward.",
        baronfight: "Yellow, Blue, and Red Trinkets can now appear as pieces. When cleared, they reappear as zombie wards that can be cleared as if they were ANY color."
    },
    8138: {
        league: "Enemy kills grant permanent AD or AP up to a cap.",
        baronfight: "Clearing 6 or more pieces permanently increases your attack damage by 10."
    },
    8139: {
        league: "Heal 18-35 HP every time you damage an enemy (20 sec cooldown)",
        baronfight: "Heal 15% of your max HP everytime you damage an enemy (20 second cooldown)"
    },
    8143: {
        league: "Damaging enemies after flash/blink/tele/stealth increases penetration",
        baronfight: "After using any active ability, your next orb clear will ignore ALL armor."
    },
    8210: {
        league: "Gain 10% CDR at level 10",
        baronfight: "After 30 seconds, gain 50% CDR on ALL abilities until the end of the round."
    },
    8214: {
        league: "Damaging champions summon Aery to attack them, (She's on cooldown as she returns to you though.)",
        baronfight: "Orb clears summon Aery to increase your damage by 50% (10 second cooldown)."
    },
    8224: {
        league: "Dropping below 30% HP grants a shield.",
        baronfight: "Restore 20% of your Max HP after falling below 30% Health (20 second cooldown)."
    },
    8226: {
        league: "Every 75s your next ability costs 0 mana and restore 8% mana",
        baronfight: "Every 4th ability you cast is FREE and restores 25% of your Max MP."
    },
    8229: {
        league: "Damaging a champion hurls a comet at them for more damage (20-8s cd)",
        baronfight: "Your damaging abilities (Q) hurls a comet at your enemy, doubling the damage."
    },
    8230: {
        league: "Damaging enemies add stacks, 3 stacks grants move speed and slow resistance",
        baronfight: "Damaging enemies add stacks that last 4 seconds. Landing 3 stacks will increase evasion rate by 20% for 5 seconds.",
        stacks: true
    },
    8232: {
        league: "Gain movespeed, AD, AP while in the river.",
        baronfight: "Clearing Blue Orbs increase evasion rate by 30% for 5 seconds."
    },
    8233: {
        league: "Gain AD/AP when above 70% HP",
        baronfight: "When above 70% HP, your orb clears deal 40% increased damage."
    },
    8234: {
        league: "Gain 3% Move speed, gain ad/ap based on current movespeed",
        baronfight: "Increase evasion rate by 10%. Gain 10 attack damage for every 10% evasion rate."
    },
    8236: {
        league: "Every 10 minutes, gain exponentially more AD/AP",
        baronfight: "Every 10 seconds, multiply your AD/AP by 1.1."
    },
    8237: {
        league: "Damaging enemies burn them for more damage for 1 sec (20s cooldown)",
        baronfight: "All orb clears burn enemies for an additional 30% damage."
    },
    8242: {
        league: "Gain 10% Tenacity for each summoner spell on cooldown, 15% Slow resistance when casting a summoner spell",
        baronfight: "For each ability on cooldown, gain 20% Tenacity. "
    },
    8243: {
        league: "5% CDR on your ult, increased by 2% everytime you ult, up to 15%",
        baronfight: "Your ultimate ability's (R Ability) cooldown is reduced by 30%. "
    },
    8299: {
        league: "Deal more damage the lower HP you have",
        baronfight: "Deal 2% more damage for every 1% of HP you're missing."
    },
    8304: {
        league: "Can't buy boots, but get them for free at 10 mins",
        baronfight: "After 30 seconds, gain 30% Evasion Rate"
    },
    8306: {
        league: "Flash replaced by challened hexflash",
        baronfight: "When Disintegrate is on cooldown, gain hex-disentegrate which deals a percentage of Disintegrate's damage equal to the % cooldown that has already passed."
    },
    8313: {
        league: "Gain free stopwatch that is worth less at beginning of game",
        baronfight: "Gain an active (4): Stasis - You cannot make any actions but you cannot be damaged for 10 seconds. Cooldown: 45 seconds."
    },
    8316: {
        league: "Start game with 6 minion dematerializers, killing an enemy minion for free",
        baronfight: "Start each round with 10 dematerializers. Activate (5) them to destroy any orb on your field."
    },
    8321: {
        league: "You can enter debt to buy items",
        baronfight: "Start each round with 1 additional health and mana potion."
    },
    8326: {
        league: "Reduces summoner spell cooldown by 25%, and allows you to trade spells in store (with summoner shards accumulated over time)",
        baronfight: "Reduce all cooldowns by 15%. Clearing 6 or more pieces will permanently increase ability damage by 10%."
    },
    8339: {
        league: "Gain 100HP but deal 10% less damage for first 10 mins",
        baronfight: "Increase HP by 300 but deal 10% less damage for the first 30 seconds."
    },
    8345: {
        league: "Get free biscuit every 3 mins",
        baronfight: "Eat a biscuit every 10 seconds that restores 10% HP and MP."
    },
    8347: {
        league: "Gain 5% CDR and increase cap to 45%",
        baronfight: "Reduce cooldowns of ALL abilities by 30%."
    },
    8351: {
        league: "Basic attack slow enemies",
        baronfight: "Clearing 5 or more orbs will slow enemy attacks by 50% for 5 seconds."
    },
    8359: {
        league: "Basic attacks are empowered to give consumables/gold after using an ability",
        baronfight: "Each orb clear you make has a 5% chance to drop either a red potion or a blue potion."
    },
    8410: {
        league: "Gain move speed when approaching move impaired enemies",
        baronfight: "Increase evasion rate by 20% for 5 seconds whenever your enemy is stunned."
    },
    8429: {
        league: "After 10 mins, gain constant armor/mr and % armor/mr",
        baronfight: "After 30 seconds, increase armor and magic resistance by 80."
    },
    8430: {
        league: "Gain Armor, which increases when healing",
        baronfight: "Permanently gain 50 armor."
    },
    8435: {
        league: "Gain MR, which increases when healing",
        baronfight: "Permanently gain 50 magic resistance."
    },
    8437: {
        league: "Gain stacks every 2 seconds in combat. 8 stacks make your next attack deal damage based on your max HP and heal you.",
        baronfight: "Hitting an enemy adds a stack for 4 seconds. Landing 3 stacks on the enemy will destroy the stacks to deal 30% of your maximum HP as magic damage.",
        stacks: true
    },
    8439: {
        league: "Immobilizing enemies grant bonus armor and MR for 2.5 seconds, after which a shockwave will occur dealing damage",
        baronfight: "Increase armor and magic resist by 60 for 5 seconds after your enemy is stunned."
    },
    8444: {
        league: "Taking enemy champ damage causes you to start healing for 10 seconds",
        baronfight: "Everytime you take damage you also restore 20 health."
    },
    8446: {
        league: "Attacking structures grants stacks. at 6 stacks, next atk will hella damage the structure",
        baronfight: "Clearing green orbs grant a stack. Every 5th stack will damage the enemy for 30% of its max HP as magic damage."
    },
    8451: {
        league: "Enemy deaths permanently increase max HP",
        baronfight: "Every set of orbs you clear permanently increases your HP and max HP by 10."
    },
    8453: {
        league: "Gain 5% Healing/shield power, increased when target is below 40% hp",
        baronfight: "All potions, shields, and healing is 50% stronger. This is increased to 100% when below 40% HP."
    },
    8463: {
        league: "Impairing movement of enemies mark them. Allies heal when attacking them.",
        baronfight: "Gain 40% lifesteal when attacking stunned enemies."
    },
    8465: {
        league: "Gain a shield before taking damage. Also applies to allies you shield.",
        baronfight: "Absorb 50 damage the next time you take damage (cooldown: 10 seconds)."
    },
    9101: {
        league: "Excess healing is converted to a temporary shield up to 10% MaxHP",
        baronfight: "You can heal past 100% HP."
    },
    9103: {
        league: "Killing monsters grant stacks, increasing lifesteal.",
        baronfight: "Everytime you clear 6 or more pieces, gain 1% permanent lifesteal."
    },
    9104: {
        league: "Killing monsters grant stacks, Increasing attack speed.",
        baronfight: "Everytime you clear 6 or more pieces, gain 2% permanent clear speed."
    },
    9105: {
        league: "Killing monsters grant stacks, increase tenacity",
        baronfight: "Everytime you clear 6 or more pieces, reduce stun/blind durations by 2%."
    },
    9111: {
        league: "Killing enemy champions restore 12% missing HP and grant 25 gold",
        baronfight: "Clearing 6 or more pieces restores 10% of your HP."
    }
};