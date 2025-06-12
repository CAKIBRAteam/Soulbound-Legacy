const banned = [
	'soulsweapons:galeforce',
	'soulsweapons:shadow_assassin_scythe',
	'soulsweapons:darkin_scythe',
	'soulsweapons:darkin_scythe',
	'soulsweapons:guts_sword',
	'soulsweapons:rageblade',
	'soulsweapons:blunderbuss',
	'soulsweapons:hunter_pistol',
	'soulsweapons:master_sword',
	'soulsweapons:master_sword',
	'#paladins:staves',
	'#paladins:wands',
	'iter_rpg:arcanist_table',
	'minecells:rampart',
	'minecells:lightning_bolt',
	'soulsweapons:pure_moonlight_greatsword',
	'soulsweapons:moonlight_greatsword',
	'soulsweapons:moonlight_greatsword',
	'soulsweapons:dragon_staff',
	'soulsweapons:gatling_gun',
	'soulsweapons:hunter_cannon',
	'soulsweapons:mjolnir',
	'soulsweapons:mjolnir',
	'rogues:rogue_spell_book',
	'paladins:paladin_spell_book',
	'paladins:priest_spell_book',
	'aquamirae:terrible_sword',
	'paladins:monk_workbench',
	'twilightforest:uncrafting_table',
	'twilightforest:ender_bow',
	'minecells:ice_bow',
	'minecells:ice_bow',
	'alexscaves:resistor_shield',
	'spell_engine:spell_binding',
	'rogues:warrior_spell_book',
	'iceandfire:hippocampus_slapper',
	'iter_rpg:bonb',
	'iter_rpg:marrow',
	'iter_rpg:elemental_armor_helmet',
	'iter_rpg:elemental_armor_chestplate',
	'iter_rpg:elemental_armor_leggings',
	'iter_rpg:elemental_armor_boots',
	'iter_rpg:driftbow',
	'iter_rpg:stormcaller',
	'iter_rpg:firestarter',
	'royalvariations:royal_bomb',
	'iceandfire:dragonbone_bow',
	'iceandfire:dragonbone_arrow',
	'iter_rpg:bone_wand',
	'iter_rpg:abyssquartz_wand',
	'iter_rpg:amethyst_wand',
	'iter_rpg:pearl_wand',
	'iter_rpg:gist',
	'#iter_rpg:spell_scrolls',
	'#iter_rpg:spell_scrolls',
	'iter_rpg:ametrine_staff',
	'iter_rpg:magmanum_staff',
	'iter_rpg:hydra_staff',
	'iter_rpg:thunderclap',
	'iter_rpg:spell_book',
	'iter_rpg:ink_bottle',
	'iter_rpg:enchanted_page',
	'iter_rpg:spell_scribbles',
	'iter_rpg:enchantome',
	'iter_rpg:smoldering_tome',
	'iter_rpg:nimble_copper_shortstaff',
	'iter_rpg:unidentified_spell',
	'enigmaticlegacy:ascension_amulet',
	'soulsweapons:darkin_scythe_pre'
	]

