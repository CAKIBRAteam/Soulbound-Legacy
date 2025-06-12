ServerEvents.recipes(event => {
	event.custom({
     type: 'farmersdelight:cutting',
     ingredients: [
       { item: 'farm_and_charm:lettuce' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'farmersdelight:cabbage_leaf', count: 2 }
  ]
})
})