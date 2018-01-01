# Bust-A-Baron

See the site live at [http://www.bustabaron.com/](http://www.bustabaron.com/)

Bust-A-Baron is a League of Legends minigame designed to teach players about the new changes to the Rune system. With its quick-pace gameplay and diversity in strategies, it is a surefire way to get any player to familiarize themselves with each and every rune and have fun while doing so! Designed to make players think about what runes are appropriate for them in different situations, Bust-A-Baron aims to improve player knowledge of the new rune system in a way that is both noticeable, accessible, interesting, and unique.

## Gameplay
Final Boss Veigar is at it again! But his game code has accidentally generated a boss of its own for Veigar to face! In your way stand 8 different versions of Baron Nashor. But be careful, as each Baron grows higher and higher in both strength and difficulty.

To battle Baron Nashor, Veigar's code has generated an arsenal of tools for your disposal! Draw chains of 3 or more same-colored orbs to deal physical damage to your enemies. The longer the chain, the more damage you deal! 

![Clearing Three or More Orbs deals Physical Damage to Baron.](https://media.giphy.com/media/xULW8gDzir5z6Ubr7W/giphy.gif)

The game has also extracted spells from a variety of different League of Legends characters for your use! Use your mana wisely and take advantage of these powerful spells to take down your opponent!

<b>Q - Annie's Disintegrate:</b> Cost: 40 mana. Cooldown: 15s. Deal 400 (+100% AP) magic damage to the enemy.

<b>W - Aatrox's Blood Thirst:</b> Cost: 5 Mana per second. Toggle - When On: Gain 20 AD and % Lifesteal (+ 20% AP).

<b>E - Taric's Dazzle</b> Cost: 40 mana. Cooldown: 15s. Stun your enemy for 3.5 seconds. They cannot attack during this period.

<b>R - Kennen's Slicing Maelstrom</b> Cost: 100 mana. Cooldown: 60s. Rebuild your board. Reduce the number of colors on board by one.

Players are also provided with 2 Health Potions and 2 Mana Potions that they can use every round using the <b>(1)</b> and <b>(2)</b> keys.

## Runes

With Baron Nashor getting stronger and stronger every level, how will you be able to fight back? Fear not! Each time you defeat Baron Nashor, the player is first presented with information about the next Baron Nashor you'll face. This will give you an idea of what you're up against.
 
 ![You can view what traits your next foe possesses.](https://image.ibb.co/jctnCG/Screen_Shot_2017_12_31_at_8_03_09_PM.png)
 
 The player is then presented with a selection of runes or rune branches to empower Veigar. And while these runes very closely mimic the effects of their in-game counterparts, <b>they have been amplified significantly, </b>making it much more important for the player to look through their effects and determine what would be most helpful for each boss.

![You can select a new rune or a new tree to go down everytime you defeat a boss.](https://media.giphy.com/media/3oFzmj5kdpRbOr8ucM/giphy.gif)

<b>Each of the 60 runes from the new Runes Reforged System has an in-game counterpart in Bust-A-Baron.</b> While the impact of these runes have been scaled up to make their effects much more impactful in game, they are still the same runes at heart. Knowing what runes to pick in Bust-A-Baron will not only familiarize players with the new system in League of Legends, but it will also make it easier for players to decide what runes are appropriate against every opponent. Whenever the player selects a rune, they are also informed about the Rune's effect in League of Legends. This will help them get an understanding of the rune's real effect as they progress through Bust-A-Baron.

![You are also shown the Rune's League of Legends effect when selecting your rune.](https://media.giphy.com/media/3oFzm3aBUU7wAHlTl6/giphy.gif)

Take advantage of your runes' crazy effects to defeat all 8 Baron Nashors and progress your way to victory!

![Use the Perfect Timing rune to put your player into stasis for several seconds!](https://media.giphy.com/media/l49JIjbN8eokl6igU/giphy.gif)

For example, use the <b>Perfect Timing</b> rune to put your player into stasis for several seconds!

![With the Zombie Ward rune, yellow, blue, and red trinkets are able to appear as pieces in game. When cleared, they reappear as zombie wards that can be cleared as if they were ANY color!](https://media.giphy.com/media/3o75299Qopjy9TtWQo/giphy.gif)

With the <b>Zombie Ward</b> rune, yellow, blue, and red trinkets are able to appear as pieces in game. When cleared, they reappear as zombie wards that can be cleared as if they were ANY color!

## Technology

To create Bust-A-Baron, we used [Phaser](https://phaser.io/), an open source framework for Canvas and WebGL powered browser games. Phaser was used for the entire game, the matching logic, the visual effects, and everything that could be seen on the canvas in the center of the webpage. We chose Phaser because it is one of the most well documented frameworks for Javascript games, with countless numbers of examples out there for users to follow and hundreds of pages of documentation.

We also decided not to have all the game elements in the Phaser canvas itself. We thought it'd be cool if it seemed like the entire website was a part of the game, so we brought many aspects of the game into the DOM, such as the player/enemy's resource bars, ability cooldown timers, and rune trees. This allowed us to focus on using Phaser specifically for gameplay and offered us the flexibility of using CSS to style and position these additional components. We used [jQuery](https://jquery.com/) to manipulate these elements from the game.

The website itself was created using [Bootstrap](https://getbootstrap.com/) to help speed up the process of positioning elements and making the site look the way it is now so that we could spend more time focusing on actual gameplay. We also used an open source jQuery library called [Hop](https://github.com/ahmad-moussawi/hop) to create the full-page tutorial that you see whenever the page is loaded. 
 

## Challenges

One of the biggest challenges in creating Bust-A-Baron was finding a way to translate the majority of mechanics in League of Legends to Bust-A-Baron. Traits such as Movement Speed, Attack Speed, and Ability Power were difficult to find uses for in Bust-A-Baron. While we tried to think outside-the-box to come up with ways to translate these League mechanics into our minigame, we also made it a priority to keep ALL of our "translations" as consistent as possible. 

In addition, to further our efforts to maintain consistency and keep Bust-A-Baron as similar to League as possible, we tried our best to replicate all damage calculations as well. Damage mitigation is calculated the same way it is in League of Legends, using a player's Armor to lower Baron's Physical Damage and a player's magic resist to lower Baron's Magic Damage. We took similar steps towards tenacity, lifesteal, and other statistics, making sure that calculation of crowd control duration and lifesteal amount was the same so the player can focus more on the effects of the runes rather than calculating how "worth it" one rune is over another.

For example, all runes that modified Movement Speed were translated to modify "Evasion Rate" in Bust-A-Baron, a stat that lets players avoid enemy attacks. All runes that modified Attack Speed were translated to modify "Clear Speed", which controlled how fast pieces would fall.

It was also very difficult to balance the game. One of the most important aspects in creating a game is finding a way to keep it "New and Fresh" everytime a player plays. We tried to accomplish this by creating a variety of different bosses for the player to face, each with their own strengths and weaknesses. This way, players would have to think about what runes they plan to take everytime they play the game, as certain runes may be more appropriate than others under different circumstances.

[This Google Sheets Spreadsheet](https://docs.google.com/spreadsheets/d/16zrgSBui5sOE8invP48clxXKRjFAF0Clb-q3C25Uzvk/edit) details the consistencies we tried to maintain when translating, the effects of every single rune in both League of Legends and in Bust-A-Baron, as well as the different versions of Baron Nashor the player can face as they progress through the game.

## The Future
If there was more time there are several changes we probably would have made and several features we would have liked to implement.

1) <b>Different Abilities: </b>We would have liked to implement different abilities each time the player plays the game. This would introduce even more diversity and increase the amount of thinking and planning the player would have to go through.

2) <b>Different Bosses: </b> While the name of the game is Bust-A-Baron, we definitely would have liked for there to be different opponents for the player to face. Facing different jungle champs, bosses such as the dragon, or even enemy champions could pose a multitude of different challenges for the player that Baron may not be able to. It would have also been pretty awesome to have some more attacks that Baron could perform, perhaps some that would mess with the player's board.

3) <b>Epic Sound Effects: </b> One thing that we never got the opportunity to look for were soudn effects. Finding artwork was a challenge in itself due to our low-tier artistic abilities, but this definitely would've ramped up the hype as the players were fighting for their lives against Baron.

4) <b>A leaderboard: </b> If there's anything that makes a game fun, it's competition and collaboration! Having a leaderboard would challenge people to fight for a spot at the top. Scoring players by time would have been an awesome way to keep the game interesting and allow players to compete against their friends and their foes. This was definitely something we didn't have time to implement though, as we would have had to host a backend server and database to keep track of all the submissions people were making to the leaderboard.

5) <b>Responsiveness: </b> One of the biggest issues with Bust-A-Baron is responsiveness. The game was really only optimized to look nice on screens with a width of over 900 pixels. It would be amazing to have a mobile version of this application so players could take this with them on-the-go, and would probably be one of our first priorities if there was additional time.


## Resource Credits:
- Health Bar: [Dominik Widomski](https://codepen.io/dwidomski)
- hop: [Ahmad Moussawi](https://github.com/ahmad-moussawi/hop)
