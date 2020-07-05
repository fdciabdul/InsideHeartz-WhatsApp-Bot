const fs = require("fs"); 
const moment = require("moment");
const qrcode = require("qrcode-terminal"); 
const { Client, MessageMedia } = require("whatsapp-web.js"); 
const mqtt = require("mqtt"); 
const listen = mqtt.connect("mqtt://test.mosquitto.org"); 
const fetch = require("node-fetch"); 
const User = require("./user.js"); 
const delay = require("delay"); 
let urlen = require("urlencode"); 
const puppeteer = require("puppeteer"); 
const cheerio = require("cheerio");
const corona = require("./CoronaService/covid19.js"); 
const SESSION_FILE_PATH = "./session.json";
// file is included here
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionCfg = require(SESSION_FILE_PATH);
}
client = new Client({	  
    
	     puppeteer: {
        executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        headless: false,
		args: [
      "--log-level=3", // fatal only
   
      "--no-default-browser-check",
      "--disable-infobars",
      "--disable-web-security",
      "--disable-site-isolation-trials",
      "--no-experiments",
      "--ignore-gpu-blacklist",
      "--ignore-certificate-errors",
      "--ignore-certificate-errors-spki-list",
    
      "--disable-extensions",
      "--disable-default-apps",
      "--enable-features=NetworkService",
      "--disable-setuid-sandbox",
      "--no-sandbox",
    
      "--no-first-run",
      "--no-zygote"
    ]
		
    },	      
    session: sessionCfg
});
// You can use an existing session and avoid scanning a QR code by adding a "session" object to the client options.

client.initialize();

// ======================= Begin initialize WAbot

client.on("qr", qr => {
  // NOTE: This event will not be fired if a session is specified.
  qrcode.generate(qr, {
    small: true
  });
  console.log(`[ ${moment().format("HH:mm:ss")} ] Please Scan QR with app!`);
});

client.on("authenticated", session => {
  console.log(`[ ${moment().format("HH:mm:ss")} ] Authenticated Success!`);
  // console.log(session);
  sessionCfg = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function(err) {
    if (err) {
      console.error(err);
    }
  });
});

client.on("auth_failure", msg => {
  // Fired if session restore was unsuccessfull
  console.log(
    `[ ${moment().format("HH:mm:ss")} ] AUTHENTICATION FAILURE \n ${msg}`
  );
  fs.unlink("./session.json", function(err) {
    if (err) return console.log(err);
    console.log(
      `[ ${moment().format("HH:mm:ss")} ] Session Deleted, Please Restart!`
    );
    process.exit(1);
  });
});

client.on("ready", () => {
  console.log(`[ ${moment().format("HH:mm:ss")} ] Whatsapp bot ready!`);
});

// ======================= Begin initialize mqtt broker

listen.on("connect", () => {
  listen.subscribe("corona", function(err) {
    if (!err) {
      console.log(`[ ${moment().format("HH:mm:ss")} ] Mqtt topic subscribed!`);
    }
  });
});

// ======================= WaBot Listen on Event

client.on("message_create", msg => {
  // Fired on all message creations, including your own
  if (msg.fromMe) {
    // do stuff here
  }
});

client.on("message_revoke_everyone", async (after, before) => {
  // Fired whenever a message is deleted by anyone (including you)
  // console.log(after); // message after it was deleted.
  if (before) {
    console.log(before.body); // message before it was deleted.
  }
});

client.on("message_revoke_me", async msg => {
  // Fired whenever a message is only deleted in your own view.
  // console.log(msg.body); // message before it was deleted.
});

client.on("message_ack", (msg, ack) => {
  /*
        == ACK VALUES ==
        ACK_ERROR: -1
        ACK_PENDING: 0
        ACK_SERVER: 1
        ACK_DEVICE: 2
        ACK_READ: 3
        ACK_PLAYED: 4
    */

  if (ack == 3) {
    // The message was read
  }
});

client.on("group_join", notification => {
  // User has joined or been added to the group.
  console.log("join", notification);
  notification.reply("User joined.");
});

client.on("group_leave", notification => {
  // User has left or been kicked from the group.
  console.log("leave", notification);
  notification.reply("User left.");
});

client.on("group_update", notification => {
  // Group picture, subject or description has been updated.
  console.log("update", notification);
});

client.on("disconnected", reason => {
  console.log("Client was logged out", reason);
});

