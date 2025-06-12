EntityJSEvents.attributes(event => {
	event.modify('born_in_chaos_v1:nightmare_stalker', attribute => {
		attribute.add("minecraft:generic.max_health", 50)
	})
	
	event.modify('alexscaves:luxtructosaurus', attribute => {
		attribute.add("minecraft:generic.max_health", 250)
	})
	
	event.modify('cataclysm:maledictus', attribute => {
		attribute.add("minecraft:generic.armor", 20)
	})
	
	event.modify('alexscaves:nucleeper', attribute => {
		attribute.add("minecraft:generic.max_health", 150)
	})
})