const { Inhibitor } = require('wappermelon')

const BLACKLIST = ['CHAT_1', 'CHAT_2']

class BlackListInhibitor extends Inhibitor {
  constructor () {
    super({
      id: 'blacklist'
    })
  }

  execute (message, command) {
    return BLACKLIST.includes(message.from) // Inhibits if TRUE
  }
}

module.exports = BlackListInhibitor
