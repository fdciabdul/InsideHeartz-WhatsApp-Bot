'use strict';

const wa = require('../src/wa');

const imgPath = 'assets/examples.jpg';

wa.searchAnime(imgPath)
  .then(searchResult => searchResult.docs)
  .then(searchResult => {
    return wa.getInfo(searchResult[0]['anilist_id']);
  })
  .then(aniInfo => console.log(aniInfo));
  .catch(err => {
    console.error(err);
  });
