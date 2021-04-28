const fs = require('fs')
const { Command, utils } = require('wappermelon')

class DownloadMediaCommand extends Command {
  constructor () {
    super({
      id: 'media-dl',
      aliases: ['download', 'downloadmedia'],
      category: 'Media', // OPTIONAL
      description: 'Self explanatory', // OPTIONAL
      usage: ['%c'], // OPTIONAL
      ownerOnly: false, // OPTIONAL - DEFAULTS TO FALSE
      allowGroup: true, // OPTIONAL - DEFAULTS TO TRUE
      allowDM: true // OPTIONAL - DEFAULTS TO TRUE
    })
  }

  async execute (message) {
    const media = await utils.resolveMedia(message)

    if (media) {
      const ext = media.mimetype.split('/').pop()

      fs.writeFileSync(`id._serialized.${ext}`, Buffer.from(media.data, 'base64'))
      return await this.client.sendMessage(message.from, 'Done :D')
    }

    return await this.client.sendMessage(message.from, 'Couldnt find a valid media.')
  }
}

module.exports = DownloadMediaCommand
