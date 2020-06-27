const brainly = require('brainly-scraper');


brainly("NKRI").then(res => {
        res.forEach(item => {
       console.log("---------------")
       console.log(item.pertanyaan)
 console.log(item.jawaban[0].text)
	
      console.log("----------------")
})
})