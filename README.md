<h1 align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
  <br>
  <a href="https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot"><img src="https://booth.pximg.net/b745d4a2-a7a0-4826-96e8-55e09ebe32f1/i/1280359/5074b2e0-6e4e-41b0-973e-be0e44bb82cd_base_resized.jpg"></a>
  <br>
  Inside Heartz WhatsApp Bot
  <br>
</h1>

<h3 align=center>A multipurpose whatsapp bot built with <a href="https://github.com/pedroslopez/whatsapp-web.js">whatsapp-web.js</a></h3>

For English on here : <a href="https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot/blob/master/README_EN.MD"> English </a>
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
| Wiki|  Oke|
| Text To Voice|  Oke|
| Youtube MP4|  Oke|
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
  - `!ig [URL]`: Download Instagram Videos

## Fun Mode Command
  - `!play nama lagu` : memutar musik dari youtube berdasarkan kata kunci
  - `!nama text`: Arti nama
  - `!pasangan text & text `: Cek kecocokan pasangan
  - `!tts text`: Convert text to voice
  - `ptl1` : Random gambar gambar cewe cantik
  - `ptl2` : Random gambar gambar cowo gans 
  - `randomanime` : Random gambar gambar anime
  - `!searchimage` : Pencarian gambar

## Educational Command
  - `!fakta` : random fakta
  - `!brainly`: Convert text to voice
  - `!wiki`: cari apapun di wiki
  - `!tts`: Convert text to voice



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jakebolam.com"><img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;" alt=""/><br /><sub><b>Jake Bolam</b></sub></a><br /><a href="#infra-jakebolam" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot/commits?author=jakebolam" title="Tests">⚠️</a> <a href="https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot/commits?author=jakebolam" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!