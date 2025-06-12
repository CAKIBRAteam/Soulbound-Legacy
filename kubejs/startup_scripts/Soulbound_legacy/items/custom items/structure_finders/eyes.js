const $EyeofEnder = Java.loadClass("net.minecraft.world.entity.projectile.EyeOfEnder");
const $Registry = Java.loadClass("net.minecraft.core.registries.Registries");
const $TagKey = Java.loadClass("net.minecraft.tags.TagKey");

//eye_of_champion
StartupEvents.registry('item', event => {
  event.create('eye_of_champion')
    .texture('kubejs:item/eye_of_champion')
	.unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE, 'kubejs:champion_grave')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          item.count--
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          return true
        }
      }
      return false
    })
})


//crying_eye
StartupEvents.registry('item', event => {
  event.create('crying_eye')
    .texture('kubejs:item/crying_eye')
	.unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE, 'kubejs:sorrow_spire')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          item.count--
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          return true
        }
      }
      return false
    })
})

//eye_of_frost
StartupEvents.registry('item', event => {
  event.create('eye_of_frost')
    .texture('kubejs:item/eye_of_frost')
	.unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE, 'kubejs:frost_maze')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          item.count--
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          return true
        }
      }
      return false
    })
})

//blackstone_eye
StartupEvents.registry('item', event => {
  event.create('blackstone_eye')
    .texture('kubejs:item/blackstone_eye')
	.unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE, 'kubejs:gauntlet_arena')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          item.count--
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          return true
        }
      }
      return false
    })
})