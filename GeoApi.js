const axios = require('axios');

const GeoApi = (location)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=fde56c4e5d999bb74d63aa4c2675d76c`).then((res)=>{
            resolve({
                city : res.data[0].name,
                lat : res.data[0].lat,
                lon : res.data[0].lon
            })
        
    
        }).catch((err)=>{

            reject({Error : "Unable to find the location"})
        })
    })
}

GeoApi("rajagiriya").then((data)=>{
    console.log(data.city)
    console.log(data.lat)
    console.log(data.lon)
})
.catch((err)=>{
    console.log(err.Error)
})

