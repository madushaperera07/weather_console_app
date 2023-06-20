const axios = require('axios');

const GeoApi = (location)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=fde56c4e5d999bb74d63aa4c2675d76c`).then((res)=>{
            resolve({
                location : res.data[0].name,
                lat : res.data[0].lat,
                lon : res.data[0].lon
            })
        
    
        }).catch(()=>{

            reject({Error : "Unable to find the location"})
        })
    })
}

module.exports = GeoApi

