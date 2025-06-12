ServerEvents.recipes(event => {
	//'kubejs:eye_of_champion'
	event.shaped(
	Item.of('kubejs:eye_of_champion'),
	[
	'BBB',
	'BAB',
	'BBB'
	],
	{
		A: 'minecraft:ender_eye',
		B: 'royalvariations:spiritual_crown_shard'
	}
	)
	
	//'kubejs:crying_eye'
	event.shaped(
	Item.of('kubejs:crying_eye'),
	[
	'BBB',
	'BAB',
	'BBB'
	],
	{
		A: 'minecraft:ender_eye',
		B: 'minecraft:crying_obsidian'
	}
	)
	
	//'kubejs:eye_of_frost'
	event.shaped(
	Item.of('kubejs:eye_of_frost'),
	[
	'BBB',
	'BAB',
	'BBB'
	],
	{
		A: 'minecraft:ender_eye',
		B: 'minecraft:packed_ice'
	}
	)
	
	//'kubejs:blackstone_eye'
	event.shaped(
	Item.of('kubejs:blackstone_eye'),
	[
	'BBB',
	'BAB',
	'BBB'
	],
	{
		A: 'minecraft:ender_eye',
		B: 'minecraft:gilded_blackstone'
	}
	)
})