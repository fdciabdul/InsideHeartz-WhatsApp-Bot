const instagram_download = require ('@juliendu11/instagram-downloader');
 
(async () => {
const value = await instagram_download.downloadMedia('https://www.instagram.com/p/B_SgH6MHc2s/', './')
console.log(value)
})();