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
        baronfight: "Hitting an enemy adds a stack for 4 seconds. Landing 3 stacks on the enemy will destroy the stacks to deal 20% of their maximum HP."
    },
    8008: {
        league: "1.5 seconds after attacking a champion, increase attack speed.",
        baronfight: "After clearing 6 or more pieces increase attack speed (clear speed) by 50% for 10 seconds."
    },
    8009: {
        league: "Restore all mana spent when killing an enemy champion in past 7 sec",
        baronfight: "Restore mana to 100% whenever you clear 6 or more pieces."
    },
    8014: {
        league: "Deal Increased damage to champions below 40% HP.",
        baronfight: "Deal 50% more damage to enemies below 40% HP."
    },
    8017: {
        leauge: "Deal increased damage to champions with more HP than you.",
        baronfight: "Deal 50% more damage when enemies have more HP than you."
    },
    8021: {
        league: "Energized Attacks (From movement), deal additional damage and grant movement speed",
        baronfight: "When dodging an attack, your next attack will deal 20% of their maximum HP as additional damage and double your evasion rate for 10 seconds."
    },
    8105: {
        league: "Gain out of combat move speed",
        baronfight: "Clearing yellow orbs permanently increase clear speed by 30%."
    },
    8112: {
        league: "Hitting a champion adds a stack. 3 Stacks will electrocute the target for bonus dmg",
        baronfight: "Hitting an enemy adds a stack for 4 seconds. Landing 3 stacks on the enemy will destroy the stacks to deal 20% of their maximum HP."
    },
    8120: {
        league: "Entering brush will begin a channel that will summon a ghost poro ward",
        baronfight: "Holding your mouse over a piece for 1 second will transform it into a ghost poro that can be ANY color (8 second cooldown)."
    },
    8124: {
        league: "Give your boots an active ability: Channel for 3 seconds then gain 45% Movespeed until you enter combat",
        baronfight: "Gain an Active: Dash - Channel for 3 seconds then triple clearing speed for 20 seconds."
    },
    8126: {
        league: "You deal bonus damage to impaired enemies.",
        baronfight: "When your enemy  is impaired, you deal double damage"
    },
    8128: {
        league: "Killing enemies drop soul essence, which empower your next attack depending on amount collected",
        baronfight: "Clearing 6 or more pieces will empower your next attack to deal additional damage."
    },
    8134: {
        league: "Reduce active cooldowns from items by 10%",
        baronfight: "Reduce cooldowns of ALL abilities by 50%."
    },
    8135: {
        league: "Heal for 2.5% of damage dealt by your abilities.",
        baronfight: "Heal for 30% of ALL damage dealt."
    },
    8136: {
        league: "Killing enemy wards replace it with an allied zombie ward.",
        baronfight: "Enemy wards can now appear as pieces. When cleared, they reappear as zombie wards that can be cleared as if they were ANY color."
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
        baronfight: "After using any active ability, your next attack ignores all armor and magic resistance."
    },
    8210: {
        league: "Gain 10% CDR at level 10",
        baronfight: "After 30 seconds, gain 50% CDR on ALL abilities"
    },
    8214: {
        league: "Damaging champions summon Aery to attack them, (She's on cooldown as she returns to you though.)",
        baronfight: "Damaging enemies summon Aery to attack them (She's on cooldown as she returns to you though.)"
    },
    8224: {
        league: "Dropping below 30% HP grants a shield.",
        baronfight: "Dropping below 30% HP grants you a shield for 20% of your Max HP."
    },
    8226: {
        league: "Every 75s your next ability costs 0 mana and restore 8% mana",
        baronfight: "Every 4th ability you cast is FREE and restores 25% of your Max MP."
    },
    8229: {
        league: "Damaging a champion hurls a comet at them for more damage (20-8s cd)",
        baronfight: "Damaging an enemy hurls a comet at them for more damage."
    },
    8230: {
        league: "Damaging enemies add stacks, 3 stacks grants move speed and slow resistance",
        baronfight: "Damaging enemies add stacks that last 4 seconds. Landing 3 stacks will increase evasion rate by 20% for 5 seconds."
    },
    8232: {
        league: "Gain movespeed, AD, AP while in the river.",
        baronfight: "Clearing Blue Orbs increase evasion rate by 30% for 5 seconds."
    },
    8233: {
        league: "Gain AD/AP when above 70% HP",
        baronfight: "When above 70% HP, deal 40% increased damage."
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
        baronfight: "All attacks burn enemies for an additional 30 damage."
    },
    8242: {
        league: "Gain 10% Tenacity for each summoner spell on cooldown, 15% Slow resistance when casting a summoner spell",
        baronfight: "For each ability on cooldown, gain 20% Tenacity. "
    },
    8243: {
        league: "5% CDR on your ult, increased by 2% everytime you ult, up to 15%",
        baronfight: "Your ult's cooldown is reduced by 30%. "
    },
    8299: {
        league: "Deal more damage the lower HP you have",
        baronfight: "Deal 2% more damage for every 1% of HP you're missing."
    },
    8304: {
        league: "Can't buy boots, but get them for free at 10 mins",
        baronfight: "After 30 seconds, gain 20% Evasion Rate"
    },
    8306: {
        league: "Flash replaced by challened hexflash",
        baronfight: "When Disintegrate is on cooldown, gain hex-disentegrate which deals damage based on cooldown remaining."
    },
    8313: {
        league: "Gain free stopwatch that is worth less at beginning of game",
        baronfight: "Gain free stopwatch active for one-time use each game. When using it, enter stasis for 10 seconds."
    },
    8316: {
        league: "Start game with 6 minion dematerializers, killing an enemy minion for free",
        baronfight: "Start each round with 10 dematerializers. Activate them to destroy any orb on your field."
    },
    8321: {
        league: "You can enter debt to buy items",
        baronfight: "You can borrow 1 potion (Health or Mana) from the store at any time each round. If you collect that potion later, you can borrow another one."
    },
    8326: {
        league: "Reduces summoner spell cooldown by 25%, and allows you to trade spells in store (with summoner shards accumulated over time)",
        baronfight: "Reduce all cooldowns by 15%. Accumulate summoner shards in game to upgrade your abilities"
    },
    8339: {
        league: "Gain 100HP but deal 10% less damage for first 10 mins",
        baronfight: "Increase HP by 300 by deal 10% less damage for the first 30 seconds."
    },
    8345: {
        league: "Get free biscuit every 3 mins",
        baronfight: "Gain a free biscuit every 10 seconds that restore 10% HP and MP."
    },
    8347: {
        league: "Gain 5% CDR and increase cap to 45%",
        baronfight: "Reduce all cooldowns by 25%. "
    },
    8351: {
        league: "Basic attack slow enemies",
        baronfight: "Damaging enemies will slow their attacks by 20%."
    },
    8359: {
        league: "Basic attacks are empowered to give consumables/gold after using an ability",
        baronfight: "Certain orbs will drop potions."
    },
    8410: {
        league: "Gain move speed when approaching move impaired enemies",
        baronfight: "Increase evasion rate by 20% for 5 seconds whenever your enemy is stunned."
    },
    8429: {
        league: "After 10 mins, gain constant armor/mr and % armor/mr",
        baronfight: "After 30 seconds, increase armor and magic resistance by 10 every 10 seconds."
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
        baronfight: "Gain a stack everytime you clear 8 seconds before the next one. At 8 stacks, your next attack deals damage equal to 30% of your health."
    },
    8439: {
        league: "Immobilizing enemies grant bonus armor and MR for 2.5 seconds, after which a shockwave will occur dealing damage",
        baronfight: "Stunning enemies grant you 30 armor/mr for 5 seconds. After, the bonus armor explodes, dealing 50 damage."
    },
    8444: {
        league: "Taking enemy champ damage causes you to start healing for 10 seconds",
        baronfight: "Everytime you take damage you also restore 20 health."
    },
    8446: {
        league: "Attacking structures grants stacks. at 6 stacks, next atk will hella damage the structure",
        baronfight: "Clearing green orbs grant a stack. Every 5th stack will damage the enemy for 30% of its max HP."
    },
    8451: {
        league: "Enemy deaths permanently increase max HP",
        baronfight: "Every orb you clear increases your HP and max HP by 10."
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
        baronfight: "All excess healing from potions and lifesteal is converted into a permanent shield."
    },
    9103: {
        league: "Killing monsters grant stacks, increasing lifesteal.",
        baronfight: "Everytime you clear 6 or more pieces, gain 8% permanent lifesteal."
    },
    9104: {
        league: "Killing monsters grant stacks, Increasing attack speed.",
        baronfight: "Everytime you clear 6 or more pieces, gain 50% permanent clear speed."
    },
    9105: {
        league: "Killing monsters grant stacks, increase tenacity",
        baronfight: "Everytime you clear 6 or more pieces, reduce stun/blind durations by 20%."
    },
    9111: {
        league: "Killing enemy champions restore 12% missing HP and grant 25 gold",
        baronfight: "Clearing 6 or more pieces restores 25% of your HP."
    }
};