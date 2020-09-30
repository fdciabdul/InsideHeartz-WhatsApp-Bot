
const puppeteer = require("puppeteer");
const fs = require('fs');
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36';
 function foreach(arr, func){
  for(var i in arr){
    func(i, arr[i]);
  }
}

async function isPwned(email) {
  let browser;
  try {
    browser = await puppeteer.launch();
    const url = `https://haveibeenpwned.com/unifiedsearch/${email}`;
    const [page] = await browser.pages();
    await page.setUserAgent(userAgent);
    const response = await page.goto(url);
    //console.log(await response.text());
        const { Breaches } = await response.json();
	let hasil = ""
      foreach(Breaches, function(i, v){
		  hasil += `
		  
====================================
 Name    : *${Breaches[i].Name}* 
 
 Title   : *${Breaches[i].Title}*
 
 Domain  : *${Breaches[i].Domain}*

 PwnedCount : *${Breaches[i].PwnCount}*
 
 Description : 
 *${Breaches[i].Description.replace(regex , "")}*
 
 ===================================
 `
		  
		  
})

console.log(` 
🚫 Your Email Got Leaked From 
 
  ${hasil} `
  )
  
  } catch(error) {
    console.log(error);
    return [];
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
exports.isPwned = isPwned
