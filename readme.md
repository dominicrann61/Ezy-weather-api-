# Ezy Weather API


## Install ⌨⌨

```
npm install ezy-weather-api

```



## Usage

```

const weather = require('ezy-weather-api');



weather.getForecast('lat','long','units').then(result=>{
	console.log(result);
}); 


// this will get the weather for the given lat and long


weather.getLatAndLong('New york');

// What do you get?  You get New Yorks latitude and longitude of course 😂😂😂😂😂


```






## Docs


This.getForecast();


Params

Latitude

Longitude

Units: optional defualts to auto


Auto is based on your latitude and longitude and time zone









This.getLatAndLong();



Params


Query: this is required and is to find out the latitude and longitude of a given location
















## Notes


* This is a basic npm package for making use of the dark sky weather api and basically just makes it easier to get the data.




* In order to use this package you will need to get an api key from darksky.net







## Attribution

	
* [Powered by Dark Sky](https://darksky.net/poweredby/ "Powered by Dark Sky")