ItemEvents.tooltip(event => {
	
	 event.add('cataclysm:void_scatter_arrow', Text.of('§dПри попадании разлетается на мелкие осколки, которые наносят урон при попадании.'))

	 
	 
	 //berserkerArmor
	 const berserkerArmor = [
	'rogues:berserker_armor_head',
	'rogues:berserker_armor_chest',
	'rogues:berserker_armor_legs',
	'rogues:berserker_armor_feet'
	]
	 
	 event.addAdvanced(berserkerArmor, (item, advanced, text) => {
	 if(!event.shift) {
		 text.add(1, Text.of('§6Нажмите §lShift§r §6для подробностей'))
	 } else {
		 text.add(1, Text.of('§6|Эффект полного комлекта:'))
		 text.add(2, Text.of('§6|Дарует эффект лёгкого буйства на 1 минуту раз в 1.5 минуты'))
		 text.add(4, Text.of('§6|Можно получить в качестве награды из §5§oЭпического сундука'))
	  }
	})
	
	//fireArmor
	 const fireArmor = [
	'iter_rpg:fire_armor_helmet',
	'iter_rpg:fire_armor_chestplate',
	'iter_rpg:fire_armor_leggings',
	'iter_rpg:fire_armor_boots'
	]
	 
	 event.addAdvanced(fireArmor, (item, advanced, text) => {
	 if(!event.shift) {
		 text.add(1, Text.of('§6Нажмите §lShift§r §6для подробностей'))
	 } else {
		 text.add(1, Text.of('§6|Эффект полного комлекта:'))
		 text.add(2, Text.of('§6|Дарует эффект огнестойкости'))
	  }
	})
	
	//waterArmor
	 const waterArmor = [
	'iter_rpg:water_armor_helmet',
	'iter_rpg:water_armor_chestplate',
	'iter_rpg:water_armor_leggings',
	'iter_rpg:water_armor_boots'
	]
	 
	 event.addAdvanced(waterArmor, (item, advanced, text) => {
	 if(!event.shift) {
		 text.add(1, Text.of('§6Нажмите §lShift§r §6для подробностей'))
	 } else {
		 text.add(1, Text.of('§6|Эффект полного комлекта:'))
		 text.add(2, Text.of('§6|Дарует эффект водного дыхания'))
	  }
	})
	
	//airArmor
	 const airArmor = [
	'iter_rpg:air_armor_helmet',
	'iter_rpg:air_armor_chestplate',
	'iter_rpg:air_armor_leggings',
	'iter_rpg:air_armor_boots'
	]
	 
	 event.addAdvanced(airArmor, (item, advanced, text) => {
	 if(!event.shift) {
		 text.add(1, Text.of('§6Нажмите §lShift§r §6для подробностей'))
	 } else {
		 text.add(1, Text.of('§6|Эффект полного комлекта:'))
		 text.add(2, Text.of('§6|Дарует эффект прыгучести'))
	  }
	})
	
	//earthArmor
	 const earthArmor = [
	'iter_rpg:earth_armor_helmet',
	'iter_rpg:earth_armor_chestplate',
	'iter_rpg:earth_armor_leggings',
	'iter_rpg:earth_armor_boots'
	]
	 
	 event.addAdvanced(earthArmor, (item, advanced, text) => {
	 if(!event.shift) {
		 text.add(1, Text.of('§6Нажмите §lShift§r §6для подробностей'))
	 } else {
		 text.add(1, Text.of('§6|Эффект полного комлекта:'))
		 text.add(2, Text.of('§6|Дарует эффекты сопротивления ядам и иссушению'))
	  }
	})
	
	
	//XPTomes
	const XPTomes = [
	'enigmaticlegacy:tattered_tome',
	'enigmaticlegacy:withered_tome',
	'enigmaticlegacy:corrupted_tome'
	]
	
	event.addAdvanced(XPTomes, (item, advanced, text) => {
		text.add(1, Text.of('§cБыл отключен в угоду баланса'))
	})
	
	
	
	event.addAdvanced(banned, (item, advanced, text) => {
		text.add(1, Text.of('§cОтключено в угоду баланса'))
	})
	
	
	//'cataclysm:athame'
	event.addAdvanced('cataclysm:athame', (item, advanced, text) => {
	 if(!event.shift) {
		 text.add(1, Text.of('§6Нажмите §lShift§r §6для подробностей'))
	 } else {
		 text.add(1, Text.of('§6|Особая способность "Ритуальная резня":'))
		 text.add(2, Text.of('§6|Если ударить атамом корову или свинью, то цель сразу умрет, а вы получите эффект умеренного буйства на 3 минуты'))
		 text.add(4, Text.of('§6|Перезарядка способности - 5 минут'))
	  }
	})
	
	
	//mythicChestSpellstones
	const mythicChestSpellstones = [
	'enigmaticlegacy:eye_of_nebula',
	'enigmaticlegacy:blazing_core',
	'enigmaticlegacy:void_pearl',
	'enigmaticlegacy:ocean_stone',
	'enigmaticlegacy:angel_blessing',
	'enigmaticlegacy:golem_heart'
	]
	
	event.addAdvanced(mythicChestSpellstones, (item, advanced, text) => {
		text.add(1, Text.of('§bМожно получить в качестве награды из мистического сундука'))
	})
	
	//chapter_I_recipeLocks
	const chapter_I_recipeLocks = ['enigmaticlegacy:mining_charm']
	
	event.addAdvanced(chapter_I_recipeLocks, (item, advanced, text) => {
		text.add(1, Text.of('§6§o§n[Условие для создания: Пройдите главу I]'))
	})
	
	//chapter_II_recipeLocks
	const chapter_II_recipeLocks = ['enigmaticlegacy:forbidden_axe']
	
	event.addAdvanced(chapter_II_recipeLocks, (item, advanced, text) => {
		text.add(1, Text.of('§6§o§n[Условие для создания: Пройдите главу II]'))
	})
	
	//chapter_III_recipeLocks
	const chapter_III_recipeLocks = ['enigmaticlegacy:astral_fruit', 'enigmaticlegacy:enchanter_pearl', 'enigmaticlegacy:ender_slayer']
	
	event.addAdvanced(chapter_III_recipeLocks, (item, advanced, text) => {
		text.add(1, Text.of('§6§o§n[Условие для создания: Пройдите главу III]'))
	})
	
	//chapter_IV_recipeLocks
	const chapter_IV_recipeLocks = ['enigmaticlegacy:monster_charm', 'enigmaticlegacy:forbidden_fruit', 'soulsweapons:withered_chest', 'soulsweapons:enhanced_withered_chest']
	
	event.addAdvanced(chapter_IV_recipeLocks, (item, advanced, text) => {
		text.add(1, Text.of('§6§o§n[Условие для создания: Пройдите главу IV]'))
	})
	
	//chapter_V_recipeLocks
	const chapter_V_recipeLocks = []
	
	event.addAdvanced(chapter_V_recipeLocks, (item, advanced, text) => {
		text.add(1, Text.of('§6§o§n[Условие для создания: Пройдите главу V]'))
	})
	
	//chapter_VI_recipeLocks
	const chapter_VI_recipeLocks = ['soulsweapons:arkenplate', 'soulsweapons:enhanced_arkenplate']
	
	event.addAdvanced(chapter_VI_recipeLocks, (item, advanced, text) => {
		text.add(1, Text.of('§6§o§n[Условие для создания: Пройдите главу VI]'))
	})
	
	//chapter_VII_recipeLocks
	const chapter_VII_recipeLocks = ['enigmaticlegacy:the_cube', 'enigmaticlegacy:the_infinitum']
	
	event.addAdvanced(chapter_VII_recipeLocks, (item, advanced, text) => {
		text.add(1, Text.of('§6§o§n[Условие для создания: Пройдите главу VII]'))
	})
	
	//enigmaticlegacy:abyssal_heart
	event.addAdvanced('enigmaticlegacy:abyssal_heart', (item, advanced, text) => {
		if(!event.shift) {
		text.add(1, Text.of('§dВыпадает из Эндер-Дракона'))
		text.add(2, Text.of(''))
		} else {}
	})
	
	//enigmaticlegacy:escape_scroll
	event.addAdvanced('enigmaticlegacy:escape_scroll', (item, advanced, text) => {
		text.add(1, Text.of('§cОтключен из-за конфликта с модом Corpse (Удаляет предметы при возрождении)'))
	})
	
	//enigmaticlegacy:guardian_heart
	event.addAdvanced('enigmaticlegacy:guardian_heart', (item, advanced, text) => {
		if(!event.shift) {
		text.add(1, Text.of('§dВыпадает из Древнего Стража с шансом в §610%'))
		text.add(2, Text.of(''))
		} else {}
	})
	
	//enigmaticlegacy:astral_fruit
	event.addAdvanced('enigmaticlegacy:astral_fruit', (item, advanced, text) => {
		text.add(2, Text.of('§6Можно вкусить лишь единажды...'))
	})
	
	//kubejs:black_pearl
	event.addAdvanced('kubejs:black_pearl', (item, advanced, text) => {
		text.add(1, Text.of('§6Выпадает из Гребешка с шансом в 5%'))
	})
	
	//temporallyBannedItems
	const temporallyBannedItems = [
	'soulsweapons:darkin_blade',
	'soulsweapons:withered_wabbajack',
	'soulsweapons:whirligig_sawblade',
	'soulsweapons:dragonslayer_swordspear',
	'soulsweapons:nightfall',
	'soulsweapons:comet_spear',
	'soulsweapons:lich_bane',
	'soulsweapons:dawnbreaker',
	'soulsweapons:soul_reaper',
	'soulsweapons:leviathan_axe',
	'soulsweapons:skofnung',
	'soulsweapons:freyr_sword',
	'soulsweapons:featherlight',
	'soulsweapons:crucible_sword',
	'soulsweapons:holy_greatsword',
	'soulsweapons:draupnir_spear',
	'soulsweapons:holy_moonlight_sword',
	'soulsweapons:frostmourne',
	'soulsweapons:nights_edge_item',
	'soulsweapons:empowered_dawnbreaker',
	'soulsweapons:kraken_slayer_crossbow',
	'enigmaticlegacy:eldritch_pan'
	]
	
	event.addAdvanced(temporallyBannedItems, (item, advanced, text) => {
		text.add(1, Text.of('§cКрафт временно отключен!'))
	})
})

JEIEvents.hideItems(event => {
	event.hide(banned)
})