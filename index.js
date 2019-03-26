let fetch = require('node-fetch');



 async function getForecast(lat,long,apiKey,unit = 'auto'){
	return fetch(`https://api.darksky.net/forecast/${apiKey}/${lat},${long}?units=${unit}`)
	.then((response)=> {
     return response.json();
  });
} 






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








