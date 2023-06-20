const WeatherApp = require("./WeatherApp")
const GeoApi = require("./GeoApi")

const FullSet = (location)=>{
    GeoApi(location).then((data)=>{
        return WeatherApp(data.lat, data.lon, data.location)
    
    }).then((data)=>{
        console.log(data.weather)
    })
    .catch((err)=>{
        console.log(err.Error)
    })
}

module.exports = FullSet;