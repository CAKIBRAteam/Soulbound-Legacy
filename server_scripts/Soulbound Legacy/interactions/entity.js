ItemEvents.entityInteracted('minecraft:nether_star', event => {
	let team = event.currentTeam.name
  if(event.target.type != 'cataclysm:the_harbinger') return
  if(!event.player.stages.has('harbinger_activated')) {
	  event.server.players.forEach(p => {
	  event.player.stages.has('harbinger_activated')
	  })
      event.player.tell('§cНАЙДЕН ИСТОЧНИК ПИТАНИЯ...')
       Utils.server.scheduleInTicks(5, () => {
		event.player.tell('§cЗАПУСК ОСНОВНЫХ СИСТЕМ И ПОДСИСТЕМ...')
		 Utils.server.scheduleInTicks(5, () => {
          event.player.tell('§cРЕЗУЛЬТАТ: УСПЕХ')
           Utils.server.scheduleInTicks(5, () => {
            event.player.tell('§cЗАПУСК ПРОТОКОЛА: "ВСЕЛЕНСКОЕ УНИЧТОЖЕНИЕ"...')
             Utils.server.scheduleInTicks(5, () => {
              event.player.tell('§cРЕЗУЛЬТАТ: УСПЕХ')
               Utils.server.scheduleInTicks(5, () => {
	            event.player.tell('§cНАЙДЕН ПОТЕНЦИАЛЬНО ОПАСНЫЙ ОБЪЕКТ')
	             Utils.server.scheduleInTicks(5, () => {
		          event.player.tell('§cКОМАНДА: УНИЧТОЖЕНИЕ')
		           Utils.server.scheduleInTicks(5, () => {
			        event.player.tell('§cСТАТУС ИСПОЛНЕНИЯ: В ПРОЦЕССЕ')
                     event.server.players.forEach(player => {
                      level.playSound(null, p.x, p.y, p.z, 'cataclysm:harbinger_charge_prepare', 'master', 1.0, 1.0);
	          })
             })
            })
	       })
	      })
        })
      })
    })
   }
});