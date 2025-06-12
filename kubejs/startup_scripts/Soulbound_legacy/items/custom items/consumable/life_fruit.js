StartupEvents.registry('item', event => {
  event.create('life_fruit')
    .texture('kubejs:item/life_fruit')
	.tooltip('Одноразовый. При поедании дарует вам 2.5 сердечка здоровья навсегда.')
	.maxStackSize(1)
	.food(food =>
	food
	.hunger(0)
	.saturation(0)
	.alwaysEdible()
	)
})