const DATA_DRAGON_URL = "http://ddragon.leagueoflegends.com/cdn/7.24.1/img/champion/";
const champNameToIds = {'Thresh': 412, 'Jhin': 202, 'Illaoi': 420, 'Blitzcrank': 53, 'Nunu': 20, 'Xin Zhao': 5, 'Dr. Mundo': 36, 'Camille': 164, 'Miss Fortune': 21, 'Lissandra': 127, 'Rengar': 107, 'Galio': 3, 'Amumu': 32, 'Katarina': 55, 'Malzahar': 90, 'Wukong': 62, 'Quinn': 133, 'Shyvana': 102, 'Ezreal': 81, 'Darius': 122, 'Gangplank': 41, 'Syndra': 134, 'Ornn': 516, 'Renekton': 58, 'Graves': 104, 'Olaf': 2, 'Xerath': 101, 'Nasus': 75, 'Ekko': 245, 'Zoe': 142, 'Vi': 254, 'Jarvan IV': 59, 'Draven': 119, 'Udyr': 77, 'Fiora': 114, "Kog'Maw": 96, 'Azir': 268, 'Fiddlesticks': 9, 'Ryze': 13, 'Brand': 63, 'Evelynn': 28, 'Talon': 91, 'Poppy': 78, 'Skarner': 72, 'Riven': 92, 'Irelia': 39, 'Kennen': 85, 'Braum': 201, 'Pantheon': 80, 'Jinx': 222, 'Nidalee': 76, 'Lucian': 236, 'Jayce': 126, 'Akali': 84, 'Bard': 432, 'Lux': 99, 'Taric': 44, 'Tahm Kench': 223, 'Sion': 14, 'Heimerdinger': 74, 'Alistar': 12, 'Rammus': 33, 'Urgot': 6, 'Fizz': 105, 'Karthus': 30, 'Kled': 240, 'Soraka': 16, 'Nocturne': 56, 'Ziggs': 115, 'Jax': 24, 'Varus': 110, 'Nautilus': 111, 'Sejuani': 113, 'Gragas': 79, 'Shen': 98, 'Karma': 43, 'Anivia': 34, 'Viktor': 112, 'Annie': 1, 'Morgana': 25, 'Yasuo': 157, 'Zyra': 143, 'Zilean': 26, 'Zac': 154, 'Maokai': 57, 'Mordekaiser': 82, 'Volibear': 106, 'Veigar': 45, 'Tryndamere': 23, "Vel'Koz": 161, 'Gnar': 150, 'Singed': 27, 'Elise': 60, 'Diana': 131, 'Kalista': 429, 'Malphite': 54, 'Kindred': 203, 'Tristana': 18, 'Sona': 37, 'Nami': 267, 'Master Yi': 11, 'Kayn': 141, 'Aatrox': 266, 'Leona': 89, 'Vladimir': 8, 'Kassadin': 38, "Cho'Gath": 31, 'Vayne': 67, 'Twisted Fate': 4, 'Kayle': 10, 'Trundle': 48, 'Hecarim': 120, 'Ivern': 427, 'Ahri': 103, "Rek'Sai": 421, 'Shaco': 35, 'Cassiopeia': 69, 'Corki': 42, 'Janna': 40, 'Warwick': 19, 'Aurelion Sol': 136, 'Garen': 86, 'Lee Sin': 64, 'Yorick': 83, 'Lulu': 117, 'Sivir': 15, 'Caitlyn': 51, 'Twitch': 29, 'Zed': 238, 'Ashe': 22, 'Rakan': 497, 'Swain': 50, 'Teemo': 17, 'Xayah': 498, 'Orianna': 61, 'LeBlanc': 7, 'Rumble': 68, 'Taliyah': 163, "Kha'Zix": 121};
const championIcons = {1: {'image': 'Annie.png', 'name': 'Annie'}, 2: {'image': 'Olaf.png', 'name': 'Olaf'}, 3: {'image': 'Galio.png', 'name': 'Galio'}, 516: {'image': 'Ornn.png', 'name': 'Ornn'}, 5: {'image': 'XinZhao.png', 'name': 'Xin Zhao'}, 6: {'image': 'Urgot.png', 'name': 'Urgot'}, 7: {'image': 'Leblanc.png', 'name': 'LeBlanc'}, 8: {'image': 'Vladimir.png', 'name': 'Vladimir'}, 9: {'image': 'Fiddlesticks.png', 'name': 'Fiddlesticks'}, 10: {'image': 'Kayle.png', 'name': 'Kayle'}, 11: {'image': 'MasterYi.png', 'name': 'Master Yi'}, 12: {'image': 'Alistar.png', 'name': 'Alistar'}, 13: {'image': 'Ryze.png', 'name': 'Ryze'}, 14: {'image': 'Sion.png', 'name': 'Sion'}, 15: {'image': 'Sivir.png', 'name': 'Sivir'}, 16: {'image': 'Soraka.png', 'name': 'Soraka'}, 17: {'image': 'Teemo.png', 'name': 'Teemo'}, 18: {'image': 'Tristana.png', 'name': 'Tristana'}, 19: {'image': 'Warwick.png', 'name': 'Warwick'}, 20: {'image': 'Nunu.png', 'name': 'Nunu'}, 21: {'image': 'MissFortune.png', 'name': 'Miss Fortune'}, 22: {'image': 'Ashe.png', 'name': 'Ashe'}, 23: {'image': 'Tryndamere.png', 'name': 'Tryndamere'}, 24: {'image': 'Jax.png', 'name': 'Jax'}, 25: {'image': 'Morgana.png', 'name': 'Morgana'}, 26: {'image': 'Zilean.png', 'name': 'Zilean'}, 27: {'image': 'Singed.png', 'name': 'Singed'}, 28: {'image': 'Evelynn.png', 'name': 'Evelynn'}, 29: {'image': 'Twitch.png', 'name': 'Twitch'}, 30: {'image': 'Karthus.png', 'name': 'Karthus'}, 31: {'image': 'Chogath.png', 'name': "Cho'Gath"}, 32: {'image': 'Amumu.png', 'name': 'Amumu'}, 33: {'image': 'Rammus.png', 'name': 'Rammus'}, 34: {'image': 'Anivia.png', 'name': 'Anivia'}, 35: {'image': 'Shaco.png', 'name': 'Shaco'}, 36: {'image': 'DrMundo.png', 'name': 'Dr. Mundo'}, 37: {'image': 'Sona.png', 'name': 'Sona'}, 38: {'image': 'Kassadin.png', 'name': 'Kassadin'}, 39: {'image': 'Irelia.png', 'name': 'Irelia'}, 40: {'image': 'Janna.png', 'name': 'Janna'}, 41: {'image': 'Gangplank.png', 'name': 'Gangplank'}, 42: {'image': 'Corki.png', 'name': 'Corki'}, 43: {'image': 'Karma.png', 'name': 'Karma'}, 44: {'image': 'Taric.png', 'name': 'Taric'}, 45: {'image': 'Veigar.png', 'name': 'Veigar'}, 48: {'image': 'Trundle.png', 'name': 'Trundle'}, 50: {'image': 'Swain.png', 'name': 'Swain'}, 51: {'image': 'Caitlyn.png', 'name': 'Caitlyn'}, 53: {'image': 'Blitzcrank.png', 'name': 'Blitzcrank'}, 54: {'image': 'Malphite.png', 'name': 'Malphite'}, 55: {'image': 'Katarina.png', 'name': 'Katarina'}, 56: {'image': 'Nocturne.png', 'name': 'Nocturne'}, 57: {'image': 'Maokai.png', 'name': 'Maokai'}, 58: {'image': 'Renekton.png', 'name': 'Renekton'}, 59: {'image': 'JarvanIV.png', 'name': 'Jarvan IV'}, 60: {'image': 'Elise.png', 'name': 'Elise'}, 61: {'image': 'Orianna.png', 'name': 'Orianna'}, 62: {'image': 'MonkeyKing.png', 'name': 'Wukong'}, 63: {'image': 'Brand.png', 'name': 'Brand'}, 64: {'image': 'LeeSin.png', 'name': 'Lee Sin'}, 67: {'image': 'Vayne.png', 'name': 'Vayne'}, 68: {'image': 'Rumble.png', 'name': 'Rumble'}, 69: {'image': 'Cassiopeia.png', 'name': 'Cassiopeia'}, 72: {'image': 'Skarner.png', 'name': 'Skarner'}, 268: {'image': 'Azir.png', 'name': 'Azir'}, 74: {'image': 'Heimerdinger.png', 'name': 'Heimerdinger'}, 75: {'image': 'Nasus.png', 'name': 'Nasus'}, 76: {'image': 'Nidalee.png', 'name': 'Nidalee'}, 77: {'image': 'Udyr.png', 'name': 'Udyr'}, 78: {'image': 'Poppy.png', 'name': 'Poppy'}, 79: {'image': 'Gragas.png', 'name': 'Gragas'}, 80: {'image': 'Pantheon.png', 'name': 'Pantheon'}, 81: {'image': 'Ezreal.png', 'name': 'Ezreal'}, 82: {'image': 'Mordekaiser.png', 'name': 'Mordekaiser'}, 83: {'image': 'Yorick.png', 'name': 'Yorick'}, 84: {'image': 'Akali.png', 'name': 'Akali'}, 85: {'image': 'Kennen.png', 'name': 'Kennen'}, 86: {'image': 'Garen.png', 'name': 'Garen'}, 267: {'image': 'Nami.png', 'name': 'Nami'}, 89: {'image': 'Leona.png', 'name': 'Leona'}, 90: {'image': 'Malzahar.png', 'name': 'Malzahar'}, 91: {'image': 'Talon.png', 'name': 'Talon'}, 92: {'image': 'Riven.png', 'name': 'Riven'}, 96: {'image': 'KogMaw.png', 'name': "Kog'Maw"}, 98: {'image': 'Shen.png', 'name': 'Shen'}, 99: {'image': 'Lux.png', 'name': 'Lux'}, 101: {'image': 'Xerath.png', 'name': 'Xerath'}, 102: {'image': 'Shyvana.png', 'name': 'Shyvana'}, 103: {'image': 'Ahri.png', 'name': 'Ahri'}, 104: {'image': 'Graves.png', 'name': 'Graves'}, 105: {'image': 'Fizz.png', 'name': 'Fizz'}, 106: {'image': 'Volibear.png', 'name': 'Volibear'}, 107: {'image': 'Rengar.png', 'name': 'Rengar'}, 110: {'image': 'Varus.png', 'name': 'Varus'}, 111: {'image': 'Nautilus.png', 'name': 'Nautilus'}, 112: {'image': 'Viktor.png', 'name': 'Viktor'}, 113: {'image': 'Sejuani.png', 'name': 'Sejuani'}, 114: {'image': 'Fiora.png', 'name': 'Fiora'}, 115: {'image': 'Ziggs.png', 'name': 'Ziggs'}, 117: {'image': 'Lulu.png', 'name': 'Lulu'}, 119: {'image': 'Draven.png', 'name': 'Draven'}, 120: {'image': 'Hecarim.png', 'name': 'Hecarim'}, 121: {'image': 'Khazix.png', 'name': "Kha'Zix"}, 122: {'image': 'Darius.png', 'name': 'Darius'}, 4: {'image': 'TwistedFate.png', 'name': 'Twisted Fate'}, 126: {'image': 'Jayce.png', 'name': 'Jayce'}, 127: {'image': 'Lissandra.png', 'name': 'Lissandra'}, 131: {'image': 'Diana.png', 'name': 'Diana'}, 133: {'image': 'Quinn.png', 'name': 'Quinn'}, 134: {'image': 'Syndra.png', 'name': 'Syndra'}, 136: {'image': 'AurelionSol.png', 'name': 'Aurelion Sol'}, 141: {'image': 'Kayn.png', 'name': 'Kayn'}, 142: {'image': 'Zoe.png', 'name': 'Zoe'}, 143: {'image': 'Zyra.png', 'name': 'Zyra'}, 150: {'image': 'Gnar.png', 'name': 'Gnar'}, 154: {'image': 'Zac.png', 'name': 'Zac'}, 412: {'image': 'Thresh.png', 'name': 'Thresh'}, 157: {'image': 'Yasuo.png', 'name': 'Yasuo'}, 161: {'image': 'Velkoz.png', 'name': "Vel'Koz"}, 163: {'image': 'Taliyah.png', 'name': 'Taliyah'}, 420: {'image': 'Illaoi.png', 'name': 'Illaoi'}, 421: {'image': 'RekSai.png', 'name': "Rek'Sai"}, 266: {'image': 'Aatrox.png', 'name': 'Aatrox'}, 427: {'image': 'Ivern.png', 'name': 'Ivern'}, 429: {'image': 'Kalista.png', 'name': 'Kalista'}, 432: {'image': 'Bard.png', 'name': 'Bard'}, 201: {'image': 'Braum.png', 'name': 'Braum'}, 202: {'image': 'Jhin.png', 'name': 'Jhin'}, 203: {'image': 'Kindred.png', 'name': 'Kindred'}, 164: {'image': 'Camille.png', 'name': 'Camille'}, 222: {'image': 'Jinx.png', 'name': 'Jinx'}, 223: {'image': 'TahmKench.png', 'name': 'Tahm Kench'}, 236: {'image': 'Lucian.png', 'name': 'Lucian'}, 238: {'image': 'Zed.png', 'name': 'Zed'}, 240: {'image': 'Kled.png', 'name': 'Kled'}, 497: {'image': 'Rakan.png', 'name': 'Rakan'}, 498: {'image': 'Xayah.png', 'name': 'Xayah'}, 245: {'image': 'Ekko.png', 'name': 'Ekko'}, 254: {'image': 'Vi.png', 'name': 'Vi'}};