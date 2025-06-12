ServerEvents.recipes(event => {
	event.remove({ output: 'cataclysm:burning_ashes'})
	event.remove({ output: 'cataclysm:monstrous_eye'})
	event.shaped(
	Item.of('cataclysm:burning_ashes'),
	[
	'ABA',
	'BCB',
	'ABA'
	],
	{
		A: 'cataclysm:dying_ember',
		B: 'minecraft:blaze_powder',
		C: 'minecraft:fire_charge'
	}
	)
	
	
	event.shaped(
	Item.of('cataclysm:monstrous_eye'),
	[
	'ADA',
	'BCB',
	'ADA'
	],
	{
		A: 'minecraft:lava_bucket',
		B: 'minecraft:blackstone',
		C: 'minecraft:ender_eye',
		D: 'minecraft:diamond'
	}
	)
	
	console.log('Catalcysm recipes has been modified!')
})