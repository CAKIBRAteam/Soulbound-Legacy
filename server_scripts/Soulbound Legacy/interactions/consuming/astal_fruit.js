ItemEvents.foodEaten('enigmaticlegacy:astral_fruit', event => {
	if(!event.player.stages.add('astral_fruit_eaten')) {
	event.player.stages.add('astral_fruit_eaten')
	} else {
		event.player.tell('§cВам не стоило этого делать...')
		Utils.server.scheduleInTicks(30, () => {
			event.player.tell('§c1...')
			Utils.server.scheduleInTicks(20, () => {
				event.player.tell('§c2...')
				Utils.server.scheduleInTicks(20, () => {
					event.player.tell('§c3...')
					Utils.server.scheduleInTicks(20, () => {
						event.player.tell('§cДа настигнет тебя божья кара!')
						Utils.server.scheduleInTicks(20, () => {
						event.server.runCommandSilent(`execute as ${event.entity.username} run kill @s`)
						})
					})
				})
			})
		})
		
	}
})

EntityEvents.hurt(event => {
	const { source, entity, player } = event;
	if(source.player && source.player.mainHandItem.id == 'enigmaticlegacy:the_infinitum' && !player.persistentData.worthyForInfinitum) {
		if(entity.living) {
			Utils.server.scheduleInTicks(1, () => {
				entity.potionEffects.clear()
			})
		}
	}
})