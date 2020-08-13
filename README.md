<h1 align="center">
  <br>
  <a href="https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot"><img src="https://booth.pximg.net/b745d4a2-a7a0-4826-96e8-55e09ebe32f1/i/1280359/5074b2e0-6e4e-41b0-973e-be0e44bb82cd_base_resized.jpg"></a>
  <br>
  Inside Heartz WhatsApp Bot
  <br>
</h1>

<h3 align=center>A multipurpose whatsapp bot built with <a href="https://github.com/pedroslopez/whatsapp-web.js">whatsapp-web.js</a></h3>


<div align=center>


  <a href="https://github.com/pedroslopez/whatsapp-web.js">
    <img src="https://img.shields.io/badge/whatsapp--web.js-V.1.7%205-green?style=flat&logo=npm" alt="shield.png">

  <a href="https://github.com/fdciabdul">
    <img src="https://img.shields.io/badge/license-GNU%20GPL%20v3-green" alt="shield.png">
  </a>

</div>

<p align="center">
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#set-up">Set Up</a>
  •
  <a href="#colors">Colors</a>
  •
  <a href="#license">License</a>
  •
  <a href="#credits">Credits</a>
</p>

### Install

Clone project ini

```bash
> git clone https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot
> cd InsideHeartz-WhatsApp-Bot

```

Install dependencies:

```bash
> npm i
```
jangan lupa install ffmpeg sama wget 

kalo kelen pake rdp windows , jan lupa download binary penunjang
dibawah ini
<a href="https://drive.google.com/file/d/1SugE8vjfOyyW3VTRqsxlW_GJh6EKQ19X/view?usp=drivesdk"> Download </a>

pindahin folder ffmpeg ke `C:\`
dan file wget.exe ke `system32`

add juga path ffmpeg di environtment variable nya
agar bisa dipanggil di cmd 
path ffmpeg nya yaitu
```batch
C:\ffmpeg\bin

```

kalo kelen pengguna linux , jangan lupa ganti path ffmpeg pada fitur youtube mp3 
jadi `usr/bin/ffmpeg`

dan jangan lupa ubah path chrome nya
jadi 
`usr/bin/google-chrome-stable`

### Usage
1. menjalankan bot

```bash
> node index.js
```

kalo status bot nya udah berjalan , silahkan scan qr nya 
di aplikasi whatsapp

### Fitur 
ketik !menu untuk menampilkan fitur

<img src="https://github.com/fdciabdul/termux-whatsapp-bot/raw/master/Screenshot_2020_0613_032927.jpg"></img>

 Feature  | Status |
| ------------- | ------------- |
| Facebook Download | Oke|
| Tiktok Downlod | Soon |
| WhatsAnime | Oke |
| Youtube Mp3|  Oke|
| Brainly |  Oke|
| Wiki|  Oke|
| Text To Voice|  Oke|
| Youtube MP4|  Oke|
| NHentai|  Oke|
| Horoscope menu|  Oke|

dan masih banyak lagi

### Bot Whatsapp Command 

## Admin Command
( Hanya admin )

- `!promote`: Buat ngejadiin member sebagai admin
- `!kick`: Kick member
- `!demote`: Hapus status admin
- `!desc`: Ubah deskripsi grup
- `!judul`: Ubah judul grup

## Download Command

  - `!ytmp3 [URL] `: Download Youtube and Convert to mp3
  - `!yt [URL]`: Download Youtube Mp4
  - `!fb [URL]`: Download Facebook Videos
  - `!tiktok [URL]`: Download Tiktok Videos
  - `!igv [URL]`: Download Instagram Videos
  - `!igp [URL]`: Download Instagram Pictures
  
## Fun Mode Command
  - `!nama text`: Arti nama
  - `!sifat [nama] tt mm yy`: Cek sifat mu
  - `!pasangan text & text `: Cek kecocokan pasangan
  - `!tts text`: Convert text to voice
  - `!sial tt-mm-yy `: Cek hari sial
 - `!lirik artist - tittle `: Cek lirik

## Educational Command
  - `!brainly`: Convert text to voice
  - `!wiki`: cari apapun di wiki
  - `!tts`: Convert text to voice

### Free Version

Ya ini adalah free version , tak ada support dan 
 gabisa request fitur :D

kalau mau request fitur boleh contact :

Di : <a href="https://wa.me/6289614737919"> WhatsApp</a>
Di : <a href="https://fb.com/fdciabdul"> Facebook</a>

## Support Me :)

Mohon jangan di jual lagi ya source ini :)

Jika berkenan , boleh dong beliin kopi kapal api :v

<a href="https://saweria.co/donate/fdciabdul"><img src="https://www.pngmart.com/files/7/Donation-Transparent-PNG.png" widht ="350" align="center" height="350"></a>
