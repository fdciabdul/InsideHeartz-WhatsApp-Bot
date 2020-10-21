const fs = require('fs')
const mime = require('mime-types')
const venom = require('venom-bot')
const yts = require("./lib/cmd.js");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
venom.create().then((client) => start(client))

function start(client) {
	
client.onIncomingCall(async (call) => {
       console.log(call);
      client.sendText(call.peerJid, "Sorry, I still can't answer calls");
      });
  
  
  
  
  client.onMessage(async (message) => {
	  
	  
    if (message.body == '!stik' || message.isMedia == true) {
      const buffer = await client.decryptFile(message)
      const fileName = `image.${mime.extension(message.mimetype)}`
      await fs.writeFile(fileName, buffer, async (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('File written successfully')
          await client.sendImageAsSticker(message.from, `./${fileName}`)
            .catch((err) => { })
        }
      })
    }
	
else if (message.body == "!fakta") {
const fetch = require("node-fetch"); 
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-fakta-unik.txt')
    .then(res => res.text())
    .then(body => {
	let tod = body.split("\n");
	let pjr = tod[Math.floor(Math.random() * tod.length)];
	client.sendText(pjr);
	});
}

// lirik
else if (message.body.startsWith("!lirik ")) {
let judul = message.body.replace(/!lirik/, "");
var  url = "http://tololbgt.coolpage.biz/lirik.php?judul="+judul;
axios.get(url)
  .then((result) => {

client.sendText(result.data.replace(/pjr-enter/g,"\n"));
});
}

// random pantun
// pajaar - 2020
else if (message.body == "!pantun") {
const fetch = require("node-fetch"); 
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
    .then(res => res.text())
    .then(body => {
	let tod = body.split("\n");
	let pjr = tod[Math.floor(Math.random() * tod.length)];
	client.sendText(pjr.replace(/pjrx-line/g,"\n"));
	});
}

  
  
	
	if (message.body.includes("!nulis")) {
		
 const { spawn } = require("child_process");
      console.log("writing...")
      client.sendText(message.from, "sabar njir, masih nulis botnya")
      const text = message.body.replace(/!nulis/, "")
      const split = text.replace(/(\S+\s*){1,10}/g, "$&\n")
      const fixedHeight = split.split("\n").slice(0, 25).join("\\n")
      console.log(split)
      spawn("convert", [
        "./assets/paper.jpg",
        "-font",
        "Indie-Flower",
        "-size",
        "700x960",
        "-pointsize",
        "18",
        "-interline-spacing",
        "3",
        "-annotate",
        "+170+222",
        fixedHeight,
        "./assets/result.jpg"
      ])
        .on("error", () => console.log("error"))
        .on("exit", () => {
          client.sendImage(
            message.from,
            "./assets/result.jpg",
            "result.jpg",
            ""
          )
          console.log("done")
        })
    }

if (message.body.includes("!ptl1")) {
	    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	  let img = 'data:image/jpeg;base64,'+response;
	
              client.sendFileFromBase64(
            message.from,
              img,
            "result.jpg",
            ""
          )
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

if (message.body.includes("!ptl2")) {
	    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	         let img = 'data:image/jpeg;base64,'+response;
	
              client.sendFileFromBase64(
            message.from,
              img,
            "result.jpg",
            ""
          )
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }


// Download Youtube Video


if (message.body.includes("!yt")) {
const url = message.body.replace(/!yt/, "");
const exec = require('child_process').exec;

var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

const ytdl = require("ytdl-core")
if(videoid != null) {
   console.log("video id = ",videoid[1]);
} else {
    client.sendText("Videonya gavalid gan.");
}
 client.sendText(" Tunggu sebentar kak .. Lagi di proses ☺");
ytdl.getInfo(videoid[1]).then(info => {
if (info.length_seconds > 1000){
 client.sendText("terlalu panjang.. \n sebagai gantinya \n kamu bisa klik link dibawah ini \π \n "+ info.formats[0].url)
}else{

console.log(info.length_seconds)

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
   client
  .sendFile(
    message.from,
    'mp4/'+ videoid[1] +'.mp4',
    'file_name',
    'See my file in pdf'
  )
}).catch(err=> {
    console.log("os >>>", err);
})

}
});

}
  



// End of file

  })
}
