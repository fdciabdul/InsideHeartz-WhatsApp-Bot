const { Command } = require('wappermelon')

class ReverseCommand extends Command {
  constructor () {
    super({
      id: 'reverse',
      aliases: ['reverse', 'backward'],
      category: 'IDK', // OPTIONAL
      description: 'Returns text in backwards', // OPTIONAL
      usage: ['%c <text>'], // OPTIONAL
      ownerOnly: false, // OPTIONAL - DEFAULTS TO FALSE
      allowGroup: true, // OPTIONAL - DEFAULTS TO TRUE
      allowDM: true // OPTIONAL - DEFAULTS TO TRUE
    })
  }

  execute (message, args) {
    const text = args.join(' ').split('').reverse().join('')
    return this.client.sendMessage(message.from, text)
  }
}

module.exports = ReverseCommand
