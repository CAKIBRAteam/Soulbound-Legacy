ServerEvents.recipes(event => {
	event.remove({output: Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:1}')})
	event.remove({output: Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}')})
	event.remove({output: Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}')})
	event.remove({output: '#coinsje:coins'})
	event.remove({output: 'iter_rpg:iron_ring'})
	
	event.smelting(Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}').strongNBT(), 0.35, 100)
	event.smelting(Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:1}').strongNBT(), 0.35, 100)
	event.smelting(Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}').strongNBT(), 0.35, 100)
	
	event.campfireCooking(Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:0}').strongNBT(), 0.35, 160)
	event.campfireCooking(Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:1}').strongNBT(), 0.35, 160)
	event.campfireCooking(Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:3}'), Item.of('minecraft:potion', '{Potion:"minecraft:water",Purity:2}').strongNBT(), 0.35, 160)
	
	event.shaped(
	Item.of('iter_rpg:iron_ring'),
	[
	'ABA',
	'B B',
	'ABA'
	],
	{
		A: 'minecraft:iron_ingot',
		B: 'minecraft:iron_nugget'
	}
	)
})