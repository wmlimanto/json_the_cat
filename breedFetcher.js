const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // edge case: request failed
    if (error) {
      callback(error, null);
      // edge case: breed not found
    } else if (body === '[]') {
      callback(`We can't find this breed - please try again!`, null)
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  })
};

module.exports = { fetchBreedDescription };