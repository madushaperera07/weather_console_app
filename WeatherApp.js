const axios = require('axios');


const WeatherApp = (lat,lon) =>{
    return new Promise((resolve,reject)=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=fde56c4e5d999bb74d63aa4c2675d76c`).then((response)=>{
            resolve({weather : `Current temparature is ${response.data.main.temp} and ${response.data.weather[0].description} situation.` })

        }).catch((err)=>{

            reject({Error: err.response.data.message})

        })
    })
}

WeatherApp(6.9387469,79.8541134).then((data)=>{
    console.log(data.weather)
})
.catch((err)=>{
    console.log(err.Error)
})


