var runesReforged = [
    {
        "id": 8100,
        "key": "Domination",
        "name": "Domination",
        "icon": "ASSETS/Perks/Styles/7200_Domination.dds",
        "slots": [
            {
                "runes": [
                    {
                        "id": 8112,
                        "key": "StormlordsMandate",
                        "name": "Electrocute",
                        "shortDesc": "Hitting a champion with 3 <b>separate</b> attacks or abilities in @WindowDuration@s deals bonus <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_AdaptiveDmg\">adaptive damage</lol-uikit-tooltipped-keyword>.",
                        "longDesc": "Hitting a champion with 3 <b>separate</b> attacks or abilities within @WindowDuration@s deals bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br>Damage: @DamageBase@ - @DamageMax@ (+@BonusADRatio.-1@ bonus AD, +@APRatio.-1@ AP) damage.<br><br>Cooldown: @Cooldown@ - @CooldownMin@s<br><br><hr></hr><i>'We called them the Thunderlords, for to speak of their lightning was to invite disaster.'</i>",
                        "icon": "ASSETS/Perks/Styles/Domination/TLords/TLords.dds",
                        "text": "Hitting a champion with 3 separate attacks or abilities within 3s deals bonus adaptive damage.\n" +
                        "\n" +
                        "Damage: 50 - 220 (+0.500000 bonus AD, +0.3 AP) damage.\n" +
                        "\n" +
                        "Cooldown: 50 - 25s"
                    },
                    {
                        "id": 8124,
                        "key": "KSLycanthropy",
                        "name": "Predator",
                        "shortDesc": "Add an active effect to your boots that grants a large boost of <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">MS</lol-uikit-tooltipped-keyword> and causes your next attack or ability to deal bonus <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_AdaptiveDmg\">adaptive damage</lol-uikit-tooltipped-keyword>.",
                        "longDesc": "Enchants your boots with the active effect '<font color='#c60300'>{{perk_displayname_KSLycanthropy}}</font>.'<br><br>{{ game_itemmod_bloodmoonboots }}",
                        "icon": "ASSETS/Perks/Styles/Domination/KSLycanthropy/KSLycanthropy.dds",
                        "text": "Enchants your boots with the active effect 'Predator.'\n" +
                        "\n" +
                        "Channel for 1.5s out of combat to gain 45% movement speed for 15s. Damaging attacks or abilities end this effect, dealing 60 - 140 (+0.4 bonus AD)(+0.25 AP) bonus adaptive damage.\n" +
                        "\n" +
                        "Cooldown: 180s - 120s. Starts the game on cooldown and goes on cooldown if interrupted while channeling."
                    },
                    {
                        "id": 8128,
                        "key": "KSSoulReaper",
                        "name": "Dark Harvest",
                        "shortDesc": "Champions, large minions, and large monsters drop soul essence on death. Touch souls to absorb them and deal bonus <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_AdaptiveDmg\">adaptive damage</lol-uikit-tooltipped-keyword> on your next attack based on total soul essence collected.",
                        "longDesc": "Champions, large minions, and large monsters drop soul essence on death. Collect souls to become <font color='#c60300'>Soul Charged</font>. Your next attack on a champion or structure consumes <font color='#c60300'>Soul Charged</font> to deal bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword>.<br><br><font color='#c60300'>Soul Charged</font> lasts @ONHDuration@s, increased to @ONHDurationLong@s after collecting @SoulsRequiredForIncreasedDuration@ soul essence.<br><br>Bonus damage: @DamageMin@ - @DamageMax@ (+<scaleAD>@ADRatio.2@ bonus AD</scaleAD>) (+<scaleAP>@APRatio.1@ AP</scaleAP>) + soul essence collected.<br><rules><br>Champions - @champstacks@ soul essence.<br>Monsters - @monsterstacks@ soul essence.<br>Minions - @minionstacks@ soul essence.</rules>",
                        "icon": "ASSETS/Perks/Styles/Domination/KSSoulReaper/KSSoulReaper.dds",
                        "text": "Champions, large minions, and large monsters drop soul essence on death. Collect souls to become Soul Charged. Your next attack on a champion or structure consumes Soul Charged to deal bonus adaptive damage.\n" +
                        "\n" +
                        "Soul Charged lasts 20s, increased to 300s after collecting 150 soul essence.\n" +
                        "\n" +
                        "Bonus damage: 40 - 80 (+0.25 bonus AD) (+0.2 AP) + soul essence collected.\n" +
                        "\n" +
                        "Champions - 6 soul essence.\n" +
                        "Monsters - 2 soul essence.\n" +
                        "Minions - 4 soul essence."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8126,
                        "key": "CheapShot",
                        "name": "Cheap Shot",
                        "shortDesc": "Deal bonus true damage to enemy champions with <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_ImpairAct\">impaired movement or actions</lol-uikit-tooltipped-keyword>. ",
                        "longDesc": "Damaging champions with <b>impaired movement or actions</b> deals @DamageIncMin@ - @DamageIncMax@ bonus true damage (based on level).<br><br>Cooldown: @Cooldown@s<br><rules>Activates on damage occurring after the impairment.</rules>",
                        "icon": "ASSETS/Perks/Styles/Domination/Bully/Bully.dds",
                        "text": "Damaging champions with impaired movement or actions deals 12 - 30 bonus true damage (based on level).\n" +
                        "\n" +
                        "Cooldown: 4s\n" +
                        "Activates on damage occurring after the impairment."
                    },
                    {
                        "id": 8139,
                        "key": "Feast",
                        "name": "Taste of Blood",
                        "shortDesc": "Heal when you damage an enemy champion.",
                        "longDesc": "Heal when you damage an enemy champion.<br><br>Healing: @HealAmount@-@HealAmountMax@ (+@ADRatio.-1@ bonus AD, +@APRatio.-1@ AP) health (based on level)<br><br>Cooldown: @Cooldown@s",
                        "icon": "ASSETS/Perks/Styles/Domination/Feast/GreenTerror_Feast.dds",
                        "text": "Heal when you damage an enemy champion.\n" +
                        "\n" +
                        "Healing: 18-35 (+0.20 bonus AD, +0.1 AP) health (based on level)\n" +
                        "\n" +
                        "Cooldown: 20s"
                    },
                    {
                        "id": 8143,
                        "key": "DashAttack",
                        "name": "Sudden Impact",
                        "shortDesc": "Gain a burst of Lethality and Magic Penetration after using a dash, leap, blink, teleport, or when leaving stealth.",
                        "longDesc": "After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you @BonusLethality.0@ Lethality and @BonusMpen.0@ Magic Penetration for @Duration@s.<br><br>Cooldown: @Cooldown@s",
                        "icon": "ASSETS/Perks/Styles/Domination/DashAttack/DashAttack.dds",
                        "text": "After exiting stealth or using a dash, leap, blink, or teleport, dealing any damage to a champion grants you 10 Lethality and 8 Magic Penetration for 5s.\n" +
                        "\n" +
                        "Cooldown: 4s"
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8136,
                        "key": "ZombieWard",
                        "name": "Zombie Ward",
                        "shortDesc": "After killing a ward, a friendly Zombie Ward is raised in its place. When your wards expire, they also reanimate as Zombie Wards.",
                        "longDesc": "After killing a ward, a friendly Zombie Ward is raised in its place. Additionally, when your wards expire, they reanimate as Zombie Wards.<br><br>Zombie Wards are visible, last for @WardDuration@s and don't count towards your ward limit.",
                        "icon": "ASSETS/Perks/Styles/Domination/ZombieWard/ZombieWard.dds",
                        "text": "After killing a ward, a friendly Zombie Ward is raised in its place. Additionally, when your wards expire, they reanimate as Zombie Wards.\n" +
                        "\n" +
                        "Zombie Wards are visible, last for 180s and don't count towards your ward limit."
                    },
                    {
                        "id": 8120,
                        "key": "ViciousPoro",
                        "name": "Ghost Poro",
                        "shortDesc": "When you enter brush, a poro appears. It will stay behind to give you vision.",
                        "longDesc": "Enter a brush to summon a poro after a brief channel. The poro will stay behind to give you vision until you summon a new one.<br><br>If an enemy enters brush with a poro in it, they scare it away, putting {{ perk_displayname_ViciousPoro }} on a @Cooldown@s cooldown.<br><br>Poro channel is interrupted if you take damage.",
                        "icon": "ASSETS/Perks/Styles/Domination/ViciousPoro/ViciousPoro.dds",
                        "text": "Enter a brush to summon a poro after a brief channel. The poro will stay behind to give you vision until you summon a new one.\n" +
                        "\n" +
                        "If an enemy enters brush with a poro in it, they scare it away, putting Ghost Poro on a 3s cooldown.\n" +
                        "\n" +
                        "Poro channel is interrupted if you enter combat with a champion."
                    },
                    {
                        "id": 8138,
                        "key": "WardSlayer",
                        "name": "Eyeball Collection",
                        "shortDesc": "Collect eyeballs for champion and ward <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">takedowns</lol-uikit-tooltipped-keyword>. Gain permanent AD or AP, <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Adaptive\">adaptive</lol-uikit-tooltipped-keyword> for each eyeball plus bonus upon collection completion.",
                        "longDesc": "Collect eyeballs for champion and ward takedowns. Gain {{ perk_subtext_AdaptiveForce }}, per eyeball collected. <br><br>Upon completing your collection at @MaxEyeballs@ eyeballs, additionally gain {{ perk_subtext_AdaptiveForce_EyeballCollection }}.<br><br>Collect @StacksPerTakedown@ eyeballs per champion kill, @StacksPerAssist@ per assist, and @StacksPerWard@ per ward takedown.",
                        "icon": "ASSETS/Perks/Styles/Domination/WardSlayer/WardSlayer.dds",
                        "text": "Collect eyeballs for champion and ward takedowns. Gain an adaptive bonus of 0.6 Attack Damage or 1 Ability Power, per eyeball collected. \n" +
                        "\n" +
                        "Upon completing your collection at 20 eyeballs, additionally gain an adaptive bonus of 6 attack damage, or 10 ability power.\n" +
                        "\n" +
                        "Collect 2 eyeballs per champion takedown, 1 eyeball per ward takedown."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8135,
                        "key": "InsatiableHunter",
                        "name": "Ravenous Hunter",
                        "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">takedowns</lol-uikit-tooltipped-keyword> grant permanent healing from ability damage. ",
                        "longDesc": "Heal for a percentage of the damage dealt by your abilities.<br>Healing: @StartingOmnivamp*100@% + @OmnivampPerStack*100@% per <i>Bounty Hunter</i> stack. <br><br>Earn a <i>Bounty Hunter</i> stack the first time you get a takedown on each enemy champion.<br><rules><br>Healing reduced to one third for Area of Effect abilities.</rules><br>",
                        "icon": "ASSETS/Perks/Styles/Domination/InsatiableHunter/InsatiableHunter.dds",
                        "text": "Heal for a percentage of the damage dealt by your abilities.\n" +
                        "Healing: 2.5% + 2.5% per Bounty Hunter stack. \n" +
                        "\n" +
                        "Earn a Bounty Hunter stack the first time you get a takedown on each enemy champion.\n" +
                        "\n" +
                        "Healing reduced to one third for Area of Effect abilities."
                    },
                    {
                        "id": 8134,
                        "key": "BigGameHunter",
                        "name": "Ingenious Hunter",
                        "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">takedowns</lol-uikit-tooltipped-keyword> grant permanent Active Item <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_CDR\">CDR</lol-uikit-tooltipped-keyword> (includes Trinkets).",
                        "longDesc": "Gain @StartingActiveItemCDR.0*100@% <b>Active Item CDR</b> plus an additional @ActiveItemCDRPerStack.0*100@% per <i>Bounty Hunter</i> stack (includes Trinkets).<br><br>Earn a <i>Bounty Hunter</i> stack the first time you get a takedown on each enemy champion.",
                        "icon": "ASSETS/Perks/Styles/Domination/BigGameHunter/BigGameHunter.dds",
                        "text": "Gain 10% Active Item CDR plus an additional 6% per Bounty Hunter stack (includes Trinkets).\n" +
                        "\n" +
                        "Earn a Bounty Hunter stack the first time you get a takedown on each enemy champion."
                    },
                    {
                        "id": 8105,
                        "key": "ProlificHunter",
                        "name": "Relentless Hunter",
                        "shortDesc": "<b>Unique</b> <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">takedowns</lol-uikit-tooltipped-keyword> grant permanent <b>out of combat <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">MS</lol-uikit-tooltipped-keyword></b>. ",
                        "longDesc": "Gain @StartingOOCMS@ <b>out of combat Movement Speed</b> plus @OOCMS.0@ per <i>Bounty Hunter</i> stack.<br><br>Earn a <i>Bounty Hunter</i> stack the first time you get a takedown on each enemy champion.",
                        "icon": "ASSETS/Perks/Styles/Domination/ProlificHunter/ProlificHunter.dds",
                        "text": "Gain 8 out of combat Movement Speed plus 8 per Bounty Hunter stack.\n" +
                        "\n" +
                        "Earn a Bounty Hunter stack the first time you get a takedown on each enemy champion."
                    }
                ]
            }
        ]
    },
    {
        "id": 8300,
        "key": "Inspiration",
        "name": "Inspiration",
        "icon": "ASSETS/Perks/Styles/7203_Whimsy.dds",
        "slots": [
            {
                "runes": [
                    {
                        "id": 8326,
                        "key": "KSAlchemicalEsoterica",
                        "name": "Unsealed Spellbook",
                        "shortDesc": "Exchange Summoner Shards at the shop to change your Summoner Spells during game. Your Summoner Spells have reduced cooldowns. <br>",
                        "longDesc": "Gain a Summoner Shard at @ShardFirstMinutes@ min and another every @ShardRechargeMinutes@ min after (Max @Maxshards@ shards).<br><br>While near the shop, you can exchange @ShardCost@ Summoner Shard to replace a Summoner Spell with a different one. <br><br>Additionally, your Summoner Spell Cooldowns are reduced by @SummonerCDR.0*100@%.<br><br><rules><i>Smite:</i> Buying Smite won't grant access to Smite items<br>You cannot have two of the same Summoner Spell</rules>",
                        "icon": "ASSETS/Perks/Styles/Inspiration/KSAlchemicalEsoterica/KSAlchemicalEsoterica.dds",
                        "text": "Gain a Summoner Shard at 2 min and another every 6 min after (Max 2 shards).\n" +
                        "\n" +
                        "While near the shop, you can exchange 1 Summoner Shard to replace a Summoner Spell with a different one. \n" +
                        "\n" +
                        "Additionally, your Summoner Spell Cooldowns are reduced by 25%.\n" +
                        "\n" +
                        "Smite: Buying Smite won't grant access to Smite items\n" +
                        "You cannot have two of the same Summoner Spell"
                    },
                    {
                        "id": 8351,
                        "key": "KSGlacialAugment",
                        "name": "Glacial Augment",
                        "shortDesc": "Your first attack against an enemy champion slows them (per unit cooldown). Slowing champions with active items shoots a freeze ray at them, creating a lingering slow zone.",
                        "longDesc": "Basic attacking a champion slows them for @SlowDuration.0@s. The slow increases in strength over its duration.<li><i>Ranged</i>: Ranged attacks slow by up to @SlowAmountBase.0*-100@% - @SlowAmountMax.0*-100@%</li> <li><i>Melee</i>: Melee attacks slow by up to @SlowAmountBaseMelee.0*-100@% - @SlowAmountMaxMelee.0*-100@%</li><br>Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for @SlowZoneDuration@s, slowing all units inside by @SlowZoneSlow*-100@%.<br><br>Cooldown: @UnitCDBase@-@UnitCD16@s per unit",
                        "icon": "ASSETS/Perks/Styles/Inspiration/KSGlacialAugment/KSGlacialAugment.dds",
                        "text": "Basic attacking a champion slows them for 2s. The slow increases in strength over its duration.\n" +
                        "Ranged: Ranged attacks slow by up to 20% - 40%\n" +
                        "Melee: Melee attacks slow by up to 40% - 50%\n" +
                        "\n" +
                        "Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 50%.\n" +
                        "\n" +
                        "Cooldown: 7-4s per unit"
                    },
                    {
                        "id": 8359,
                        "key": "KSLooter",
                        "name": "Kleptomancy",
                        "shortDesc": "After using an ability, your next attack will grant bonus gold if used on a champion. There's a chance you'll also gain a consumable.",
                        "longDesc": "After using an ability, your next attack will grant bonus gold if used on a champion. There's a chance you'll also gain a consumable.",
                        "icon": "ASSETS/Perks/Styles/Inspiration/KSLooter/KSLooter.dds",
                        "text": "After using an ability, your next attack on a champion grants bonus gold. There's a chance you'll also gain a consumable."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8306,
                        "key": "DontBlink",
                        "name": "Hextech Flashtraption",
                        "shortDesc": "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel, then blink to a new location.",
                        "longDesc": "While Flash is on cooldown it is replaced by <i>Hexflash</i>.<br><br><i>Hexflash</i>: Channel for @ChannelDuration@s to blink to a new location.<br><br>Cooldown: @CooldownTime@s. Goes on a @ChampionCombatCooldown@s cooldown when you enter champion combat.",
                        "icon": "ASSETS/Perks/Styles/Inspiration/DontBlink/DontBlink.dds",
                        "text": "While Flash is on cooldown it is replaced by Hexflash.\n" +
                        "\n" +
                        "Hexflash: Channel for 2s to blink to a new location.\n" +
                        "\n" +
                        "Cooldown: 20s. Goes on a 10s cooldown when you enter champion combat."
                    },
                    {
                        "id": 8345,
                        "key": "BiscuitsAndBonuses",
                        "name": "Biscuit Delivery",
                        "shortDesc": "Gain a free Biscuit every @BiscuitMinuteInterval@ min, until @SwapOverMinute@ min. Consuming a Biscuit permanently increases your max mana and restores health and mana.",
                        "longDesc": "Biscuit Delivery: Gain a {{game_item_displayname_2010}} every @BiscuitMinuteInterval@ mins, until @SwapOverMinute@ min.<br><br>Biscuits restore @HealthHealPercent.0*100@% of your missing health and mana. Consuming any Biscuit increases your mana cap by @PermanentMana@ mana permanently. <br><br><i>Manaless:</i> Champions without mana restore @HealthHealPercentManaless.0*100@% missing health instead.",
                        "icon": "ASSETS/Perks/Styles/Inspiration/BiscuitsAndBonuses/BiscuitsAndBonuses.dds",
                        "text": "Biscuit Delivery: Gain a Total Biscuit of Everlasting Will every 3 mins, until 12 min.\n" +
                        "\n" +
                        "Biscuits restore 15% of your missing health and mana. Consuming any Biscuit increases your mana cap by 40 mana permanently. \n" +
                        "\n" +
                        "Manaless: Champions without mana restore 20% missing health instead."
                    },
                    {
                        "id": 8313,
                        "key": "AllInGoodTime",
                        "name": "Perfect Timing",
                        "shortDesc": "Gain a free {{game_item_displayname_2420}}. {{game_item_displayname_2420}} has a one time use <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Stasis\">Stasis</lol-uikit-tooltipped-keyword> effect.",
                        "longDesc": "Start the game with a {{ game_item_displayname_2419 }} that transforms into a {{ game_item_displayname_2420 }} after @InitialCooldown.0@ min. {{ game_item_displayname_2420 }} has a one time use Stasis effect.<br><br>Reduces the cooldown of {{ game_item_displayname_3157 }}, {{ game_item_displayname_3026 }}, and {{ game_item_displayname_3193 }} by @PercentGAZhonyasCDR.0*100@%.",
                        "icon": "ASSETS/Perks/Styles/Style5/AllInGoodTime/AllInGoodTime.dds",
                        "text": "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6 min. Stopwatch has a one time use Stasis effect.\n" +
                        "\n" +
                        "Reduces the cooldown of Zhonya's Hourglass, Guardian Angel, and Gargoyle Stoneplate by 15%."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8304,
                        "key": "MagicalFootwear",
                        "name": "Magical Footwear",
                        "shortDesc": "You get free boots at @GiveBootsAtMinute@ min but you cannot buy boots before then. Each <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">takedown</lol-uikit-tooltipped-keyword> you get makes your boots come @SecondsSoonerPerTakedown@s sooner.",
                        "longDesc": "You get free {{game_item_displayname_2422}} at @GiveBootsAtMinute@ min, but you cannot buy boots before then. For each takedown you acquire the boots @SecondsSoonerPerTakedown@s sooner.<br><br>{{game_item_displayname_2422}} give you an additional +@AdditionalMovementSpeed@ Movement Speed and upgrade for 50 gold less.",
                        "icon": "ASSETS/Perks/Styles/Inspiration/MagicalFootwear/MagicalFootwear.dds",
                        "text": "You get free Slightly Magical Boots at 10 min, but you cannot buy boots before then. For each takedown you acquire the boots 30s sooner.\n" +
                        "\n" +
                        "Slightly Magical Boots give you an additional +10 Movement Speed and upgrade for 50 gold less."
                    },
                    {
                        "id": 8321,
                        "key": "NanaTaxman",
                        "name": "Future's Market",
                        "shortDesc": "You can enter debt to buy items.",
                        "longDesc": "You can enter debt to buy items. The amount you can borrow increases over time.<br><br>Lending Fee: @ExcessCostPenaltyFlat@ gold",
                        "icon": "ASSETS/Perks/Styles/Style5/NanaTaxman/NanaTaxman.dds",
                        "text": "You can enter debt to buy items. The amount you can borrow increases over time.\n" +
                        "\n" +
                        "Lending Fee: 50 gold\n" +
                        "Debt limit: 150 + 5/min\n" +
                        "(Debt doesn't become available until 2 minutes)"
                    },
                    {
                        "id": 8316,
                        "key": "TheClearChoice",
                        "name": "Minion Dematerializer",
                        "shortDesc": "Start the game with @GainedMinionKillers@ {{game_item_displayname_2403}}s. Killing minions with the item gives permanent bonus damage vs. that minion type.",
                        "longDesc": "Start the game with @GainedMinionKillers@ {{game_item_displayname_2403}}s that kill and absorb lane minions instantly. {{game_item_displayname_2403}}s are on cooldown for the first @InitialCooldown@s of the game.<br><br>Absorbing a minion increases your damage by +@DamageBonusForAnyAbsorbed.0*100@% against that type of minion permanently, and an extra +@DamageBonusPerAdditionalAbsorbed.0*100@% for each additional minion of that type absorbed.<br>",
                        "icon": "ASSETS/Perks/Styles/Inspiration/TheClearChoice/TheClearChoice.dds",
                        "text": "Start the game with 6 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 155s of the game.\n" +
                        "\n" +
                        "Absorbing a minion increases your damage by +4% against that type of minion permanently, and an extra +1% for each additional minion of that type absorbed."

                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8347,
                        "key": "Intelligence",
                        "name": "Cosmic Insight",
                        "shortDesc": "+@CDR*100@% <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_CDR\">CDR</lol-uikit-tooltipped-keyword><br>+@CDR*100@% Max CDR<br>+@CDR*100@% Summoner Spell CDR<br>+@CDR*100@% Item CDR",
                        "longDesc": "+@CDR*100@% CDR<br>+@CDR*100@% Max CDR<br>+@CDR*100@% Summoner Spell CDR<br>+@CDR*100@% Item CDR",
                        "icon": "ASSETS/Perks/Styles/Inspiration/Intelligence/Intelligence.dds",
                        "text": "+5% CDR\n" +
                        "+5% Max CDR\n" +
                        "+5% Summoner Spell CDR\n" +
                        "+5% Item CDR"
                    },
                    {
                        "id": 8410,
                        "key": "HotPursuit",
                        "name": "Approach Velocity",
                        "shortDesc": "Bonus <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">MS</lol-uikit-tooltipped-keyword> towards nearby ally champions that are <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_ImpairMov\">movement impaired</lol-uikit-tooltipped-keyword> or enemy champions that you impair.",
                        "longDesc": "Gain @MovementSpeedPercentBonus.0*100@% Movement Speed towards nearby ally champions that are movement impaired or enemy champions that you impair. <br><br>Range: @ActivationDistance@",
                        "icon": "ASSETS/Perks/Styles/Resolve/HotPursuit/HotPursuit.dds",
                        "text": "Gain 10% Movement Speed towards nearby ally champions that are movement impaired or enemy champions that you impair. \n" +
                        "\n" +
                        "Range: 1000"
                    },
                    {
                        "id": 8339,
                        "key": "TheThirdPath",
                        "name": "Celestial Body",
                        "shortDesc": "+@HealthBonus@ Health permanently<br>-@ChampionDamagePenalty*100@% damage to champions and monsters until @EndTime@ min",
                        "longDesc": "+@HealthBonus@ Health permanently<br>-@ChampionDamagePenalty*100@% damage to champions and monsters until @EndTime@ min<br><br><hr></hr><br><i>'The greatest legends live on in the stars.' <br>—Daphna the Dreamer</i>",
                        "icon": "ASSETS/Perks/Styles/Inspiration/TheThirdPath/TheThirdPath.dds",
                        "text": "+100 Health permanently\n" +
                        "-10% damage to champions and monsters until 10 min"
                    }
                ]
            }
        ]
    },
    {
        "id": 8000,
        "key": "Precision",
        "name": "Precision",
        "icon": "ASSETS/Perks/Styles/7201_Precision.dds",
        "slots": [
            {
                "runes": [
                    {
                        "id": 8005,
                        "key": "PressThreeAttacks",
                        "name": "Press the Attack",
                        "shortDesc": "Hitting an enemy champion @HitsRequired@ consecutive times makes them vulnerable, dealing bonus damage and causing them to take more damage from all sources for @AmpDuration@s.",
                        "longDesc": "Hitting an enemy champion with @HitsRequired@ consecutive basic attacks deals @MinDamage@ - @MaxDamage@ bonus <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>adaptive damage</font></lol-uikit-tooltipped-keyword> (based on level) and makes them vulnerable, increasing the damage they take by @AmpPotencySelf.0*100@% from all sources for @AmpDuration@s.",
                        "icon": "ASSETS/Perks/Styles/Precision/PressThreeAttacks/PressThreeAttacks.dds",
                        "text": "Hitting an enemy champion with 3 consecutive basic attacks deals 30 - 120 bonus adaptive damage (based on level) and makes them vulnerable, increasing the damage they take by 12% from all sources for 6s."
                    },
                    {
                        "id": 8008,
                        "key": "Berserk",
                        "name": "Lethal Tempo",
                        "shortDesc": "@LeadInDelay.1@s after damaging a champion gain a large amount of Attack Speed. Lethal Tempo allows you to temporarily exceed the attack speed limit.",
                        "longDesc": "@LeadInDelay.1@s after damaging a champion gain @AttackSpeedMin*100@ - @AttackSpeedMax*100@% Attack Speed (based on level) for @AttackSpeedBuffDurationMin@s. Attacking a champion extends the effect to @AttackSpeedBuffDurationMax@s.<br><br>Cooldown: @Cooldown@s<br><br>{{perk_displayname_FlowofBattle}} allows you to temporarily exceed the attack speed limit.",
                        "icon": "ASSETS/Perks/Styles/Precision/FlowofBattle/FlowofBattleTemp.dds",
                        "text": "1.5s after damaging a champion gain 30 - 80% Attack Speed (based on level) for 3s. Attacking a champion extends the effect to 6s.\n" +
                        "\n" +
                        "Cooldown: 10s\n" +
                        "\n" +
                        "Lethal Tempo allows you to temporarily exceed the attack speed limit."
                    },
                    {
                        "id": 8021,
                        "key": "KSFleetFootwork",
                        "name": "Fleet Footwork",
                        "shortDesc": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">MS</lol-uikit-tooltipped-keyword>.",
                        "longDesc": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized.<br><br>Energized attacks heal you for @HealBase@ - @HealMax@ (+@HealBonusADRatio.-1@ Bonus AD, +@HealAPRatio.-1@ AP) and grant +@MSBuff*100@% movement speed for @MSDuration.0@s.<br><rules>Healing is @MinionHealMod*100@% as effective when used on a minion.<br>Healing is increased by @HealCritMod*100@% of your critical damage modifier when triggered by a critical hit.</rules>",
                        "icon": "ASSETS/Perks/Styles/Precision/KSFleetFootwork/KSFleetFootwork.dds",
                        "text": "Attacking and moving builds Energy stacks. At 100 stacks, your next attack is Energized.\n" +
                        "\n" +
                        "Energized attacks heal you for 5 - 50 (+0.100000 Bonus AD, +0.200000 AP) and grant +30% Movement Speed for 1s.\n" +
                        "Healing is 60% as effective when used on a minion."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 9101,
                        "key": "Overheal",
                        "name": "Overheal",
                        "shortDesc": "Excess healing on you becomes a shield.",
                        "longDesc": "Excess healing on you becomes a shield, for up to @ShieldCapRatio.0*100@% of your total health + @MaxBaseShieldCap@.<br><br>Shield is built up from @ShieldGenerationRateSelf.0*100@% of excess self-healing, or @ShieldGenerationRateOtherMax.0*100@% of excess healing from allies.",
                        "icon": "ASSETS/Perks/Styles/Precision/Overheal.dds",
                        "text": "Excess healing on you becomes a shield, for up to 10% of your total health + 10.\n" +
                        "\n" +
                        "Shield is built up from 30% of excess self-healing, or 300% of excess healing from allies."
                    },
                    {
                        "id": 9111,
                        "key": "AdrenalineRush",
                        "name": "Triumph",
                        "shortDesc": "<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">Takedowns</lol-uikit-tooltipped-keyword> restore @MissingHealthRestored.0*100@% of your missing health and grant an additional @BonusGold@ gold. ",
                        "longDesc": "Takedowns restore @MissingHealthRestored.0*100@% of your missing health and grant an additional @BonusGold@ gold. <br><br><hr></hr><br><i>'The most dangerous game brings the greatest glory.' <br>—Noxian Reckoner</i>",
                        "icon": "ASSETS/Perks/Styles/Precision/DangerousGame.dds",
                        "text": "Takedowns restore 15% of your missing health and grant an additional 25 gold."
                    },
                    {
                        "id": 8009,
                        "key": "CastOnKill",
                        "name": "Presence of Mind",
                        "shortDesc": "For @BuffDuration@s after gaining a level or takedown any mana you spend is fully restored.",
                        "longDesc": "For @BuffDuration@s after gaining a level or takedown any mana you spend is fully restored.",
                        "icon": "ASSETS/Perks/Styles/Precision/LastResort/LastResortIcon.dds",
                        "text": "For 5s after gaining a level or takedown any mana you spend is fully restored."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 9104,
                        "key": "LegendDauntless",
                        "name": "Legend: Alacrity",
                        "shortDesc": "<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Attack Speed</b>. ",
                        "longDesc": "Gain @AttackSpeedBase*100@% attack speed plus an additional @AttackSpeedPerStack*100@% for every <i>Legend</i> stack (max @MaxLegendStacks@ stacks).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
                        "icon": "ASSETS/Perks/Styles/Precision/Legend_Heroism.dds",
                        "text": "Gain 3% attack speed plus an additional 1.5% for every Legend stack (max 10 stacks).\n" +
                        "\n" +
                        "Earn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill."
                    },
                    {
                        "id": 9105,
                        "key": "LegendTenacity",
                        "name": "Legend: Tenacity",
                        "shortDesc": "<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent <b>Tenacity</b>. ",
                        "longDesc": "Gain @TenacityBase*100@% tenacity plus an additional @TenacityPerStack*100@% for every <i>Legend</i> stack (max @MaxLegendStacks@ stacks).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
                        "icon": "ASSETS/Perks/Styles/Precision/Legend_Tenacity.dds",
                        "text": "Gain 5% tenacity plus an additional 1.5% for every Legend stack (max 10 stacks).\n" +
                        "\n" +
                        "Earn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill."
                    },
                    {
                        "id": 9103,
                        "key": "LegendInfamy",
                        "name": "Legend: Bloodline",
                        "shortDesc": "<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Takedown\">Takedowns</lol-uikit-tooltipped-keyword> on enemies grant permanent<b> Lifesteal</b>. ",
                        "longDesc": "Gain @LifeStealPerStack*100@% life steal for every <i>Legend</i> stack (max @MaxLegendStacks@ stacks).<br><br>Earn progress toward <i>Legend</i> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.",
                        "icon": "ASSETS/Perks/Styles/Precision/Legend_Infamy.dds",
                        "text": "Gain 0.8% life steal for every Legend stack (max 10 stacks).\n" +
                        "\n" +
                        "Earn progress toward Legend stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8014,
                        "key": "CoupDeGrace",
                        "name": "Coup de Grace",
                        "shortDesc": "Deal more damage to low health enemy champions.",
                        "longDesc": "Deal @BonusPercentDamage.0 *100@% more damage to champions who have less than @EnemyHealthPercentageThreshold*100@% health.<br><br>Additionally, takedowns on champions grant {{ perk_subtext_AdaptiveForce }} for @Duration@s.",
                        "icon": "ASSETS/Perks/Styles/Precision/CoupDeGrace/CoupDeGrace.dds",
                        "text": "Deal 10% more damage to champions who have less than 40% health.\n" +
                        "\n" +
                        "Additionally, takedowns on champions grant an adaptive bonus of 9 Attack Damage or 15 Ability Power for 10s."
                    },
                    {
                        "id": 8017,
                        "key": "GiantSlayer",
                        "name": "Cut Down",
                        "shortDesc": "Deal more damage to champions with more max health than you.",
                        "longDesc": "Deal @MinBonusDamagePercent.0*100@% more damage to champions with @MinHealthDifference@ more max health than you, increasing to @MaxBonusDamagePercent.0*100@% at @MaxHealthDifference@ more max health.",
                        "icon": "ASSETS/Perks/Styles/Precision/GiantSlayer/GiantSlayer.dds",
                        "text": "Deal 4% more damage to champions with 150 more max health than you, increasing to 10% at 2000 more max health.\n" +
                        "\n"
                    },
                    {
                        "id": 8299,
                        "key": "ToTheDeath",
                        "name": "Last Stand",
                        "shortDesc": "Deal more damage to champions while you are low on health.",
                        "longDesc": "Deal @MinBonusDamagePercent.0*100@% - @MaxBonusDamagePercent.0*100@% increased damage to champions while you are below @HealthThresholdStart.0*100@% health. Max damage gained at @HealthThresholdEnd.0*100@% health.",
                        "icon": "ASSETS/Perks/Styles/Sorcery/ToTheDeath/ToTheDeath.dds",
                        "text": "Deal 5%-12% increased damage to champions while you are below 60% health. Max damage gained at 30% health."
                    }
                ]
            }
        ]
    },
    {
        "id": 8400,
        "key": "Resolve",
        "name": "Resolve",
        "icon": "ASSETS/Perks/Styles/7204_Resolve.dds",
        "slots": [
            {
                "runes": [
                    {
                        "id": 8437,
                        "key": "KSRuinedKing",
                        "name": "Grasp of the Undying",
                        "shortDesc": "Every @TriggerTime@s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.",
                        "longDesc": "Every @TriggerTime@s in combat, your next basic attack on a champion will: <li>Deal bonus magic damage equal to @PercentHealthDamage.0@% of your max health</li><li>Heal you for @PercentHealthHeal*100@% of your max health</li><li>Permanently increase your health by @MaxHealthPerProc@</li><br><rules><i>Ranged Champions:</i> Damage and healing are halved and gain @RangedHealthPerProc@ permanent health instead.</rules>",
                        "icon": "ASSETS/Perks/Styles/Resolve/KSRuinedKing/KSRuinedKing.dds",
                        "text": "Every 4s in combat, your next basic attack on a champion will:\n" +
                        "Deal bonus magic damage equal to 4% of your max health\n" +
                        "Heal you for 2% of your max health\n" +
                        "Permanently increase your health by 5\n" +
                        "\n" +
                        "Ranged Champions: Damage and healing are halved and gain 2 permanent health instead."
                    },
                    {
                        "id": 8439,
                        "key": "Vengeance",
                        "name": "Aftershock",
                        "shortDesc": "After <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Immobilize\">immobilizing</lol-uikit-tooltipped-keyword> an enemy champion gain defenses and later deal a burst of <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_AdaptiveDmg\">adaptive damage</lol-uikit-tooltipped-keyword> around you.",
                        "longDesc": "After immobilizing an enemy champion, increase your Armor and Magic Resist by @FlatResists@ + @ResistInc.0*100@% for @DelayBeforeBurst.1@s. Then explode, dealing magic damage to nearby enemies.<br><br>Damage: @StartingBaseDamage@ - @MaxBaseDamage@ (+@HealthRatio.1@% of your maximum health)<br>Cooldown: @Cooldown@s",
                        "icon": "ASSETS/Perks/Styles/Resolve/VeteranVengeance/VeteranVengeance.dds",
                        "text": "After immobilizing an enemy champion, increase your Armor and Magic Resist by 20 + 30% for 2.5s. Then explode, dealing magic damage to nearby enemies.\n" +
                        "\n" +
                        "Damage: 40 - 140 (+3.5% of your maximum health)\n" +
                        "Cooldown: 20s"
                    },
                    {
                        "id": 8465,
                        "key": "KSBuddyShield",
                        "name": "Guardian",
                        "shortDesc": "Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage, you're both hasted and granted a shield.",
                        "longDesc": "{{ perk_shared_desc_KSBuddyShield }}<br><br>Cooldown: @Cooldown@s<br>Shield: @ShieldBase@ - @ShieldMax@ +(<scaleAP>@APRatio.-1@ AP</scaleAP>) + (<scalehealth>+@HPRatio.0*100@% bonus health</scalehealth>).<br>Haste: +@Haste*100@% Movement Speed.",
                        "icon": "ASSETS/Perks/Styles/Resolve/KSBuddyShield/KSBuddyShield.dds",
                        "text": "Guard allies within 175 units of you, and allies you target with spells for 2.5s. While Guarding, if you or the ally take damage, both of you gain a shield and are hasted for 1.5s.\n" +
                        "\n" +
                        "Cooldown: 45s\n" +
                        "Shield: 60 - 150 +(0.200000 AP) + (+10% bonus health).\n" +
                        "Haste: +20% Movement Speed."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8242,
                        "key": "Recharge",
                        "name": "Unflinching",
                        "shortDesc": "After casting a Summoner Spell, gain Tenacity and Slow Resistance for a short duration. Additionally, gain Tenacity and Slow Resistance for each Summoner Spell on cooldown. ",
                        "longDesc": "After casting a Summoner Spell, gain @BonusTenacity*100@% Tenacity and Slow Resistance for @BuffDuration@s. Additionally, gain @PersistTenacity*100@% Tenacity and Slow Resistance for each Summoner Spell on cooldown. ",
                        "icon": "ASSETS/Perks/Styles/Sorcery/Recharge/Recharge.dds",
                        "text": "After casting a Summoner Spell, gain 15% Tenacity and Slow Resistance for 10s. Additionally, gain 10% Tenacity and Slow Resistance for each Summoner Spell on cooldown."
                    },
                    {
                        "id": 8446,
                        "key": "Siege",
                        "name": "Demolish",
                        "shortDesc": "Charge up a powerful attack against a tower while near it.",
                        "longDesc": "Charge up a powerful attack against a tower over @TotalSiegeTime@s, while within @DistanceToTower@ range of it. The charged attack deals @OutputDamagePerStack@ (+@MaxHealthPercentDamage.0 * 100@% of your max health) bonus physical damage.<br><br>Cooldown: @CooldownSeconds@s",
                        "icon": "ASSETS/Perks/Styles/Resolve/BrickHitHouse/BrickHitHouse.dds",
                        "text": "Charge up a powerful attack against a tower over 4s, while within 600 range of it. The charged attack deals 125 (+30% of your max health) bonus physical damage.\n" +
                        "\n" +
                        "Cooldown: 45s"
                    },
                    {
                        "id": 8463,
                        "key": "BloodFromStone",
                        "name": "Font of Life",
                        "shortDesc": "<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_ImpairMov\">Impairing</lol-uikit-tooltipped-keyword> the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked. ",
                        "longDesc": "Impairing the movement of an enemy champion marks them for @MarkDuration@s.<br><br>Ally champions who attack marked enemies heal for @FlatHealAmount@ + @HealthRatio.-1 * 100@% of your max health over @HealDuration@s. ",
                        "icon": "ASSETS/Perks/Styles/Resolve/BloodFromStone/BloodFromStone.dds",
                        "text": "Impairing the movement of an enemy champion marks them for 4s.\n" +
                        "\n" +
                        "Ally champions who attack marked enemies heal for 5 + 1% of your max health over 2s."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8430,
                        "key": "NemMarks",
                        "name": "Iron Skin",
                        "shortDesc": "Gain +@ArmorBase@ Armor. <br>Heals, including consumables, increase your Armor by @TotalExtraArmor*100@% temporarily.",
                        "longDesc": "Gain +@ArmorBase@ Armor. <br><br>Heal effects from consumables, heals for at least @FlatHealThreshold@ health and shields increase your Armor by @TotalExtraArmor*100@% for @EvolveArmorDuration@s.",
                        "icon": "ASSETS/Perks/Styles/Resolve/NemMarks/NemMarks.dds",
                        "text": "Gain +5 Armor. \n" +
                        "\n" +
                        "Heal effects from consumables, heals for at least 20 health and shields increase your Armor by 5% for 3s."
                    },
                    {
                        "id": 8435,
                        "key": "NemMage",
                        "name": "Mirror Shell",
                        "shortDesc": "Gain +@MRBase@ Magic Resist. <br>Heals, including consumables, increase your Magic Resist by @EvolveBonusMR*100@% temporarily.<br>",
                        "longDesc": "Gain +@MRBase@ Magic Resist. <br><br>Heal effects from consumables, heals for at least @FlatHealThreshold@ health and shields increase your Magic Resist by @EvolveBonusMR*100@% for @EvolveShellDuration@s. ",
                        "icon": "ASSETS/Perks/Styles/Resolve/NemMage/NemMage.dds",
                        "text": "Gain +5 Magic Resist. \n" +
                        "\n" +
                        "Heal effects from consumables, heals for at least 20 health and shields increase your Magic Resist by 5% for 3s."
                    },
                    {
                        "id": 8429,
                        "key": "NemFighter",
                        "name": "Conditioning",
                        "shortDesc": "After @MinutesRequired@ min gain +@ArmorBase@ Armor and +@MRBase@ Magic Resist and increase your Armor and Magic Resist by @ExtraResist@%.",
                        "longDesc": "{{ perk_short_desc_NemFighter }}",
                        "icon": "ASSETS/Perks/Styles/Resolve/NemFighter/NemFighter.dds",
                        "text": "After 10 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 5%."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8451,
                        "key": "HealthBandit",
                        "name": "Overgrowth",
                        "shortDesc": "Gain additional permanent max health when minions or monsters die near you.",
                        "longDesc": "Permanently gain @MaxHealthRatioPerTier*100@% maximum health for every @UnitsPerTier@ monsters or enemy minions that die near you.",
                        "icon": "ASSETS/Perks/Styles/Resolve/HealthBandit/HealthBandit.dds",
                        "text": "Permanently gain 0.2% maximum health for every 8 monsters or enemy minions that die near you."
                    },
                    {
                        "id": 8453,
                        "key": "AmpShields",
                        "name": "Revitalize",
                        "shortDesc": "Heals and shields you cast or receive are @StandardAmp.0@% stronger and increased by an additional @ExtraAmp.0@% on low health targets.",
                        "longDesc": "Heals and shields you cast or receive are @StandardAmp.0@% stronger and increased by an additional @ExtraAmp.0@% on targets below @HealthCutoff.0@% health.",
                        "icon": "ASSETS/Perks/Styles/Resolve/AmpShields/AmpShields.dds",
                        "text": "Heals and shields are 5% stronger and increased by an additional 10% on targets below 40% health."
                    },
                    {
                        "id": 8444,
                        "key": "SecondWind",
                        "name": "Second Wind",
                        "shortDesc": "After taking damage from an enemy champion heal back some missing health over time. ",
                        "longDesc": "After taking damage from an enemy champion, heal for @RegenPercentMax.0*100@% of your missing health +@RegenFlat.0@ over @RegenSeconds@s.",
                        "icon": "ASSETS/Perks/Styles/Resolve/SecondWind/SecondWind.dds",
                        "text": "After taking damage from an enemy champion, heal for 4% of your missing health +6 over 10s."
                    }
                ]
            }
        ]
    },
    {
        "id": 8200,
        "key": "Sorcery",
        "name": "Sorcery",
        "icon": "ASSETS/Perks/Styles/7202_Sorcery.dds",
        "slots": [
            {
                "runes": [
                    {
                        "id": 8214,
                        "key": "KSPerxie",
                        "name": "Summon Aery",
                        "shortDesc": "Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.",
                        "longDesc": "Your attacks and abilities send Aery to a target, damaging enemy champions or shielding allies.<br><br>Damage: @DamageBase@ - @DamageMax@ based on level (+<scaleAP>@DamageAPRatio.-1@ AP</scaleAP> and +<scaleAD>@DamageADRatio.-1@ bonus AD</scaleAD>)<br>Shield: @ShieldBase@ - @ShieldMax@ based on level (+<scaleAP>@ShieldRatio.-1@ AP</scaleAP> and +<scaleAD>@ShieldRatioAD.-1@ bonus AD</scaleAD>) <br><br>Aery cannot be sent out again until she returns to you.",
                        "icon": "ASSETS/Perks/Styles/Sorcery/KSPerxie/KSPerxie.dds",
                        "text": "Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.\n" +
                        "\n" +
                        "Damage: 20 - 60 based on level (+0.100000 AP and +0.150000 bonus AD)\n" +
                        "Shield: 30 - 80 based on level (+0.250000 AP and +0.400000 bonus AD) \n" +
                        "\n" +
                        "Aery cannot be sent out again until she returns to you."
                    },
                    {
                        "id": 8229,
                        "key": "KSDoomsayer",
                        "name": "Arcane Comet",
                        "shortDesc": "Damaging a champion with an ability hurls a damaging comet at their location.",
                        "longDesc": "Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.<br><br><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>Adaptive Damage</font></lol-uikit-tooltipped-keyword>: @DamageBase@ - @DamageMax@ based on level (<scaleAP>+@APRatio.-1@ AP</scaleAP> and <scaleAD>+@ADRatio.-1@ bonus AD</scaleAD>)<br>Cooldown: @RechargeTime@ - @RechargeTimeMin@s<br><rules><br>Cooldown Reduction:<br>Single Target: @PercentRefund*100@%.<br>Area of Effect: @AoEPercentRefund*100@%.<br>Damage over Time: @DotPercentRefund*100@%.<br></rules>",
                        "icon": "ASSETS/Perks/Styles/Sorcery/KSDoomsayer/KSDoomsayer.dds",
                        "text": "Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces its remaining cooldown.\n" +
                        "\n" +
                        "Adaptive Damage: 30 - 100 based on level (+0.200000 AP and +0.350000 bonus AD)\n" +
                        "Cooldown: 20 - 8s\n" +
                        "\n" +
                        "Cooldown Reduction:\n" +
                        "Single Target: 20%.\n" +
                        "Area of Effect: 10%.\n" +
                        "Damage over Time: 5%."
                    },
                    {
                        "id": 8230,
                        "key": "KSSpellslingersSurge",
                        "name": "Phase Rush",
                        "shortDesc": "Hitting an enemy champion with 3 <b>separate</b> attacks or abilities grants a burst of <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">MS</lol-uikit-tooltipped-keyword>. ",
                        "longDesc": "Hitting an enemy champion with 3 attacks or <b>separate</b> abilities within @Window@s grants @HasteBase*100@ - @HasteMax*100@% Movement Speed based on level and @SlowResist*100@% Slow Resistance.<br><br>Duration: @Duration@s<br>Cooldown: @Cooldown@s",
                        "icon": "ASSETS/Perks/Styles/Sorcery/KSSpellslingersSurge/KSSpellslingersSurge.dds",
                        "text": "Hitting an enemy champion with 3 attacks or separate abilities within 3s grants 15 - 40% Movement Speed based on level.\n" +
                        "\n" +
                        "Duration: 3s\n" +
                        "Cooldown: 15s\n" +
                        "Melee: Additionally, gain 75% Slow Resistance for the duration."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8224,
                        "key": "SpellparrySigil",
                        "name": "Nullifying Orb",
                        "shortDesc": "Gain a magic damage shield when taken to low health by magic damage.",
                        "longDesc": "When you take magic damage that would reduce your Health below @PercHealthTrigger.0*100@%, gain a shield that absorbs @ShieldMin@ - @ShieldMax@ magic damage based on level (<scaleAP>+@APRatio.-1@ AP</scaleAP> and <scaleAD>+@ADRatio.-1@ bonus AD</scaleAD>) for @ShieldDuration@s.<br><br>Cooldown: @Cooldown@s",
                        "icon": "ASSETS/Perks/Styles/Sorcery/PokeShield/Pokeshield.dds",
                        "text": "When you take magic damage that would reduce your Health below 30%, gain a shield that absorbs 40 - 120 magic damage based on level (+0.100000 AP and +0.150000 bonus AD) for 4s.\n" +
                        "\n" +
                        "Cooldown: 60s"
                    },
                    {
                        "id": 8226,
                        "key": "ManaflowBand",
                        "name": "Manaflow Band",
                        "shortDesc": "Periodically your next ability used has its mana or energy cost refunded and restores some of your missing mana or energy.",
                        "longDesc": "Every @Cooldown.0@s, your next ability used has its mana or energy cost refunded, and restores @MPToRestoreRatio.0*100@% of your missing mana or energy.",
                        "icon": "ASSETS/Perks/Styles/Sorcery/Clearcasting/Clearcasting.dds",
                        "text": "Every 60s, your next ability used has its mana or energy cost refunded, and restores 8% of your missing mana or energy."
                    },
                    {
                        "id": 8243,
                        "key": "UltiMore",
                        "name": "The Ultimate Hat",
                        "shortDesc": "Your ultimate's cooldown is reduced. Each time you cast your ultimate, its cooldown is further reduced.",
                        "longDesc": "Your ultimate's cooldown is reduced by @StartingCDR@%. Each time you cast your ultimate, its cooldown is further reduced by @CDChunkPerStack@%. Stacks up to @MaxStacks@ times.",
                        "icon": "ASSETS/Perks/Styles/Sorcery/UltiMore/UltiMore.dds",
                        "text": "Your ultimate's cooldown is reduced by 5%. Each time you cast your ultimate, its cooldown is further reduced by 2%. Stacks up to 5 times."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8210,
                        "key": "Overcharger",
                        "name": "Transcendence",
                        "shortDesc": "Gain @MaxCDR*100@% <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_CDR\">CDR</lol-uikit-tooltipped-keyword> when you reach level @LevelToTurnOn@. Excess CDR becomes AP or AD, <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Adaptive\">adaptive</lol-uikit-tooltipped-keyword>.",
                        "longDesc": "Gain @MaxCDR*100@% CDR when you reach level @LevelToTurnOn@.<br><br>Each percent of CDR exceeding the CDR limit is converted to {{ perk_subtext_AdaptiveForce }}.",
                        "icon": "ASSETS/Perks/Styles/Sorcery/Overcharger/Overcharger.dds",
                        "text": "Gain 10% CDR when you reach level 10.\n" +
                        "\n" +
                        "Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus of 1.2 Attack Damage or 2 Ability Power."
                    },
                    {
                        "id": 8234,
                        "key": "Surge",
                        "name": "Celerity",
                        "shortDesc": "Gain @PercentMS.0@% extra <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">MS</lol-uikit-tooltipped-keyword>. Gain extra AP or AD, <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Adaptive\">adaptive</lol-uikit-tooltipped-keyword> based on your bonus MS. ",
                        "longDesc": "Gain @PercentMS.0@% increased Movement Speed and add @PercentOfMOvespeedAsPrimaryStat.0@% of your Bonus Movement Speed to your AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword>. ",
                        "icon": "ASSETS/Perks/Styles/Sorcery/SpeedDemon/SpeedDemonTemp.dds",
                        "text": "Gain 4% increased Movement Speed and add 8% of your Bonus Movement Speed to your AP or AD, adaptive (based on level)."
                    },
                    {
                        "id": 8233,
                        "key": "FlawlessCombatant",
                        "name": "Absolute Focus",
                        "shortDesc": "While above @HealthPercent*100@% health, gain extra <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_AdaptiveDmg\">adaptive damage</lol-uikit-tooltipped-keyword>.",
                        "longDesc": "While above @HealthPercent*100@% health, gain {{ perk_subtext_AdaptiveForce_Max }} (based on level).",
                        "icon": "ASSETS/Perks/Styles/Sorcery/FlawlessCombatant/FlawlessCombatant.dds",
                        "text": "While above 70% health, gain an adaptive bonus of up to 24 attack damage or 40 ability power (based on level)."
                    }
                ]
            },
            {
                "runes": [
                    {
                        "id": 8237,
                        "key": "Spellburn",
                        "name": "Scorch",
                        "shortDesc": "Your first ability hit every @BurnlockoutDuration@s burns champions.",
                        "longDesc": "Your next ability hit sets champions on fire dealing @damage@ - @damagemax@ bonus magic damage based on level after @dotduration@s.<br><br>Cooldown: @BurnlockoutDuration@s",
                        "icon": "ASSETS/Perks/Styles/Sorcery/Spellburn/Spellburn.dds",
                        "text": "Your next ability hit sets champions on fire dealing 30 - 60 bonus magic damage based on level after 1s.\n" +
                        "\n" +
                        "Cooldown: 20s"
                    },
                    {
                        "id": 8232,
                        "key": "Roamer",
                        "name": "Waterwalking",
                        "shortDesc": "Gain <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">MS</lol-uikit-tooltipped-keyword> and AP or AD, <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Adaptive\">adaptive</lol-uikit-tooltipped-keyword> in the river.",
                        "longDesc": "Gain @MovementSpeed@ Movement Speed and {{ perk_subtext_AdaptiveForce_Max }} (based on level) when in the river.<br><br><hr></hr><br><i>May you be as swift as the rushing river and agile as a startled Rift Scuttler.</i><br>",
                        "icon": "ASSETS/Perks/Styles/Sorcery/Roamer/Roamer.dds",
                        "text": "Gain 25 Movement Speed and an adaptive bonus of up to 18 attack damage or 30 ability power (based on level) when in the river."
                    },
                    {
                        "id": 8236,
                        "key": "ElderGod",
                        "name": "Gathering Storm",
                        "shortDesc": "Gain increasing amounts of AD or AP, <lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Adaptive\">adaptive</lol-uikit-tooltipped-keyword> over the course of the game.",
                        "longDesc": "Every @UpdateAfterMinutes@ min gain AP or AD, <lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>adaptive</font></lol-uikit-tooltipped-keyword>.<br><br><i>10 min</i>: + 8 AP or 5 AD <br><i>20 min</i>: + 24 AP or 14 AD<br><i>30 min</i>: + 48 AP or 29 AD<br><i>40 min</i>: + 80 AP or 48 AD<br><i>50 min</i>: + 120 AP or 72 AD<br><i>60 min</i>: + 168 AP or 101 AD<br>etc...",
                        "icon": "ASSETS/Perks/Styles/Sorcery/ElderGod/ElderGod.dds",
                        "text": "Every 10 min gain AP or AD, adaptive.\n" +
                        "\n" +
                        "10 min: + 8 AP or 5 AD \n" +
                        "20 min: + 24 AP or 14 AD\n" +
                        "30 min: + 48 AP or 29 AD\n" +
                        "40 min: + 80 AP or 48 AD\n" +
                        "50 min: + 120 AP or 72 AD\n" +
                        "60 min: + 168 AP or 101 AD\n" +
                        "etc..."
                    }
                ]
            }
        ]
    }
];