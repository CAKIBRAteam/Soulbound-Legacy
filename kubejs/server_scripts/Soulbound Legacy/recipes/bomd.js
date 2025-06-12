ServerEvents.recipes(event => {
	event.remove({ output: 'bosses_of_mass_destruction:void_lily' })
	
	event.shapeless(
	Item.of('bosses_of_mass_destruction:void_lily'),
	[
	'#minecraft:flowers',
	'minecraft:amethyst_shard'
	]
	)
})