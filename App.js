const WeatherApp = require("./WeatherApp")
const GeoApi = require("./GeoApi")



GeoApi("nugegoda").then((data)=>{
    return WeatherApp(data.lat, data.lon, data.city)

}).then((data)=>{
    console.log(data.weather)
})
.catch((err)=>{
    console.log(err.Error)
})