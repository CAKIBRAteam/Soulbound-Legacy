StartupEvents.registry('item', event => {
  event.create('stone_fruit')
    .texture('kubejs:item/stone_fruit')
	.tooltip('Можно использовать до 5 раз. При поедании дарует вам 1 еденицу врождённой брони навсегда.')
	.maxStackSize(5)
	.food(food =>
	food
	.hunger(0)
	.saturation(0)
	.alwaysEdible()
	)
})