const request = require('request')


const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2a58e1a026479fd9fa55be16432d9385&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '&units=f'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else { 
            const currentTemp = response.body.current.temperature
            const feelsLike = response.body.current.feelslike
            callback(undefined, {
                currentTemp,
                feelsLike,
                string: response.body.current.weather_descriptions[0] + '. It is currently ' + currentTemp + ' degrees out. It feels like ' + feelsLike + ' degrees out.'
            })
        }
    })
}

module.exports = forecast

