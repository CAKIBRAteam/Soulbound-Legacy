PlayerEvents.loggedIn(event => {
	if(!event.player.stages.has('joined')) {
		event.player.stages.add('joined')
		event.player.tell('Путник, добро пожаловать в модпак §l§5Soulbound Legacy!')
		event.player.tell('Здесь ты найдешь множество приключений, историй, битв. Ты разгадаешь тайны этого мира.')
		event.player.tell('Примечание: Не спешите в прохождении, играйте спокойно и размеренно, вам это ни к чему. Играйте в удовольствие. Приятной и удачной игры!')
		
	event.server.runCommandSilent(`execute as ${event.entity.username} run give @s ftbquests:book`)
	}
	})
	