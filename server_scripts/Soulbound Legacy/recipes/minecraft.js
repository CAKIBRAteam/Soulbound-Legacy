ServerEvents.recipes(event => {
	event.remove({ output: 'minecraft:lantern' })
	event.remove({ output: 'minecraft:chain' })
	event.remove({ output: 'minecraft:packed_ice' })
	event.remove({ type: 'minecraft:stonecutting', output: 'minecraft:packed_ice' })
	event.remove({ type: 'minecraft:stonecutting', output: 'minecraft:ice' })
	
	event.shapeless(
	Item.of('minecraft:rabbit_hide', 4),
	[
	'minecraft:leather',
	'#bakery:knives'
	]
	).damageIngredient('#bakery:knives')
	
	event.shaped(
	Item.of('minecraft:lantern'),
	[
	' B ',
	' A ',
	' B '
	],
	{
		A: 'minecraft:torch',
		B: 'minecraft:iron_nugget'
	}
	)
	
	event.shaped(
	Item.of('minecraft:chain', 8),
	[
	' B ',
	' A ',
	' B '
	],
	{
		A: 'minecraft:iron_ingot',
		B: 'minecraft:iron_nugget'
	}
	)
	

	//'minecraft:packed_ice'
	event.shaped(
	Item.of('minecraft:packed_ice'),
	[
	'AA',
	'AA'
	],
	{
		A: 'minecraft:ice',
	}
	)
	
	//'minecraft:nether_wart'
	event.shapeless(
	Item.of('minecraft:nether_wart', 9),
	[
	'minecraft:nether_wart_block'
	]
	)
	
	//'minecraft:beetroot_seeds'
	event.shapeless(
	Item.of('minecraft:beetroot_seeds'),
	[
	'minecraft:beetroot'
	]
	)
})