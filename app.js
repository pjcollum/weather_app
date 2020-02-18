const request = require('request');                // npm i  request
const {promisify} = require('util');

require('dotenv').config()     //https://www.npmjs.com/package/dotenv
const promisifiedRequest = promisify(request); //given a variable name

const getWeather = async () => {        //async function
        let data = await promisifiedRequest({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,  //app id linked to api key
            json: true                 //json format if true, raw format if false
        })

        console.log(data.body)
}
getWeather();