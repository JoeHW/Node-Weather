const request = require('request');

let getWeather = (lat, lng, callback) => {

request({
    url: `https://api.darksky.net/forecast/6fd990d927c48c2017e08d6da072cd12/${lat},${lng}`,
    json: true
  }, (error,response,body) => {
  if(!error && response.statusCode === 200){
    callback(undefined, {
      temperature: body.currently.temperature,
      actualTemp: body.currently.apparentTemperature
    })
  } else {
    callback('Problem getting weather...')
   }
 })
};

module.exports.getWeather = getWeather;
