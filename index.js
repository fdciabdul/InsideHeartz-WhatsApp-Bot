const { join } = require('path')
const { WappermelonClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('wappermelon')

class ExampleClient extends WappermelonClient {
  constructor () {
    super({
      owner: ['number_1', 'number_2'], // OPTIONAL
      sessionPath: 'session.json', // TECHNICALLY OPTIONAL BUT RECOMMENDED
      clientOptions: { // OPTIONAL
        puppeteer: { headless: false }
      }
    })

    this.commandHandler = new CommandHandler(this, { prefix: '.', defaultDir: join(__dirname, 'commands') })
    this.inhibitorHandler = new InhibitorHandler(this, { defaultDir: join(__dirname, 'inhibitors') })
    this.listenerHandler = new ListenerHandler(this, { defaultDir: join(__dirname, 'listeners') })
    this.commandHandler.useInhibitor(this.inhibitorHandler)

    this.commandHandler.loadAll()
    this.inhibitorHandler.loadAll()
    this.listenerHandler.loadAll()
  }
}

client = new ExampleClient()
client.initialize()
