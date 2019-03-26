let fetch = require('node-fetch');


/**
 * This function get's the forecast for the given latitude and longitude
 * @param {string} latitude the latitude for the given location
 * @param {string} Longitude the longitude for the given location
 * @param {string} measurement the units of measurement you wish to receive 
 * @returns {promise} the promise in which you can use .then or await 
 */
 async function getForecast(lat,long,apiKey,unit = 'auto'){
	return fetch(`https://api.darksky.net/forecast/${apiKey}/${lat},${long}?units=${unit}`)
	.then((response)=> {
     return response.json();
  });
} 





/**
 * This function get's the latitude and longitude for the given town/city name, state and zip code
 * @param {string}  query town/city name, state and zip code
 * @returns {promise} a promise in which you can use .then or await 
 */
async function getLatAndLong(q){
	return fetch(`https://darksky.net/geo?q=${q}`)
	.then((response)=> {
     return response.json();
  });
} 




module.exports = {
	getForecast,
	getLatAndLong
};








