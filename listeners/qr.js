const qrcode = require('qrcode-terminal')
const { Listener } = require('wappermelon')

class QrListener extends Listener {
  constructor () {
    super({
      id: 'qr',
      event: 'qr'
    })
  }

  execute (qr) {
    qrcode.generate(qr, { small: true }, qr => {
      console.log(`Scan the following QR Code as you were connecting to WhatsApp Web:\n${qr}`)
    })
  }
}

module.exports = QrListener
