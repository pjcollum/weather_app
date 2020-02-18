const request = require('request');                // npm i  request

require('dotenv').config() 
const getWeather = () => {
    request({                                        // https://www.npmjs.com/package/request
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,      //app id linked to api key
        json: true                  //json format if true, raw format if false
    }, (err, res) => {                 //error, response is uri
        if (err) throw err;             //one line if statement, if error throw error

        console.log(res.body);
    }
    )
}

getWeather();