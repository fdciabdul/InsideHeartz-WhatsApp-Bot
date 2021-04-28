const { Listener } = require('wappermelon')
const { version } = require('whatsapp-web.js')

class ReadyListener extends Listener {
  constructor () {
    super({
      id: 'ready',
      event: 'ready'
    })
  }

  async execute () {
    console.log(`Running on whatsapp-web.js version ${version}.`)
    console.log(`Running on Whatsapp Web version ${await this.client.getWWebVersion()}.`)
    console.log(`Connected as ${this.client.info.pushname} (+${this.client.info.wid.user}).`)
    console.log(`Done in ${process.uptime().toFixed(1)} seconds.`)
  }
}

module.exports = ReadyListener
