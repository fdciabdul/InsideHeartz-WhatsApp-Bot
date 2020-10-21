<h1 align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->

  <br>
  <a href="https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot"><img src="https://telegra.ph/file/403ab70e865577ceb0383.png" width="150" height=150"></a>
  <br>
  Inside Heartz WhatsApp Bot
  <br>
</h1>
 <h3 align=center>A multipurpose whatsapp bot built with 💕</h3>
For English on here : <a href="https://github.com/fdciabdul/InsideHeartz-WhatsApp-Bot/blob/master/README_EN.MD"> English </a>
<div align=center>

<img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square"/>

  <a href="https://github.com/pedroslopez/whatsapp-web.js">
    <img src="https://img.shields.io/badge/whatsapp--web.js-V.1.7%205-green?style=flat&logo=npm" alt="shield.png"></a>
<img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/">
<img src="http://hits.dwyl.com/fdciabdul/InsideHeartz-WhatsApp-Bot.svg"/>
<a href="https://github.com/fdciabdul">
    <img src="https://img.shields.io/badge/license-GNU%20GPL%20v3-green?style=flat-square" alt="shield.png">
  </a>

</div>

<p align="center">
  <a href="#fitur">Features</a>
  •
  <a href="#install">Installation</a>
  •
  <a href="#perintah">Perintah</a>
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

| Fitur        | Status | Command | 
| --------------- |:---------:|:---:|
| Facebook Download | ✔️| !fb `url` |
| Instagram Download | ✔️ | !ig `url`|
| Pinterest Download  | ✔️ | !pin `url`|
| Youtube Download  | ✔️ | !yt `url`|
| Youtube MP3  | ✔️ | !ytmp3 `url`|
| Youtube Play Song|  ✔️| !play `keyword`|
| Penyegar Timelane 1|  ✔️| !ptl1|
| Penyegar Timelane 2|  ✔️|  !ptl2 |
| Penyegar Timelane 2|  ✔️|  !ptl2 |
| Random Fakta unik |  ✔️|  !fakta |
| Search Image By Keyword|  ✔️|  !searchimage `keyword` |
| Random Anime Images|  ✔️|  !randomanime |
| Wikipedia|  ✔️|  !wiki `keyword` |
| Chord Gitar|  ✔️|  !chord `keyword` |


## Premium Features ( cuz i spend a lot time of this )
| Fitur        | Status | Command | 
| --------------- |:---------:|:---:|
| Makalah downloader|  ✔️|  !makalah `keyword` |
| Chatbot AI (Simsimi Based)|  ✔️|  all mesage except groups |
| Lazada Flash Sale Check |  ✔️|  !lazflash |
| Tokped Flash Sale Check |  ✔️|  !tokpedflash |
| Shopee Flash Sale Check |  ✔️|  !shopflash |
| PPOB ( beli pulsa , voucher , token , etc) based on Tripay , Midtrans |  ✔️|  !beli |
| Periksa Data (Email , Password ) yang terleak |  ✔️|  !periksadata `email/password` |

 ***dan masih banyak lagi***

### Perintah 

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
  - `!lirik nama lagu` : menampilkan lirik lagu berdasarkan judul
  - `!nama text`: Arti nama
  - `!pasangan text & text `: Cek kecocokan pasangan
  - `!tts text`: Convert text to voice
  - `ptl1` : Random gambar gambar cewe cantik
  - `ptl2` : Random gambar gambar cowo gans 
  - `randomanime` : Random gambar gambar anime
  - `!pantun`: Random pantun
  - `!animehd`:Random HD anime
  - `!searchimage` : Pencarian gambar
  - `!chord` : Nyari chord gitar anjay

## Educational Command
  - `!fakta` : Random fakta
  - `!brainly`: - 
  - `!wiki`: Cari apapun di wiki
  - `!tts`: Convert text to voice




## Contributors ✨

Thanks goes to these wonderful people 

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
<td align="center"><img src="https://avatars0.githubusercontent.com/u/4368928?s=460&u=1ef3a3afeb197b85c054abbb96ed05bf58ab4e9f&v=4" width="100px;" alt=""/><br /><sub><b>pedroslopez</b></sub><br /></td>

<td align="center"><a href="https://fdci.se"><img src="https://avatars0.githubusercontent.com/u/31664438?s=460&u=251f36d7ab0fb4a74b162be7b18f6cdca8a74f8c&v=4" width="100px;" alt=""/><br /><sub><b>fdciabdul</b></sub></a><br /><a href="#content-abdul" title="Content"></a></td>
    <td align="center"><a href="https://pajaar.my.id"><img src="https://avatars0.githubusercontent.com/u/53967072?v=4" width="100px;" alt=""/><br /><sub><b>pajaR_19</b></sub></a><br /><a href="#content-pajaar" title="Content"></a></td>
  
</tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

