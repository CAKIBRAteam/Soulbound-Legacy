BlockEvents.broken('born_in_chaos_v1:infernal_evil_pumpkin_s', event => {
	if(!event.player.stages.has('sir_pumpkinhead')) {
		event.player.tell('§aСкверна отвергает вас!')
        event.cancel()
	}
})