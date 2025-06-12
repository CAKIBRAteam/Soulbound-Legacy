MoreJSEvents.filterAvailableEnchantments((event) => {
	

	event.remove("enigmaticlegacy:wrath");
	event.remove("spell_power:haste");
	event.remove("spell_power:magic_protection");
	event.remove("spell_power:sunfire");
	event.remove("spell_power:spell_power");
	event.remove("spell_power:soulfrost");
	event.remove("iter_rpg:attunement");
	event.remove("iter_rpg:arcane_capacity");
	event.remove("more_rpg_classes:elemental");
	event.remove("spell_power:critical_damage");
	event.remove("spell_power:critical_chance");
	event.remove("spell_power:energize");
	event.remove("spell_engine:spell_infinity");
	
	event.addWithLevel("enigmaticlegacy:wrath", 3);
})