const axios = require("axios");

 class Mybot {
  constructor (keyword) {
    this.apiurl = keyword;
  }
  async Pinterest (key) {
    if(key === "cewe"){
    const data = await axios.get(this.apiurl +"/pinterest/rep.php?gambar=cewe")
    return random(data.data);
    }
    else if(key === "anime"){
      const data = await axios.get(this.apiurl +"/pinterest/rep.php?gambar=ulzzang")
      return random(data.data);
    }
    else if(key === "wallpaper"){
      const data = await axios.get(this.apiurl +"/pinterest/rep.php?gambar=wallpaper")
      return random(data.data);
    }
  }
  
  Youtube(url){
    const data = await axios.get("https://siapaytdl.herokuapp.com/?url="+encodeURI(url))
    let info = data.data.title
    return {
      data: info
    };
  }

}

function random(list) {
  return list[Math.floor((Math.random()*list.length))];
}
module.exports = Mybot;