// ======================= WaBot Listen on message

client.on("message", async msg => {
 // console.log(
 //   `[ ${moment().format("HH:mm:ss")} ] Message:`,
 //   msg.from.replace("@c.us", ""),
//    `| ${msg.type}`,
 //   msg.body ? `| ${msg.body}` : ""
//  );


  if (msg.type == "ciphertext") {
    // Send a new message as a reply to the current one
    } else if (msg.body == "!ping reply") {
    // Send a new message as a reply to the current one
    msg.reply("pong");
  }else if (msg.body.startsWith("!anime")) {
var fs = require('fs');
var chat = await msg.getChat();
var files = fs.readdirSync('./kwpin')

/* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
var  gambar = files[Math.floor(Math.random() * files.length)] 
var yuli = fs.readFileSync(
        "./kwpin/"+ gambar,
        "base64"
      );
const media = new MessageMedia('image/jpg', yuli);

console.log(gambar);
client.sendMessage(media);
}
else if (msg.body.startsWith("!nh ")) {
const kode = msg.body.split(" ")[1];
const NanaAPI = require("nana-api");
const nana = new NanaAPI();
const https = require("https");
const fs = require("fs");
const { exec } = require("child_process");

// Get gallery from book ID or book link
nana.g(kode).then((g) => {
if (g == 'Book not found!'){
msg.reply("Kode nuklir nya salah , coba perhatiin lagi")
}else{
var url = "https://t.nhentai.net/galleries/"+ g.media_id +"/cover.jpg"

exec('wget "' + url + '" -O cover.jpg', (error, stdout, stderr) => {
 var teks = "Judul English  : "+ g.title.english.slice("0") +" \n \n Judul Japanese : "+ g.title.japanese +"\n \n Judul Pendek   : "+ g.title.pretty +"\n \n Kode Nuklir    : "+ g.id +" \n ";

let media = MessageMedia.fromFilePath('cover.jpg');
	client.sendMessage(msg.from, media, {
	caption: teks });
	if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
});
}
})

}
else if (msg.body.startsWith("!doujin ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
}
  else if (msg.body.startsWith("!fb ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
  }
 else if (msg.body.startsWith("!tw ")) {
 msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
	 
  }   
else if (msg.body.startsWith("!translate ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
}
	
else if (msg.body.startsWith("!fb ")) {

const request = require('request');
var req = msg.body.split(" ")[1];
const { exec } = require("child_process");
var crypto = require('crypto');
var fs = require('fs'); 
var chat = await msg.getChat();
var filename = 'video'+crypto.randomBytes(4).readUInt32LE(0)+'saya';
var path = require('path');
request.get({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'https://fbdownloader.net/download/?url='+ req,
},function(error, response, body){
    let $ = cheerio.load(body);
   var gehu = $('a[rel="noreferrer no-follow"]').attr('href');
msg.reply("bentarr lagi di proses dulu ya .. 😣");
exec('wget "' + gehu + '" -O mp4/gue.mp4', (error, stdout, stderr) => {
     const media = MessageMedia.fromFilePath('mp4/gue.mp4');
chat.sendMessage(media);
	 
	if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
		msg.reply("yahh gagal 😭");
        return;
    }

    console.log(`stdout: ${stdout}`);
});
});
}else if (msg.body.startsWith("!igv ")) {
   msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
  } 
  else if (msg.body.startsWith("!igp ")) {
   msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
	 
  } 
else if (msg.body.startsWith("!brainly ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");

}

else if (msg.body.startsWith("!sial ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
}

else if (msg.body.startsWith("!pasangan ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
}
else if (msg.body.startsWith("!ytmp3 ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
}else if (msg.body.startsWith("!cekresi ")) {
const fetch = require('node-fetch')
var nomor = msg.body.split("-n ")[1].split("-k")[0];

var kurir = msg.body.split("-k ")[1];
if (nomor.length === 0){
console.log("nomor resi belum diisi");

}if (kurir.length === 0){
console.log("kurir belum diisi")
}else{
const cekResi = (courier, waybill) => new Promise(async (resolve, reject) => {
  const opts = {
    method: 'POST',
    headers: {
      key: 'e079daba710176abe3c4e8edf375cb8e',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams([['waybill', waybill], ['courier', courier]])
  }

  fetch('https://pro.rajaongkir.com/api/waybill', opts)
    .then(res => res.json())
    .then(result => {
console.log(result.rajaongkir)
      msg.reply(`


Code kurir : ${result.rajaongkir.result.summary.replace("...", "").courier_code}
Kurir : ${result.rajaongkir.result.summary.replace("...", "").courier_name} 
Nomor Resi : ${result.rajaongkir.result.summary.replace("...", "").waybill_number}
Kode Service : ${result.rajaongkir.result.summary.replace("...", "").courier_name}
Pengirim : ${result.rajaongkir.result.summary.replace("...", "").shipper_name}
Penerima : ${result.rajaongkir.result.summary.replace("...", "").receiver_name}
Status  :${result.rajaongkir.result.summary.replace("...", "").status}

Asal dan Tujual : ${result.rajaongkir.result.summary.replace("...", "").origin} ke ${result.rajaongkir.result.summary.replace("...", "").destination}
`);
      resolve(result.rajaongkir)
    })
    .catch(err => reject(err))
console.log("error")
})
cekResi(kurir, nomor);

}
}

else if (msg.body.startsWith("!tts")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
}
else if (msg.body.startsWith("!nama ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
}
else if (msg.body.startsWith("!sifat ")) {
msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
  }
 else if (msg.body.startsWith("!bbb ")) {
const url = msg.body.split(" ")[1];

var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
var chat = await msg.getChat();
if(videoid != null) {
   console.log("video id = ",videoid[1]);
} else {
    msg.reply("Videonya gavalid gan.");
}
msg.reply(" Tunggu sebentar kak .. Lagi di proses ☺");

const exec = require('child_process').exec;

function os_func() {
    this.execCommand = function (cmd) {
        return new Promise((resolve, reject)=> {
           exec(cmd, (error, stdout, stderr) => {
             if (error) {
                reject(error);
                return;
            }
            resolve(stdout)
           });
       })
   }
}
var os = new os_func();

os.execCommand('ytdl ' + url + ' -q highest -o mp4/'+ videoid[1] +'.mp4').then(res=> {
    const media = MessageMedia.fromFilePath('mp4/'+ videoid[1] +'.mp4');
chat.sendMessage(media);
}).catch(err=> {
    console.log("os >>>", err);
})

 }
  else if (msg.body.startsWith("!ytmp3 ")) {
    // Send a new message to the same chat
    msg.reply(` 
	
fitur ini di hapus .. 
silahkan tanya owner kenapa
`);
  }   else if (msg.body == "!donate" ||
    msg.body === "donasi ") {
    // Send a new message to the same chat
    client.sendMessage(msg.from, ` 
	Jika merasa bot ini bermanfaat boleh 
	 Bantu memperpanjang server bot nya 
	 dan agar tetap berjalan dan tidak error
	 
	 😊 Jika ingin membantu boleh chat kesini
	 wa.me/6289614737919
	`);
  }
     else if (msg.body == "!rules" ||
    msg.body === "rules ") {
    // Send a new message to the same chat
    client.sendMessage(msg.from, ` 
	Rules ... !!!


• *Jangan spam bot ..*
 
• *Jangan rusuh kalo bot gaaktif*
• *Jangan telfon / vc bot nya ..*
     ( _auto block_ )
• *Jangan req yang aneh aneh ..*
  _seperti mendownload video ber jam jam_
  
• *Sesuai kan perintah dengan formatnya..*

_salah format dan bot error = block_

Konsekuensi :

 Melanggar rules bot akan keluar 
atau member yang nge rusuh harus di kick 


Rules ini untuk kenyamanan semua yang memakai
bot ini


	`);
  }
 
  else if (msg.body.startsWith("!sendto ")) {
    // Direct send a new message to specific id
    let number = msg.body.split(" ")[1];
    let messageIndex = msg.body.indexOf(number) + number.length;
    let message = msg.body.slice(messageIndex, msg.body.length);
    number = number.includes("@c.us") ? number : `${number}@c.us`;
    let chat = await msg.getChat();
    chat.sendSeen();
    client.sendMessage(number, message);
  }
  else if (msg.body == "kok" ||
    msg.body === "Kok") {
    // Send a new message to the same chat
    client.sendMessage(msg.from, "Gabut bangettt sihhh.. 🤭");
  }
    else if (msg.body == ":(" ||
    msg.body === "sedih" ||
    msg.body === "😭"  ||
    msg.body === "😢") {
    // Send a new message to the same chat
    msg.reply ("Jangan sedih ya .. aku ada disini kok , coba ceritain apa masalah nya 😊🤗");
  }
  else if (msg.body.startsWith("!loker ")) {
const teks = msg.body.split("!loker ")[1];
var req = teks.split("[")[1].split("]")[0];
var kerjaan = teks.split("]")[1];
const indeed = require('indeed-scraper');

const queryOptions = {
  host: 'id.indeed.com',
  query: kerjaan,
  city: req,
  radius: '100',
  level: 'entry_level',
  jobType: 'fulltime',
  maxAge: '7',
  sort: 'date',
  limit: 100
};

indeed.query(queryOptions).then(res => {
client.sendMessage(msg.from, 
`
==============================
Nama Posisi :  *${res[0].title}*

Pekerjaan   : *${res[0].summary.replace("...", "").replace("...", "")}*

Perusahaan  : *${res[0].company}*

Tempat      : *${res[0].location}*

Waktu       : *${res[0].postDate}*

Link           : *${res[0].url}*

==============================

Nama Posisi :  *${res[1].title}*

Pekerjaan   : *${res[1].summary.replace("...", "")}*

Perusahaan  : *${res[1].company}*

Tempat      : *${res[1].location}*

Waktu       : *${res[1].postDate}*

Link           : *${res[1].url}*

==============================

Nama Posisi :  *${res[2].title}*

Pekerjaan   : *${res[2].summary.replace("...", "")}*

Perusahaan  : *${res[2].company}*

Tempat      : *${res[2].location}*

Waktu       : *${res[2].postDate}*

Link           : *${res[2].url}*

==============================

Nama Posisi :  *${res[3].title}*

Pekerjaan   : *${res[3].summary.replace("...", "")}*

Perusahaan  : *${res[3].company}*

Tempat      : *${res[3].location}*

Waktu       : *${res[3].postDate}*

Link           : *${res[3].url}*

==============================

`);

});
}

else if (msg.body == "info" || msg.body == "!help" || msg.body == "!menu") {
  msg.reply("berhubung banyak yang masih iseng download video 10jam , bot udah gaaktif .. ");
  } else if (msg.body == "#codbah") {
    msg.reply(`
	Bahasa                Code
######               #####
English                 |  en
Esperanto            |  eo
Estonian              |  et
Finnish                |  fi
French                 |  fr
Frisian                 |  fy
Galician               |  gl
Georgian              |  ka
German               |  de
Greek                   |  el
Gujarati               |  gu
Haitian Creole    |  ht
Hausa                  |  ha
Hawaiian            |  haw (ISO-639-2)
Hebrew               |  he or iw
Hindi                   |  hi
Hmong                |  hmn (ISO-639-2)
Hungarian          |  hu
Icelandic             |  is
Igbo                     |  ig
Indonesian         |  id
Irish                     |  ga
Italian                  |  it
Japanese             |  ja
Javanese              |  jv
Kannada              |  kn
Kazakh                 |  kk
Khmer                  |  km
Kinyarwanda      |  rw
Korean                 |  ko
Kurdish               |  ku
Kyrgyz                |  ky
Lao                      |  lo
Latin                   |  la
Latvian               |  lv
Lithuanian         |  lt
Luxembourg     |  lb
Macedonian      |  mk
Malagasy           |  mg
Malay                 |  ms
Malayalam        |  ml
Maltese               |  mt
Maori                  |  mi
Marathi               |  mr
Myanmar.          |  my
Nepali                 |  ne
Norwegian          |  no
Nyanja.               |  ny
Odia (Oriya)        |  or
Pashto                |  ps
Persian               |  fa
Polish                 |  pl
Portuguese.        |  pt
Punjabi               |  pa
Romanian           |  ro
Russian               |  ru
Samoan               |  sm
Scots Gaelic        |  gd
Serbian               |  sr
Sesotho               |  st
Shona                 |  sn
Sindhi                 |  sd
Slovak                 |  sk
Slovenian            |  sl
Somali                 |  so
Spanish               |  es
Sundanese          |  su
Swahili                |  sw
Swedish               |  sv
Tagalog.               |  tl
Tajik                     |  tg
Tamil                    |  ta
Tatar                     |  tt
Telugu                  |  te
Thai                      |  th
Turkish                |  tr
Turkmen              |  tk
Ukrainian             |  uk
Urdu                      |  ur
Uyghur                  |  ug
Uzbek                    |  uz
Vietnamese          |  vi
Welsh                   |  cy
Xhosa                   |  xh
Yiddish                 |  yi
Yoruba                  |  yo
Zulu                      |  zu
      ` );
  } else if (msg.body == "!leave") {
    // Leave the group
    let chat = await msg.getChat();
    if (chat.isGroup) {
      chat.leave();
    } else {
      msg.reply("This command can only be used in a group!");
    }
  } else if (msg.body.startsWith("!yts ")) {
    let axios = require('axios').default;

async function search_youtube(username) {
    let request = await axios.get(`https://www.youtube.com/results?search_query=${username}&disable_polymer=1`);
    let body = request.data;
    let page = String(body);
    let page_source = page.split(" ");
    let title = []; //output title(s) array
    let id = []; //output id(s) array
    for (let index = 0; index<page_source.length; index+=2) {
        element = page_source[index];
        if (element.substring(0,15) == 'href="/watch?v='  && element.length == 27) {
            id.push(element.substring(15, element.length -1));
        };
    };
    for (let index = 0; index<page_source.length; index++) {
        let element = page_source[index];
        let element_next = page_source[index+2];
        if (element.substring(0,23) == 'data-sessionlink="itct=' && element_next.substring(0,7) == 'title="') {   
            let buffer = "";
            let init = page_source[index+2];
            buffer+= init;
            let sub_index = index + 3;
            let end = index + 43;
            while (sub_index<end) {
                let this_element = page_source[sub_index];
                let next_element = page_source[sub_index+1];
                if (this_element[this_element.length-1]== '"' && next_element == 'rel="spf-prefetch"') {
                    buffer+=(" "+this_element);
                    title.push(buffer.substring(7, buffer.length -1));
                    break;
                }
                else {buffer+=(" "+this_element);};
                sub_index+=1;
            };
        };
    };
    return [id, title]; //returned array having two sub-arrays of result video ids and names.
};

//calling async function
var search = msg.body.split(" ")[1];
(async () => {
    let callback = await search_youtube(search);
    for (let index in callback[0]) {
     var id =  callback[0][index];
     var title = callback[1][index];
        msg.reply(`
		
		Pencarian yang di temukan..

///////////////////////

ID VIDEO : *${id}*
Judul : *_${title}_*

//////////////////////

*Salin ID videonya saja , lalu gunakan untuk 
mendownload video atau mp3 di bot ini*

fitur ini berguna untuk kaum fakir kuota 
yang hanya punya kuota chat haha

👾 Inside Bot 2020 👾

`);
    };
})();

  }
});

listen.on("message", (topic, message) => {
  console.log(`[ ${moment().format("HH:mm:ss")} ] MQTT: ${message.toString()}`);
  fs.readFile("./CoronaService/user.json", "utf-8", function(err, data) {
    if (err) throw err;
    const userData = JSON.parse(data);
    for (var i = 0; i < userData.length; i++) {
      let number = userData[i].user;
      // number = number.includes('@c.us') ? number : `${number}@c.us`;
      setTimeout(function() {
        console.log(
          `[ ${moment().format("HH:mm:ss")} ] Send Corona Update to ${number}`
        );
        if (message.toString() === "New Update!") {
          fs.readFile("./CoronaService/data.json", "utf-8", function(
            err,
            data
          ) {
            if (err) throw err;
            const localData = JSON.parse(data);
            const newCases = localData.NewCases === "" ? 0 : localData.NewCases;
            const newDeaths =
              localData.NewDeaths === "" ? 0 : localData.NewDeaths;
            client.sendMessage(
              number,
              `
                    *COVID-19 Update!!*
Negara: ${localData.Country}

Kasus aktif: ${localData.ActiveCases}
Total Kasus: ${localData.TotalCases}
*Kasus Baru: ${newCases}*
        
Meninggal: ${localData.TotalDeaths}
*Meninggal Baru: ${newDeaths}*
        
Total Sembuh: ${localData.TotalRecovered}
                    
Dicek pada: ${moment()
                .format("LLLL")
                .replace("pukul", "|")} WIB
Sumber: 
_https://www.worldometers.info/coronavirus/_
                    `
            );
          });
        }
        // Delay 3 Sec
      }, i * 3000);
    }
  });
});
