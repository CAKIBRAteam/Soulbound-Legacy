ServerEvents.recipes(event => {
	event.remove({ output: 'rogues:berserker_armor_head' })
	event.remove({ output: 'rogues:berserker_armor_chest' })
	event.remove({ output: 'rogues:berserker_armor_legs' })
	event.remove({ output: 'rogues:berserker_armor_feet' })
})