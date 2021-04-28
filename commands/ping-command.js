const { Command } = require('wappermelon')

class PingCommand extends Command {
  constructor () {
    super({
      id: 'ping',
      aliases: ['ping', 'test'],
      category: 'IDK', // OPTIONAL
      description: 'Pongs you ¯\\_(ツ)_/¯', // OPTIONAL
      usage: ['%c'], // OPTIONAL
      ownerOnly: false, // OPTIONAL - DEFAULTS TO FALSE
      allowGroup: true, // OPTIONAL - DEFAULTS TO TRUE
      allowDM: true // OPTIONAL - DEFAULTS TO TRUE
    })
  }

  execute (message) {
    return this.client.sendMessage(message.from, 'Pong!')
  }
}

module.exports = PingCommand
