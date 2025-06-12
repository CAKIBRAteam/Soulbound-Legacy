// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')
NetworkEvents.dataReceived("close_gui", event => {
	Client.setScreen(null)
})
