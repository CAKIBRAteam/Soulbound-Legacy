ItemEvents.foodEaten('kubejs:stone_fruit'/*your item*/, event => {
	const {level} = event; //const for sound playing
	//first eaten
	if(!event.player.stages.has('stone_fruit_eated_1') && !event.player.stages.has('stone_fruit_eated_2') && !event.player.stages.has('stone_fruit_eated_3') &&	!event.player.stages.has('stone_fruit_eated_4') && !event.player.stages.has('stone_fruit_eated_5')) { //Here you set the number of eats. Every stages in there = 1 eating
		event.player.stages.add('stone_fruit_eated_1')
	event.entity.modifyAttribute('minecraft:generic.armor'/*attribute*/, 'armor_extra_stone_fruit_1'/*custom id*/, 1/*amount of attribute*/, "addition"/*operation*/) //Here you sets the attributes
	Utils.server.scheduleInTicks(1, () => {
		level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:entity.player.levelup', 'master', 1, 1) //Sound that playng when item eaten
		event.player.tell(Text.green('Вы получили 1 еденицу врождённой брони навсегда!')) //Text whe item eaten
	})
	event.cancel()
}
    //second eaten	
	if(event.player.stages.has('stone_fruit_eated_1')) {
		event.player.stages.add('stone_fruit_eated_2')
		event.player.stages.remove('stone_fruit_eated_1') //Pay attention: you need to remove previous stage when you grants new because
		event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_2', 1, "addition")
	Utils.server.scheduleInTicks(1, () => {
		level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:entity.player.levelup', 'master', 1, 1)
		event.player.tell(Text.green('Вы получили 1 еденицу врождённой брони навсегда!'))
	})
	event.cancel()
	}
	//third eaten
	if(event.player.stages.has('stone_fruit_eated_2')) {
		event.player.stages.add('stone_fruit_eated_3')
		event.player.stages.remove('stone_fruit_eated_2')
		event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_3', 1, "addition")
	Utils.server.scheduleInTicks(1, () => {
		level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:entity.player.levelup', 'master', 1, 1)
		event.player.tell(Text.green('Вы получили 1 еденицу врождённой брони навсегда!'))
	})
	event.cancel()
	}
	//fourth eaten
	if(event.player.stages.has('stone_fruit_eated_3')) {
		event.player.stages.add('stone_fruit_eated_4')
		event.player.stages.remove('stone_fruit_eated_3')
		event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_4', 1, "addition")
	Utils.server.scheduleInTicks(1, () => {
		level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:entity.player.levelup', 'master', 1, 1)
		event.player.tell(Text.green('Вы получили 1 еденицу врождённой брони навсегда!'))
	})
	event.cancel()
	}
	//fifth eaten
	if(event.player.stages.has('stone_fruit_eated_4')) {
		event.player.stages.add('stone_fruit_eated_5')
		event.player.stages.remove('stone_fruit_eated_4')
		event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_5', 1, "addition")
	Utils.server.scheduleInTicks(1, () => {
		level.playSound(null, event.player.x, event.player.y, event.player.z, 'minecraft:entity.player.levelup', 'master', 1, 1)
		event.player.tell(Text.green('Вы получили 1 еденицу врождённой брони навсегда!'))
	})
	} else { //This is optional event. You say player that can't get anymore attributes, you playing sound to him and returning the item
	event.player.tell(Text.red('Вы уже использовали этот предмет!')) //Message
	level.playSound(null, event.player.x, event.player.y, event.player.z, 'entity.blaze.shoot', 'master', 1, 1) //sound
	let itemStack = event.player.mainHandItem.id //getting itemstack in main hand
	Utils.server.scheduleInTicks(3, () => { //wait 3 ticks
	return event.entity.mainHandItem = itemStack //returning itemstack
	})
	}
})

function saveAttributes (event) {
	if(event.player.stages.has('stone_fruit_eated_1')) {
	event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_1', 1, "addition")
	}
	if(event.player.stages.has('stone_fruit_eated_2')) {
	event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_2', 2, "addition")
	}
	if(event.player.stages.has('stone_fruit_eated_3')) {
	event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_3', 3, "addition")
	}
	if(event.player.stages.has('stone_fruit_eated_4')) {
	event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_4', 4, "addition")
	}
	if(event.player.stages.has('stone_fruit_eated_5')) {
	event.entity.modifyAttribute('minecraft:generic.armor', 'armor_extra_stone_fruit_5', 5, "addition")
	}
     }
//These 2 events are necessary so that attributes are not reset when you respawn or re-log in.
PlayerEvents.respawned(saveAttributes)

PlayerEvents.loggedIn(saveAttributes)

