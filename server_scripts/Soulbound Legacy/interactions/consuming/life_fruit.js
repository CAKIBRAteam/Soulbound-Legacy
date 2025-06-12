ItemEvents.foodEaten('kubejs:life_fruit', event => {
	const {level} = event;
	if(!event.player.stages.has('life_fruit_eated')) {
		event.player.stages.add('life_fruit_eated')
	event.entity.modifyAttribute('minecraft:generic.max_health', 'health_extra_life_fruit', 5, "addition")
	Utils.server.scheduleInTicks(1, () => {
		event.player.heal(5)
		level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:entity.player.levelup', 'master', 1, 1)
		event.player.tell(Text.green('Вы получили 2.5 сердечка здоровья навсегда!'))
	})
	} else {
	event.player.tell(Text.red('Вы уже использовали этот предмет!'))
	level.playSound(null, event.player.x, event.player.y, event.player.z, 'entity.blaze.shoot', 'master', 1, 1)
	Utils.server.scheduleInTicks(5, () => {
	event.entity.mainHandItem = 'kubejs:life_fruit'
	})
	}
})

PlayerEvents.respawned(event => {
	if(event.player.stages.has('life_fruit_eated')) {
		event.player.heal(5)
	event.entity.modifyAttribute('minecraft:generic.max_health', 'health_extra_life_fruit', 5, "addition")
	}
})
PlayerEvents.loggedIn(event => {
	if(event.player.stages.has('life_fruit_eated')) {
	event.entity.modifyAttribute('minecraft:generic.max_health', 'health_extra_life_fruit', 5, "addition")
	}
})