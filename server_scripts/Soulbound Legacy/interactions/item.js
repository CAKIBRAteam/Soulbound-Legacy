PlayerEvents.tick(event => {
    const { player } = event;
    
    if(player.cooldowns.isOnCooldown('rogues:berserker_armor_head')) return
    
    if(player.headArmorItem.id == 'rogues:berserker_armor_head' &&
    player.chestArmorItem.id == 'rogues:berserker_armor_chest' &&
    player.legsArmorItem.id == 'rogues:berserker_armor_legs' &&
    player.feetArmorItem.id == 'rogues:berserker_armor_feet') {
        
        player.potionEffects.add('born_in_chaos_v1:light_rampage', 1200, 0, true, true)
        player.addItemCooldown('rogues:berserker_armor_head', 1800)
    }
})

PlayerEvents.tick(event => {
	const { player } = event;
	//fireArmorSetEffect
	if(player.headArmorItem.id == 'iter_rpg:fire_armor_helmet' &&
	player.chestArmorItem.id == 'iter_rpg:fire_armor_chestplate' &&
	player.legsArmorItem.id == 'iter_rpg:fire_armor_leggings' &&
	player.feetArmorItem.id == 'iter_rpg:fire_armor_boots') {
		
	player.potionEffects.add('minecraft:fire_resistance', 60, 0, true, true)
	}
	
	//waterArmorSetEffect
	if(player.headArmorItem.id == 'iter_rpg:water_armor_helmet' &&
	player.chestArmorItem.id == 'iter_rpg:water_armor_chestplate' &&
	player.legsArmorItem.id == 'iter_rpg:water_armor_leggings' &&
	player.feetArmorItem.id == 'iter_rpg:water_armor_boots') {
		
	player.potionEffects.add('minecraft:water_breathing', 60, 0, true, true)
	}
	
	//airArmorSetEffect
	if(player.headArmorItem.id == 'iter_rpg:air_armor_helmet' &&
	player.chestArmorItem.id == 'iter_rpg:air_armor_chestplate' &&
	player.legsArmorItem.id == 'iter_rpg:air_armor_leggings' &&
	player.feetArmorItem.id == 'iter_rpg:air_armor_boots') {
		
	player.potionEffects.add('minecraft:jump_boost', 60, 0, true, true)
	}
	
	//earthArmorSetEffect
	if(player.headArmorItem.id == 'iter_rpg:earth_armor_helmet' &&
	player.chestArmorItem.id == 'iter_rpg:earth_armor_chestplate' &&
	player.legsArmorItem.id == 'iter_rpg:earth_armor_leggings' &&
	player.feetArmorItem.id == 'iter_rpg:earth_armor_boots') {
		
	player.potionEffects.add('born_in_chaos_v1:wither_resistance', 60, 0, true, true)	
	player.potionEffects.add('alexsmobs:poison_resistance', 60, 0, true, true)
	}
	
})
//'cataclysm:athame'
const ritualAnimals = ['minecraft:cow', 'mincraft:pig']
EntityEvents.hurt(ritualAnimals, event => {
	const { player } = event.source.player

	if(player.cooldowns.isOnCooldown('cataclysm:athame')) return
	if(player && player.mainHandItem.id == 'cataclysm:athame') {
		event.entity.kill()
		player.potionEffects.add('born_in_chaos_v1:medium_rampage', 3600, 0, true, true)
		player.addItemCooldown('cataclysm:athame', 6000)
	}
})