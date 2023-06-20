const axios = require('axios');


const WeatherApp = (lat,lon,city) =>{
    return new Promise((resolve,reject)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=fde56c4e5d999bb74d63aa4c2675d76c`).then((response)=>{
            resolve({weather : `${city} current temparature is ${response.data.main.temp} C and ${response.data.weather[0].description} situation.` })

        }).catch((err)=>{

            reject({Error: err.response.data.message})

        })
    })
}

module.exports = WeatherApp


