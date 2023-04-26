import React from 'react';
import { SectionList, Text, Image } from 'react-native';

const SectionListBasics = () => {
  const arreglo=[	{
		"id": 3328,
		"nombre": "The Witcher 3: Wild Hunt",
		"descripcion": "",
		"plataformas": [
			"Xbox Series S/X",
			"PlayStation 4",
			"Nintendo Switch",
			"PC",
			"Xbox One",
			"PlayStation 5"
		],
		"image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
		"fecLan": "2015-05-18",
		"rating": 4.66,
		"genres": [
			"Action",
			"Adventure",
			"RPG"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
			"https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
			"https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
			"https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
			"https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
			"https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
			"https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
		],
		"tiendas": [
			"GOG",
			"PlayStation Store",
			"Steam",
			"Xbox Store",
			"Nintendo Store"
		],
		"etiquetas": [
			"Singleplayer",
			"Full controller support",
			"Atmospheric",
			"Great Soundtrack",
			"RPG",
			"Story Rich",
			"Open World",
			"Third Person",
			"Fantasy",
			"Sandbox",
			"Action RPG",
			"Dark",
			"Nudity",
			"controller support",
			"Choices Matter",
			"Mature",
			"Dark Fantasy",
			"Medieval",
			"Magic",
			"Multiple Endings"
		],
		"create": false
	},
	{
		"id": 4200,
		"nombre": "Portal 2",
		"descripcion": "",
		"plataformas": [
			"Xbox 360",
			"Linux",
			"macOS",
			"PlayStation 3",
			"PC",
			"Xbox One"
		],
		"image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
		"fecLan": "2011-04-18",
		"rating": 4.62,
		"genres": [
			"Shooter",
			"Puzzle"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
			"https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
			"https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
			"https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
			"https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",
			"https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",
			"https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
		],
		"tiendas": [
			"Xbox Store",
			"Steam",
			"PlayStation Store",
			"Xbox 360 Store"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Multiplayer",
			"Full controller support",
			"Atmospheric",
			"Steam Cloud",
			"steam-trading-cards",
			"Co-op",
			"Story Rich",
			"cooperative",
			"First-Person",
			"Sci-fi",
			"FPS",
			"Online Co-Op",
			"Funny",
			"Female Protagonist",
			"Comedy",
			"Local Co-Op",
			"stats",
			"Steam Workshop",
			"Space",
			"Includes level editor",
			"Captions available",
			"Commentary available",
			"Science"
		],
		"create": false
	},
	{
		"id": 5286,
		"nombre": "Tomb Raider (2013)",
		"descripcion": "",
		"plataformas": [
			"PlayStation 4",
			"macOS",
			"PC",
			"Xbox One",
			"Xbox 360",
			"PlayStation 3"
		],
		"image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
		"fecLan": "2013-03-05",
		"rating": 4.05,
		"genres": [
			"Action",
			"Adventure"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
			"https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg",
			"https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg",
			"https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg",
			"https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg",
			"https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg",
			"https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
		],
		"tiendas": [
			"Xbox 360 Store",
			"Steam",
			"PlayStation Store",
			"Google Play",
			"App Store",
			"Epic Games"
		],
		"etiquetas": [
			"Singleplayer",
			"Multiplayer",
			"Full controller support",
			"Atmospheric",
			"RPG",
			"Third Person",
			"Classic",
			"Exploration",
			"Female Protagonist",
			"Stealth",
			"Third-Person Shooter",
			"Action-Adventure",
			"Retro",
			"Cinematic",
			"Quick-Time Events",
			"Dinosaurs",
			"Lara Croft"
		],
		"create": false
	},
	{
		"id": 4291,
		"nombre": "Counter-Strike: Global Offensive",
		"descripcion": "",
		"plataformas": [
			"PC",
			"Xbox 360",
			"PlayStation 3"
		],
		"image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
		"fecLan": "2012-08-21",
		"rating": 3.56,
		"genres": [
			"Action",
			"Shooter"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
			"https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg",
			"https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg",
			"https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg",
			"https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg",
			"https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg",
			"https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
		],
		"tiendas": [
			"PlayStation Store",
			"Steam",
			"Xbox 360 Store"
		],
		"etiquetas": [
			"Steam Achievements",
			"Multiplayer",
			"Full controller support",
			"steam-trading-cards",
			"Co-op",
			"cooperative",
			"First-Person",
			"FPS",
			"Online Co-Op",
			"Tactical",
			"stats",
			"Steam Workshop",
			"PvP",
			"Moddable",
			"War",
			"In-App Purchases",
			"Team-Based",
			"Realistic",
			"Fast-Paced",
			"Military",
			"Competitive",
			"Valve Anti-Cheat enabled",
			"e-sports",
			"Trading"
		],
		"create": false
	},
	{
		"id": 13536,
		"nombre": "Portal",
		"descripcion": "",
		"plataformas": [
			"Android",
			"PlayStation 3",
			"Xbox 360",
			"Linux",
			"macOS",
			"PC",
			"Nintendo Switch"
		],
		"image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
		"fecLan": "2007-10-09",
		"rating": 4.51,
		"genres": [
			"Adventure",
			"Puzzle"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
			"https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg",
			"https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg",
			"https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg",
			"https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg",
			"https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg",
			"https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
		],
		"tiendas": [
			"Steam",
			"Google Play"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Atmospheric",
			"Great Soundtrack",
			"Story Rich",
			"First-Person",
			"Sci-fi",
			"Partial Controller Support",
			"FPS",
			"Funny",
			"Classic",
			"Female Protagonist",
			"Comedy",
			"Includes level editor",
			"Captions available",
			"Short",
			"Physics",
			"Dark Humor",
			"Commentary available",
			"Includes Source SDK",
			"Science"
		],
		"create": false
	},
	{
		"id": 12020,
		"nombre": "Left 4 Dead 2",
		"descripcion": "",
		"plataformas": [
			"macOS",
			"Linux",
			"PC",
			"Xbox 360"
		],
		"image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
		"fecLan": "2009-11-17",
		"rating": 4.09,
		"genres": [
			"Action",
			"Shooter"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
			"https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg",
			"https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg",
			"https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg",
			"https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg",
			"https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg",
			"https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
		],
		"tiendas": [
			"Steam",
			"Xbox 360 Store"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Multiplayer",
			"Full controller support",
			"Steam Cloud",
			"steam-trading-cards",
			"Co-op",
			"cooperative",
			"First-Person",
			"Horror",
			"FPS",
			"Online Co-Op",
			"Gore",
			"Survival",
			"Local Co-Op",
			"Tactical",
			"stats",
			"Steam Workshop",
			"Zombies",
			"Moddable",
			"Post-apocalyptic",
			"Survival Horror",
			"Captions available",
			"Replay Value",
			"Team-Based",
			"Valve Anti-Cheat enabled",
			"Commentary available",
			"Includes Source SDK"
		],
		"create": false
	},
	{
		"id": 5679,
		"nombre": "The Elder Scrolls V: Skyrim",
		"descripcion": "",
		"plataformas": [
			"PC",
			"Nintendo Switch",
			"Xbox 360",
			"PlayStation 3"
		],
		"image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
		"fecLan": "2011-11-11",
		"rating": 4.42,
		"genres": [
			"Action",
			"RPG"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
			"https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg",
			"https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg",
			"https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg",
			"https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg",
			"https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg",
			"https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
		],
		"tiendas": [
			"PlayStation Store",
			"Steam",
			"Nintendo Store",
			"Xbox 360 Store"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Atmospheric",
			"Steam Cloud",
			"steam-trading-cards",
			"Great Soundtrack",
			"RPG",
			"Story Rich",
			"Open World",
			"First-Person",
			"Third Person",
			"Partial Controller Support",
			"Fantasy",
			"Sandbox",
			"Action RPG",
			"Steam Workshop",
			"role-playing",
			"Moddable",
			"Character Customization",
			"Dark Fantasy",
			"Medieval",
			"Magic",
			"Lore-Rich",
			"Dragons"
		],
		"create": false
	}
]
  const arreglo2=[{
		"id": 29153,
		"nombre": "Max Payne 2: The Fall of Max Payne",
		"descripcion": "",
		"plataformas": [
			"Xbox 360",
			"Xbox",
			"PC",
			"PlayStation 2"
		],
		"image": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
		"fecLan": "2003-10-14",
		"rating": 4.43,
		"genres": [
			"Action",
			"Shooter"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
			"https://media.rawg.io/media/screenshots/69f/69f55950ca3dd483cff0e2c74726a520.jpg",
			"https://media.rawg.io/media/screenshots/3a1/3a1ffe1d81286a0fa40899e070a128b0.jpg",
			"https://media.rawg.io/media/screenshots/0f1/0f175d7cff768e1a20de8340d5aea4f6.jpg",
			"https://media.rawg.io/media/screenshots/8de/8de049517ca15e76b846b74349ab7c87.jpg",
			"https://media.rawg.io/media/screenshots/1ab/1abb5cbfcced18d50c29d134d57bf528.jpg",
			"https://media.rawg.io/media/screenshots/49c/49cd9d491706a7269fecb74d654369fa.jpg"
		],
		"tiendas": [
			"Steam",
			"Xbox 360 Store"
		],
		"etiquetas": [
			"Physics",
			"Story",
			"Destruction",
			"Drama",
			"character",
			"Romance",
			"first person mod",
			"police",
			"fall"
		],
		"create": false
	},
	{
		"id": 5528,
		"nombre": "Call of Duty: World at War",
		"descripcion": "",
		"plataformas": [
			"Xbox 360",
			"PlayStation 3",
			"Nintendo DS",
			"PC",
			"Xbox One",
			"Wii"
		],
		"image": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg",
		"fecLan": "2008-11-11",
		"rating": 3.95,
		"genres": [
			"Action",
			"Shooter"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg",
			"https://media.rawg.io/media/screenshots/8a1/8a1f2cdaaaf8aa19441d890858d01d70.jpg",
			"https://media.rawg.io/media/screenshots/afe/afe6afc104621713ea0c8c5c5dc17149.jpg",
			"https://media.rawg.io/media/screenshots/b53/b535859c3a2a6f80f3c68398dbd39a79.jpg",
			"https://media.rawg.io/media/screenshots/baf/baf3982d7d0b65c4e74a38386641b07e.jpg",
			"https://media.rawg.io/media/screenshots/18d/18d0c96f64a6f2093a7097265b831ce9.jpg",
			"https://media.rawg.io/media/screenshots/b7b/b7bac2bff127258d92a266dd6a9adef7.jpg"
		],
		"tiendas": [
			"Xbox Store",
			"Steam",
			"PlayStation Store",
			"Nintendo Store",
			"Xbox 360 Store"
		],
		"etiquetas": [
			"Singleplayer",
			"Multiplayer",
			"Great Soundtrack",
			"Co-op",
			"cooperative",
			"First-Person",
			"Horror",
			"FPS",
			"Online Co-Op",
			"Gore",
			"Classic",
			"Survival",
			"Zombies",
			"Moddable",
			"War",
			"Historical",
			"World War II",
			"Tanks"
		],
		"create": false
	},
	{
		"id": 1140,
		"nombre": "World of Goo",
		"descripcion": "",
		"plataformas": [
			"Android",
			"iOS",
			"PC",
			"macOS",
			"Linux",
			"Nintendo Switch",
			"Wii"
		],
		"image": "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
		"fecLan": "2008-10-13",
		"rating": 4.01,
		"genres": [
			"Strategy",
			"Educational",
			"Family",
			"Indie",
			"Puzzle"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
			"https://media.rawg.io/media/screenshots/44b/44bb511be323062b35e64dac6bc4dda0.jpg",
			"https://media.rawg.io/media/screenshots/c18/c1840fcf75ad14bcaffc5c10a2d929f3.jpg",
			"https://media.rawg.io/media/screenshots/2c1/2c1a9ea80f4d50edc64caa5c8be9208f.jpg",
			"https://media.rawg.io/media/screenshots/46f/46f070838b9087b8f2b44ab5aed5ba12.jpg",
			"https://media.rawg.io/media/screenshots/dde/dde84b4351694f58b7bc28dd9c907a64.jpg",
			"https://media.rawg.io/media/screenshots/7bb/7bb50d061107afc3680b0d31d6206a95.jpg"
		],
		"tiendas": [
			"App Store",
			"Steam",
			"GOG",
			"Nintendo Store",
			"Google Play",
			"Epic Games"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Multiplayer",
			"Atmospheric",
			"Great Soundtrack",
			"Story Rich",
			"2D",
			"Funny",
			"Difficult",
			"Classic",
			"Comedy",
			"Family Friendly",
			"Cute",
			"Physics",
			"Building",
			"Surreal",
			"puzzles",
			"Touch-Friendly",
			"Satire"
		],
		"create": false
	},
	{
		"id": 9631,
		"nombre": "Sins of a Solar Empire: Rebellion",
		"descripcion": "",
		"plataformas": [
			"PC"
		],
		"image": "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
		"fecLan": "2012-06-12",
		"rating": 2.75,
		"genres": [
			"Strategy",
			"Indie"
		],
		"screnshoots": [
			"https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
			"https://media.rawg.io/media/screenshots/f9a/f9a3a2e2a3a21300e44d093612f5b6f1.jpg",
			"https://media.rawg.io/media/screenshots/da4/da48ac6e582836d15473a7f56b1d407a.jpg",
			"https://media.rawg.io/media/screenshots/c0b/c0b0e65b80ed230f5078ddedcdb6e4fe.jpg",
			"https://media.rawg.io/media/screenshots/648/64805b741a98e7aa9aeb3038624f7778.jpg",
			"https://media.rawg.io/media/screenshots/e00/e00648b57a620de6936a07c6a36a87dd.jpg",
			"https://media.rawg.io/media/screenshots/563/56351b209cfaf5e06dc6d1c3bbbc438e.jpg"
		],
		"tiendas": [
			"Steam"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Multiplayer",
			"Steam Cloud",
			"steam-trading-cards",
			"Great Soundtrack",
			"Co-op",
			"cooperative",
			"Sci-fi",
			"Online Co-Op",
			"Exploration",
			"Online multiplayer",
			"Local Co-Op",
			"Local Multiplayer",
			"Space",
			"Includes level editor",
			"Moddable",
			"War",
			"Aliens",
			"RTS",
			"Grand Strategy",
			"4X",
			"Real-Time",
			"Diplomacy"
		],
		"create": false
	},
	{
		"id": 452638,
		"nombre": "Stray",
		"descripcion": "",
		"plataformas": [
			"PlayStation 5",
			"PC",
			"PlayStation 4"
		],
		"image": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
		"fecLan": "2022-07-19",
		"rating": 4.2,
		"genres": [
			"Action",
			"Adventure",
			"Simulation",
			"Indie",
			"Puzzle",
			"Platformer"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
			"https://media.rawg.io/media/screenshots/6c9/6c9d036518f78895ddf552d2cb7421d6.jpg",
			"https://media.rawg.io/media/screenshots/444/44480d0f02c17e41dd1d9b58affad214.jpg",
			"https://media.rawg.io/media/screenshots/e38/e38f600f4ad9145d0bcba128064503db.jpg"
		],
		"tiendas": [
			"PlayStation Store",
			"Steam"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Full controller support",
			"Atmospheric",
			"Steam Cloud",
			"Open World",
			"Third Person",
			"Sci-fi",
			"Horror",
			"Exploration",
			"Stealth",
			"exclusive",
			"Cute",
			"Mystery",
			"Colorful",
			"Cyberpunk",
			"Dystopian",
			"Robots",
			"Steam Trading Cards",
			"Beautiful",
			"Remote Play on TV",
			"cats",
			"Котики"
		],
		"create": false
	},
	{
		"id": 11279,
		"nombre": "Day of Defeat: Source",
		"descripcion": "",
		"plataformas": [
			"Linux",
			"macOS",
			"PC"
		],
		"image": "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
		"fecLan": "2005-09-26",
		"rating": 3.22,
		"genres": [
			"Action"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
			"https://media.rawg.io/media/screenshots/005/0052befe44787cb5965fd60c7f2313e2.jpg",
			"https://media.rawg.io/media/screenshots/a0a/a0ab09b638835040a682d756c1f41a7c.jpg",
			"https://media.rawg.io/media/screenshots/2b9/2b9ad598d10f7d2eb65f7abe1e7ea1b1.jpg",
			"https://media.rawg.io/media/screenshots/82e/82e72c867380e876dea9951ecfb83679.jpg",
			"https://media.rawg.io/media/screenshots/5bf/5bfc1d5e990afa11bca985a3716be1a3.jpg"
		],
		"tiendas": [
			"Steam"
		],
		"etiquetas": [
			"Steam Achievements",
			"Multiplayer",
			"steam-trading-cards",
			"First-Person",
			"FPS",
			"Online Co-Op",
			"Gore",
			"Classic",
			"Comedy",
			"Tactical",
			"stats",
			"Cross-Platform Multiplayer",
			"War",
			"Historical",
			"Team-Based",
			"Realistic",
			"Military",
			"Valve Anti-Cheat enabled",
			"World War II",
			"Includes Source SDK",
			"Class-Based"
		],
		"create": false
	},
	{
		"id": 3315,
		"nombre": "Magicka 2",
		"descripcion": "",
		"plataformas": [
			"Linux",
			"macOS",
			"PC",
			"PlayStation 4"
		],
		"image": "https://media.rawg.io/media/games/516/516c6bfe36ddb498d860f68927448a75.jpg",
		"fecLan": "2015-05-26",
		"rating": 3.67,
		"genres": [
			"Action",
			"Adventure",
			"RPG"
		],
		"screnshoots": [
			"https://media.rawg.io/media/games/516/516c6bfe36ddb498d860f68927448a75.jpg",
			"https://media.rawg.io/media/screenshots/5ba/5ba82469736858815346b86f1b47f84b.jpg",
			"https://media.rawg.io/media/screenshots/cbd/cbd99b773894d091f8218f5c6d97c0dd.jpg",
			"https://media.rawg.io/media/screenshots/70a/70afb2882d5a18026b6cf39f691a0de4.jpg",
			"https://media.rawg.io/media/screenshots/c52/c5217b965fbc46b17fe26a2c48d931f7.jpg",
			"https://media.rawg.io/media/screenshots/b3e/b3e8892694c64bc68067920af9860216.jpg",
			"https://media.rawg.io/media/screenshots/24a/24ac7297c41423b294d41e5201d69d6b.jpg"
		],
		"tiendas": [
			"PlayStation Store",
			"Steam"
		],
		"etiquetas": [
			"Singleplayer",
			"Steam Achievements",
			"Multiplayer",
			"Full controller support",
			"Atmospheric",
			"steam-trading-cards",
			"RPG",
			"Co-op",
			"Open World",
			"cooperative",
			"Online Co-Op",
			"Fantasy",
			"Funny",
			"Gore",
			"Comedy",
			"Split Screen",
			"Local Co-Op",
			"Local Multiplayer",
			"PvP",
			"Team-Based",
			"Isometric",
			"Memes",
			"Magic"
		],
		"create": false
	}]
  console.log("Aquie esta el valor de ID", arreglo2[3].id)
return (
        <SectionList
          sections={[
            {
              title: 'Videojuegos Parte 1', 
              data: arreglo.map( (el)=> {
                        return (
                          {
                            key: `${el.id}`, 
                            img: {uri:el.image }, 
                            plataformas:el.plataformas ,
                            generos:el.genres 
                          }
                        )})
                // {key: `${arreglo[0].id}`, img: {uri:arreglo[0].image }, plataformas:arreglo[0].plataformas ,generos:arreglo[0].genres },
            },
            {
              title: 'Videojuegos Parte 2', 
              data: arreglo2.map( (el)=> {
                return (
                  {
                    key: `${el.id}`, 
                    img: {uri:el.image }, 
                    plataformas:el.plataformas ,
                    generos:el.genres 
                  }
                )})
            },
          ]}
          renderItem={({item}) => 
            <>
              <Text>ID:{item.key}</Text>
              {/* <Image source={item.img || require('./assets/Unknown.jpg')} /> */}
              { item.img ? <Image source={item.img} 
                          style={{width:200, height:200}}
                          /> 
                        : <Image source={require('./assets/Unknown.jpg')} 

                          /> 
              }
               <Text>Plataformas:{item.plataformas}</Text>
               <Text>Generos:{item.generos}</Text>
            </>
          }
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    );
}

export default SectionListBasics;