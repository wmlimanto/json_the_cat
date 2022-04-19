const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  // edge case: request failed
  if (error) {
    console.log("URL is invalid!");
    return;
    // edge case: breed not found
  } else if (body === '[]') {
    console.log(`We can't find this breed - please try again!`);
    return;
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
    return;
  }
});