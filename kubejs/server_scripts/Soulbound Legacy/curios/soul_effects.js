//souls effects
PlayerEvents.tick(event => {
	  let potion = event.player.potionEffects
	  let attribute = event.entity.modifyAttribute
  const { player, entity, player: { age, nbt } } = event
  if (age % 20 != 0) return
  let curios = nbt.ForgeCaps['curios:inventory']
  
  
  
  //soul1
  let soul1Equiped = curios.toString().contains("kubejs:soul1")
  if (soul1Equiped) {
	  player.persistentData.soul1Equiped = true
      potion.add('minecraft:speed', 20, 0, false, false)
	  event.entity.modifyAttribute('parcool:max_stamina', 'soul1_extra_stamina', 250, "addition")
  } else {
	  if(player.persistentData.soul1Equiped) {
		  player.persistentData.soul1Equiped = false
		  event.entity.modifyAttribute('parcool:max_stamina', 'soul1_extra_stamina', 0, "addition")
	  }
  }
  
  
  
  
  
  
  
  //soul2
  let soul2Equiped = curios.toString().contains("kubejs:soul2")
  if (soul2Equiped) {
  event.entity.modifyAttribute('minecraft:generic.max_health', 'soul2_extra_hp', 10, "addition")
  player.persistentData.soul2Equiped = true
  
  } else { 
  if(player.persistentData.soul2Equiped) { 
    player.persistentData.soul2Equiped = false
    event.entity.modifyAttribute('minecraft:generic.max_health', 'soul2_extra_hp', 0, "addition")
    event.player.attack(10)
  }
} 
  
  
  
  
  
  //soul3
  let soul3Equiped = curios.toString().contains("kubejs:soul3")
  if (soul3Equiped) {
	  player.persistentData.soul4Equiped = true
      event.entity.modifyAttribute("obscure_api:regeneration", 'soul3_regeneration', 6, "addition")
  } else { 
  if(player.persistentData.soul3Equiped)
  player.persistentData.soul3Equiped = false
  event.entity.modifyAttribute("obscure_api:regeneration", 'soul3_regeneration', 0, "addition")
  }
   
   
   
  //soul4
  let soul4Equiped = curios.toString().contains("kubejs:soul4")
  if (soul4Equiped) {
      event.entity.modifyAttribute("obscure_api:dodge", 'soul4_dodge', 0.2, "addition")
	  player.persistentData.soul4Equiped = true
  } else { 
  if(player.persistentData.soul4Equiped) {
	  player.persistentData.soul4Equiped = false
  event.entity.modifyAttribute("obscure_api:dodge", 'soul4_dodge', 0, "addition")
   }
  }
  
  
  
  
  //soul5
  let soul5Equiped = curios.toString().contains("kubejs:soul5")
  if (soul5Equiped && !player.persistentData.soul5Equiped) {
	  player.persistentData.soul5Equiped = true
	  potion.add('born_in_chaos_v1:bone_barrier', 1220, 0, false, true)
	  Utils.server.scheduleInTicks(1200, () => {
		  player.persistentData.soul5Equiped = false
	  })
	 }
	 
	 
	 
	 
   //soul6	 
   let soul6Equiped = curios.toString().contains("kubejs:soul6")
  if (soul6Equiped) { 
      player.persistentData.soul6Equiped = true      
	  event.entity.modifyAttribute("obscure_api:critical_hit", 'soul6_extra_crit', 0.25, "additional")
  } else { 
  if(player.persistentData.soul6Equiped) {
	  player.persistentData.soul6Equiped = falses
  event.entity.modifyAttribute("obscure_api:critical_hit", 'soul6_extra_crit', 0, "additional")
   }
  }  
	 
	 
	 
   //soul7
  let soul7Equiped = curios.toString().contains("kubejs:soul7")
  if (soul7Equiped) {
	  player.persistentData.soul7Equiped = true
	  event.entity.modifyAttribute("minecraft:generic.attack_damage", 'soul7_extra_damage', 0.5, "multiply_total")
  } else {
	  if(player.persistentData.soul4Equiped) {
	  event.entity.modifyAttribute("minecraft:generic.attack_damage", 'soul7_extra_damage', 0, "multiply_total")
	  }
  }
})


/*
* ATTACK SOUL EFFECTS
*
* ATTACK SOUL EFFECTS
*
* ATTACK SOUL EFFECTS 
*/


//soul6
EntityEvents.hurt(event => {
    let { entity, source, level } = event;
    if ((!source.actual || !source.actual.isPlayer())) return;
    let player = source.actual;
    let curios = player.nbt.ForgeCaps['curios:inventory'];
    let hasSoul6 = curios.toString().contains("kubejs:soul6");
    if (hasSoul6) {
        if (entity.living && !player.persistentData.armorDecreaseCooldown) {
            if(Math.random() < 0.5) {
            player.persistentData.armorDecreaseCooldown = true
            entity.potionEffects.add("aquamirae:armor_decrease", 70, 3, false, false);
			level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:block.anvil.land', 'master', 1, 1)
            Utils.server.scheduleInTicks(105, () => {
                player.persistentData.armorDecreaseCooldown = false
            })
           }
          }
         }
})

//soul7
EntityEvents.hurt(event => {
    let { entity, source, level } = event;
    if ((!source.actual || !source.actual.isPlayer())) return;
    let player = source.actual;
    let curios = player.nbt.ForgeCaps['curios:inventory'];
    let hasSoul7 = curios.toString().contains("kubejs:soul7");
    if (hasSoul7) {
        if (entity.living && !player.persistentData.bashCooldown) {
            if(Math.random() < 0.35) {
            player.persistentData.bashCooldown = true
            entity.potionEffects.add("minecells:stunned", 70, 0, false, false);
			level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:block.anvil.land', 'master', 1, 1)
            Utils.server.scheduleInTicks(105, () => {
                player.persistentData.bashCooldown = false
            })
           }
          }
         }
	})

/*
*
* RESET COOLDOWNS
*
*/

PlayerEvents.loggedIn(event => {
	Utils.server.scheduleInTicks(201, () => {
	event.server.runCommandSilent(`execute as ${event.entity.username} run kjs persistent_data entity @s remove bashCooldown`)
	event.server.runCommandSilent(`execute as ${event.entity.username} run kjs persistent_data entity @s remove armorDecreaseCooldown`)
	})
})