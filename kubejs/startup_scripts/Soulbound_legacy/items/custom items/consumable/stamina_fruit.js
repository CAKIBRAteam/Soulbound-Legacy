StartupEvents.registry('item', event => {
  event.create('stamina_fruit')
    .texture('kubejs:item/stamina_fruit')
	.tooltip('Одноразовый. При поедании дарует вам 25% дополнительной максимальной выносливости навсегда. (25% - от базовой)')
	.maxStackSize(1)
	.food(food =>
	food
	.hunger(0)
	.saturation(0)
	.alwaysEdible()
	)
})