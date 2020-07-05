'use strict';

const wa = require('./src/wa');

imgUrl = 'http://4.bp.blogspot.com/-D2j5vndV2DM/US4FwS6h_MI/AAAAAAACsXs/OObReA9E-R0/s1600/Kingdom+-+38+-+03.jpg';

wa.searchAnimeWithURL(imgUrl)
  .then(searchResult => {
    console.log(searchResult);
  })
  .catch(err => {
    console.error(err)
  });
