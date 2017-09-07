
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: "Address to get weather for...",
      string: 'true'
    }
})
  .help()
  .alias('help', 'h')
  .argv;

let encodeAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address...')
   }

   let lat = response.data.results[0].geometry.location.lat;
   let lng = response.data.results[0].geometry.location.lng;
   let weatherURL = `https://api.darksky.net/forecast/6fd990d927c48c2017e08d6da072cd12/${lat},${lng}`;
   console.log(response.data.results[0].formatted_address);
   return axios.get(weatherURL);
 }).then((response) => {
   let temperature = response.data.currently.temperature;
   let apparentTemperature = response.data.currently.apparentTemperature;
   console.log(`It's currently ${temperature}, it feels like ${apparentTemperature}`);
 }).catch((e) => {
  if(e.code === 'ENOTFOUND') {
  console.log('Unable to reach API servers...')
 } else {
  console.log(e.message);
 }
});


//API key: 6fd990d927c48c2017e08d6da072cd12
