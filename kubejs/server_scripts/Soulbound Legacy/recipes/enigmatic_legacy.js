ServerEvents.recipes(event => {
	event.remove({ output: 'enigmaticlegacy:mining_charm' })
	event.remove({ output: 'enigmaticlegacy:twisted_heart' })
	event.remove({ output: 'enigmaticlegacy:forbidden_axe' })
	event.remove({ output: 'enigmaticlegacy:monster_charm'})
	event.remove({ output: 'enigmaticlegacy:cursed_stone'})
	//enigmaticlegacy:twisted_heart
	
	event.shaped(
	Item.of('enigmaticlegacy:twisted_heart'),
	[
	'DCE',
	'BAB',
	'ECD'
	],
	{
		A: 'enigmaticlegacy:earth_heart',
		B: 'enigmaticlegacy:evil_essence',
		C: 'enigmaticlegacy:astral_dust',
		D: 'enigmaticlegacy:etherium_ingot',
		E: 'iter_rpg:void_fragment'
	}
   )
   
   //enigmaticlegacy:earth_heart
   event.shaped(
	Item.of('enigmaticlegacy:earth_heart'),
	[
	'EDB',
	'CAC',
	'BDE'
	],
	{
		A: 'iter_rpg:earth_rune',
		B: 'minecraft:lapis_lazuli',
		C: 'minecraft:amethyst_shard',
		D: 'minecraft:diamond',
		E: 'born_in_chaos_v1:pieceofdarkmetal'
	}
   )
   
   
   
   //enigmaticlegacy:mining_charm
   
   event.shaped(
	Item.of('enigmaticlegacy:mining_charm'),
	[
	'BFB',
	'CAC',
	'EDE'
	],
	{
		A: 'enigmaticlegacy:earth_heart',
		B: 'minecraft:chain',
		C: 'born_in_chaos_v1:dark_metal_ingot',
		D: Item.of('minecraft:potion', '{Potion:"minecraft:long_night_vision"}').strongNBT(),
		E: 'minecraft:glowstone_dust',
		F: 'minecraft:ender_eye'
	}
    )
   
   //enigmaticlegacy:forbidden_axe

   event.shaped(
   Item.of('enigmaticlegacy:forbidden_axe'),
   [
   'DBD',
   'EAE',
   ' C '
   ],
   {
	   A: 'rogues:netherite_double_axe',
	   B: 'minecraft:wither_skeleton_skull',
	   C: 'minecraft:blaze_rod',
	   D: 'enigmaticlegacy:evil_ingot',
	   E: 'enigmaticlegacy:earth_heart'	
   }
   )
   
   //enigmaticlegacy:monster_charm
   event.shaped(
   Item.of('enigmaticlegacy:monster_charm'),
   [
   'DFD',
   'EAE',
   'CBC'
   ],
   {
	   A: 'minecraft:skeleton_skull',
	   B: 'soulsweapons:essence_of_eventide',
	   C: 'enigmaticlegacy:xp_scroll',
	   D: 'iter_rpg:fire_ingot',
	   E: 'enigmaticlegacy:evil_ingot',
	   F: 'minecells:boss_stem_cell'
   }
   )
   
   //enigmaticlegacy:forbidden_fruit
   event.remove({ output: 'enigmaticlegacy:forbidden_fruit' })
   event.shaped(
   Item.of('enigmaticlegacy:forbidden_fruit'),
   [
   'FCG',
   'BAB',
   'DCE'
   ],
   {
	   A: 'betternether:black_apple',
	   B: 'enigmaticlegacy:twisted_heart',
	   C: 'enigmaticlegacy:evil_essence',
	   D: 'minecraft:nether_star',
	   E: 'minecraft:dragon_breath',
	   F: 'minecraft:heart_of_the_sea',
	   G: 'iter_rpg:void_rune'
   }
   )
   
   //enigmaticlegacy:astral_fruit
   event.remove({ output: 'enigmaticlegacy:astral_fruit' })
   event.shaped(
   Item.of('enigmaticlegacy:astral_fruit'),
   [
   'CBD',
   'BAB',
   'EBF'
   ],
   {
	   A: 'minecraft:golden_apple',
	   B: 'enigmaticlegacy:astral_dust',
	   C: 'iter_rpg:earth_ingot',
	   D: 'iter_rpg:air_ingot',
	   E: 'iter_rpg:fire_ingot',
	   F: 'iter_rpg:water_ingot',
   }
   )

   //'enigmaticlegacy:heaven_scroll'
   event.remove({ output: 'enigmaticlegacy:heaven_scroll' })
   event.shaped(
   Item.of('enigmaticlegacy:heaven_scroll'),
   [
   'FCF',
   'EAD',
   'FBF'
   ],
   {
	   A: 'enigmaticlegacy:thicc_scroll',
	   B: 'enigmaticlegacy:angel_blessing',
	   C: 'minecraft:nether_star',
	   D: 'iceandfire:amphithere_feather',
	   E: 'enigmaticlegacy:lore_inscriber',
	   F: 'iter_rpg:air_ingot',
   }
   )
   
   //'enigmaticlegacy:lore_inscriber'
   event.replaceInput(
   { output: 'enigmaticlegacy:lore_inscriber'},
   'minecraft:feather',
   'twilightforest:magic_map_focus')
   
   event.replaceInput(
   { output: 'enigmaticlegacy:lore_inscriber'},
   'minecraft:glass_bottle',
   'enigmaticlegacy:recall_potion')
   
   event.replaceInput(
   { output: 'enigmaticlegacy:lore_inscriber'},
   'minecraft:ink_sac',
   'supplementaries:antique_ink')
   
    event.replaceInput(
   { output: 'iter_rpg:awakened_sanguarnet'},
   'iter_rpg:blood_bottle',
   'minecells:blood_bottle')
   
   
   //'enigmaticlegacy:enchanter_pearl'
   event.remove({ output: 'enigmaticlegacy:enchanter_pearl' })
   event.shaped(
   Item.of('enigmaticlegacy:enchanter_pearl'),
   [
   'FDH',
   'BAB',
   'ECG'
   ],
   {
	   A: 'kubejs:black_pearl',
	   B: 'enigmaticlegacy:evil_ingot',
	   C: 'minecraft:crying_obsidian',
	   D: 'iter_rpg:ether_dust',
	   E: 'iter_rpg:void_ingot',
	   F: 'iter_rpg:fire_ingot',
	   G: 'iter_rpg:air_ingot',
	   H: 'iter_rpg:earth_ingot'
   }
   )
   
   //'enigmaticlegacy:darkest_scroll'
   event.remove({ output: 'enigmaticlegacy:darkest_scroll' })
   event.shaped(
   Item.of('enigmaticlegacy:darkest_scroll'),
   [
   'CEC',
   'BAB',
   'CDC'
   ],
   {
	   A: 'enigmaticlegacy:thicc_scroll',
	   B: 'supplementaries:antique_ink',
	   C: 'born_in_chaos_v1:dark_rod',
	   D: 'born_in_chaos_v1:dark_atrium',
	   E: 'born_in_chaos_v1:transformative_flower'
   }
   )
   
   //'enigmaticlegacy:cursed_scroll'
   event.remove({ output: 'enigmaticlegacy:cursed_scroll' })
   event.shaped(
   Item.of('enigmaticlegacy:cursed_scroll'),
   [
   'GBH',
   'EAF',
   'DCI'
   ],
   {
	   A: 'enigmaticlegacy:darkest_scroll',
	   B: 'enigmaticlegacy:twisted_heart',
	   C: 'enigmaticlegacy:the_twist',
	   D: 'soulsweapons:demon_heart',
	   E: 'enigmaticlegacy:lore_inscriber',
	   F: 'minecells:blood_bottle',
	   G: 'minecells:guts',
	   H: 'minecells:monsters_eye',
	   I: 'iter_rpg:awakened_sanguarnet'
   }
   ).replaceIngredient('enigmaticlegacy:the_twist', 'enigmaticlegacy:the_twist')
   
   //'enigmaticlegacy:fabulous_scroll'
   event.remove({ output: 'enigmaticlegacy:fabulous_scroll' })
   event.shaped(
   Item.of('enigmaticlegacy:fabulous_scroll'),
   [
   'EDE',
   'DAD',
   'CBC'
   ],
   {
	   A: 'enigmaticlegacy:heaven_scroll',
	   B: 'minecraft:elytra',
	   C: 'minecraft:dragon_breath',
	   D: 'iter_rpg:essence_of_creation',
	   E: 'enigmaticlegacy:evil_ingot'
   }
   )
   
   event.shaped(
   Item.of('iter_rpg:essence_of_creation'),
   [
   'ABA',
   'CFE',
   'ADA'
   ],
   {
	   A: 'enigmaticlegacy:astral_dust',
	   B: 'iter_rpg:water_fragment',
	   C: 'iter_rpg:fire_fragment',
	   D: 'iter_rpg:void_fragment',
	   E: 'iter_rpg:earth_fragment',
	   F: 'iter_rpg:air_fragment'
   }
   )
   
   
   //'enigmaticlegacy:avarice_scroll'
   event.remove({ output: 'enigmaticlegacy:avarice_scroll' })
   event.shaped(
   Item.of('enigmaticlegacy:avarice_scroll'),
   [
   'GCH',
   'DAE',
   'FBF'
   ],
   {
       A: 'enigmaticlegacy:darkest_scroll',
       B: 'iter_rpg:gold_ring_diamond',
	   C: 'minecraft:golden_apple',
	   D: Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).strongNBT(),
	   E: 'enigmaticlegacy:lore_inscriber',
	   F: 'enigmaticlegacy:twisted_heart',
	   G: 'minecraft:heart_of_the_sea',
	   H: 'minecraft:nether_star'
   }
   ).replaceIngredient('iter_rpg:gold_ring_diamond', 'minecraft:air')
   

   
   //'enigmaticlegacy:berserk_charm'
   event.remove({ output: 'enigmaticlegacy:berserk_charm' })
   event.shaped(
   Item.of('enigmaticlegacy:berserk_charm'),
   [
   'DCD',
   'BAE',
   'DFD'
   ],
   {
       A: 'enigmaticlegacy:insignia',
       B: Item.of('enigmaticlegacy:forbidden_axe').ignoreNBT(),
	   C: 'enigmaticlegacy:twisted_heart',
	   D: 'iter_rpg:awakened_sanguarnet',
	   E: 'iter_rpg:netherite_ring_sanguarnet',
	   F: 'soulsweapons:demon_heart'
   }
   ).replaceIngredient('iter_rpg:netherite_ring_sanguarnet', 'minecraft:air')
   
   //'enigmaticlegacy:eldritch_amulet'
   event.remove({ output: 'enigmaticlegacy:eldritch_amulet' })
   event.shaped(
   Item.of('enigmaticlegacy:eldritch_amulet'),
   [
   'CFC',
   'DAE',
   'CBC'
   ],
   {
	   A: 'call_of_yucutan:jade_amulet',
	   B: 'enigmaticlegacy:abyssal_heart',
	   C: 'iter_rpg:abyssquartz_shard',
	   D: 'iter_rpg:pearl',
	   E: 'kubejs:black_pearl',
	   F: Item.of('minecraft:potion', '{Potion:"minecraft:strong_strength"}').strongNBT()
   }
   )
   
   //'enigmaticlegacy:the_acknowledgment'
   event.remove({ output: 'enigmaticlegacy:the_acknowledgment' })
   event.shaped(
   Item.of('enigmaticlegacy:the_acknowledgment'),
   [
   'CBC',
   'DAD',
   'CEC'
   ],
   {
	   A: 'minecraft:book',
	   B: 'minecraft:blaze_powder',
	   C: 'iter_rpg:ether_dust',
	   D: 'minecraft:ender_eye',
	   E: 'iceandfire:pixie_dust'
   }
   )
   
   //'enigmaticlegacy:ender_slayer'
   event.remove({ output: 'enigmaticlegacy:ender_slayer' })
   event.shaped(
   Item.of('enigmaticlegacy:ender_slayer'),
   [
   'FBF',
   'DCD',
   'EAE'
   ],
   {
	   A: Item.of('iter_rpg:void_dagger').ignoreNBT(),
	   B: Item.of('endrem:black_eye').ignoreNBT(),
	   C: 'enigmaticlegacy:abyssal_heart',
	   D: 'enigmaticlegacy:evil_ingot',
	   E: 'iter_rpg:bottle_of_obsidian_tears',
	   F: 'born_in_chaos_v1:dark_metal_ingot'
   }
   )
   
   //'enigmaticlegacy:the_cube'
   event.remove({ output: 'enigmaticlegacy:the_cube' })
   event.shaped(
   Item.of('enigmaticlegacy:the_cube'),
   [
   'BEB',
   'FAF',
   'CDC'
   ],
   {
	   A: '#kubejs:custom_souls',
	   B: 'enigmaticlegacy:cosmic_heart',
	   C: 'enigmaticlegacy:abyssal_heart',
	   D: 'enigmaticlegacy:twisted_heart',
	   E: 'enigmaticlegacy:the_infinitum',
	   F: 'cataclysm:cursium_ingot'
   }
   )
   
   
	console.log('Enigmatic legacy recipes has been modified!')
});