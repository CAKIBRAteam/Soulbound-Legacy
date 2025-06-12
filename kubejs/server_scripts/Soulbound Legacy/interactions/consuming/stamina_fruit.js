ItemEvents.foodEaten('kubejs:stamina_fruit', event => {
	const {level} = event;
	if(!event.player.stages.has('stamina_fruit_eated')) {
		event.player.stages.add('stamina_fruit_eated')
	event.entity.modifyAttribute('parcool:max_stamina', 'stamina_extra_stamina_fruit', 500, "addition")
	Utils.server.scheduleInTicks(1, () => {
		level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:entity.player.levelup', 'master', 1, 1)
		event.player.tell(Text.green('Вы получили 25% дополнительной выносливости навсегда!'))
	})
	} else {
	event.player.tell(Text.red('Вы уже использовали этот предмет!'))
	level.playSound(null, event.player.x, event.player.y, event.player.z, 'entity.blaze.shoot', 'master', 1, 1)
	Utils.server.scheduleInTicks(5, () => {
	event.entity.mainHandItem = 'kubejs:stamina_fruit'
	})
	}
})

PlayerEvents.respawned(event => {
	if(event.player.stages.has('stamina_fruit_eated')) {
	event.entity.modifyAttribute('parcool:max_stamina', 'stamina_extra_stamina_fruit', 500, "addition")
	}
})
PlayerEvents.loggedIn(event => {
	if(event.player.stages.has('stamina_fruit_eated')) {
	event.entity.modifyAttribute('parcool:max_stamina', 'stamina_extra_stamina_fruit', 500, "addition")
	}
})