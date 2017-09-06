
const yargs = require('yargs');
const geocode = require('../geocode/geocode');
const weather = require('../weather/weather')

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


// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(result, null, 2));
//   }
// });

weather.getWeather(34.1450374,-118.1051514, (errorMessage, result) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    console.log(result);
}
});





//6fd990d927c48c2017e08d6da072cd12
