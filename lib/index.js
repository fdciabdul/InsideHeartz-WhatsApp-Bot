const config = require("../config")
const Mybot = require("./tools/tools.class");
const imageToBase64 = require("image-to-base64");
const { Client, MessageMedia } = require("whatsapp-web.js");
var prefix = config.prefix;
const tools = new Mybot(config.apiurl);
async function runBot(command, number) {
  switch (command) {
    case prefix + "ptl":
      await sendImage(await tools.Pinterest("cewe"), number);
      break;
    case prefix + "anime":
      await sendImage(await tools.Pinterest("anime"), number);
      break;
      case prefix + "wallpaper":
        await sendImage(await tools.Pinterest("wallpaper"), number);
        break;
    case prefix + "insta":
      break;
    case prefix + "yt":
      break;
    case prefix + "ytmp3":
      break;
    case prefix + "pdfconvert":
      break;
    default:
      send(number , `Silahkan masukan yang benar`)
      break;
  }
}

async function send(message, number) {
  client.sendMessage(number, message);
}
async function sendImage(url, number) {
  const media = new MessageMedia("image/jpeg", await imageToBase64(url));
  client.sendMessage(number, media, {
    caption: `
Hai Kak 😊`,
  });
}
async function image(url) {
  return await imageToBase64(url);
}

module.exports = {
  runBot,
};
