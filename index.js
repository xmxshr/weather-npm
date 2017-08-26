#!/usr/bin/env node

var axios = require('axios')
var data = {}

if(process.argv[2]){
  data.params = {
    city: process.argv[2]
  }
}

axios.get('http://api.jirengu.com/weather.php',data)
.then(function(response){
  // console.log(response)
  if(response.data.message){
    console.log(response.data.message)
    return
  }
  var weather = response.data.results[0]
  console.log(weather.currentCity + ',' + weather.weather_data[0].date)
  console.log('PM25: ' + weather.pm25)
  console.log(weather.weather_data[0].temperature)
  console.log(weather.weather_data[0].weather+ ',' + weather.weather_data[0].wind)
  console.log(weather.index[0].des)
})
.catch(function(error){
  console.log(error)
})
