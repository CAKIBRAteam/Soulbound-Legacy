
LootJS.modifiers((event) => {
 /*
 *
 * >> GLOBAL_SCOPE
 *
 */
    event
        .addLootTypeModifier([LootType.CHEST])
        .removeLoot('enigmaticlegacy:earth_heart')
        .removeLoot('enigmaticlegacy:tattered_tome')
        .removeLoot('enigmaticlegacy:withered_tome')
        .removeLoot('enigmaticlegacy:corrupted_tome')
        .removeLoot('enigmaticlegacy:blazing_core') 
        .removeLoot('enigmaticlegacy:eye_of_nebula')
        .removeLoot('enigmaticlegacy:void_pearl')
        .removeLoot('enigmaticlegacy:ocean_stone')
        .removeLoot('enigmaticlegacy:angel_blessing')
        .removeLoot('#forge:banned')
		.removeLoot('enigmaticlegacy:twisted_heart')
		.removeLoot('enigmaticlegacy:golem_heart')
		.removeLoot('enigmaticlegacy:forbidden_fruit')
		.removeLoot('enigmaticlegacy:astral_fruit')
		.removeLoot('enigmaticlegacy:guardian_heart')
		.removeLoot('enigmaticlegacy:darkest_scroll')
		.removeLoot('enigmaticlegacy:eldritch_amulet')
		
	event
	    .addLootTypeModifier([LootType.ENTITY])
		.removeLoot('enigmaticlegacy:earth_heart')
        .removeLoot('enigmaticlegacy:tattered_tome')
        .removeLoot('enigmaticlegacy:withered_tome')
        .removeLoot('enigmaticlegacy:corrupted_tome')
        .removeLoot('enigmaticlegacy:blazing_core') 
        .removeLoot('enigmaticlegacy:eye_of_nebula')
        .removeLoot('enigmaticlegacy:void_pearl')
        .removeLoot('enigmaticlegacy:ocean_stone')
        .removeLoot('enigmaticlegacy:angel_blessing')
        .removeLoot('#forge:banned')
		.removeLoot('enigmaticlegacy:twisted_heart')
		.removeLoot('enigmaticlegacy:forbidden_fruit')
		.removeLoot('enigmaticlegacy:astral_fruit')
		.removeLoot('enigmaticlegacy:guardian_heart')
		.removeLoot('enigmaticlegacy:darkest_scroll')
		.removeLoot('enigmaticlegacy:eldritch_amulet')
/*
 *       
 * GLOBAL_SCOPE <<
 *
 */		
	
 
 
 
 
 
 /*
 *
 * >> SPECIFIC_ENTITIES
 *
 */
	
	event
		.addEntityLootModifier("soulsweapons:evil_forlorn")
		.removeLoot(Ingredient.all)
		
	event
	    .addEntityLootModifier("minecraft:elder_guardian")
		.randomChance(0.1)
		.addLoot('enigmaticlegacy:guardian_heart')
		
	event
	    .addEntityLootModifier("iter_rpg:scallop")
		.randomChance(0.05)
		.addLoot('kubejs:black_pearl')
		
		
		
 /*
 *
 * SPECIFIC_ENTITIES <<
 *
 */

});
