const latLongDta = require('./getLongLatInfo');
const request = require('request');

const language = require('../counteries');
const requirePromise = require('request-promise');

const getWeatherdata = async function () {
    let response = [];
   
    const dataGet = await latLongDta();

    const secretkey = '96e15f22ac2422205eac74849a06e137';
    const units = 'auto';
    const urlApi = `https://api.darksky.net/forecast/${secretkey}/${dataGet.lat},${dataGet.long}?units=${units}&lang=${language[0].Arabic}`;
  
    response.push(dataGet);
    const resp = await requirePromise({ url: urlApi, json: true });
    const weatherForcastCurrent = {
        currently: {
            date: resp.currently.time,
            icon: resp.currently.icon,
            summary: resp.currently.summary,
            temperature: resp.currently.temperature,
            dewPoint: resp.currently.dewPoint,
            humidity: resp.currently.humidity,
            windSpeed: resp.currently.windSpeed,
            precipProbability: resp.currently.precipProbability
        }
    }
    const weatherForcastdays = {
        day1: {
            date: resp.daily.data[0].time,
            icon: resp.daily.data[0].icon,
            summary: resp.daily.data[0].summary,
            high:resp.daily.data[0].temperatureHigh,
            down: resp.daily.data[0].temperatureLow,
            humidity: resp.daily.data[0].humidity,
            windSpeed: resp.daily.data[0].windSpeed,
            precipProbability: resp.daily.data[0].precipProbability
        },
        day2: {
            date: resp.daily.data[1].time,
            icon: resp.daily.data[1].icon,
            summary: resp.daily.data[1].summary,
            high:resp.daily.data[1].temperatureHigh,
            down: resp.daily.data[1].temperatureLow,
            humidity: resp.daily.data[1].humidity,
            windSpeed: resp.daily.data[1].windSpeed,
            precipProbability: resp.daily.data[1].precipProbability
        },
        day3: {
            date: resp.daily.data[2].time,
            icon: resp.daily.data[2].icon,
            summary: resp.daily.data[2].summary,
            high:resp.daily.data[2].temperatureHigh,
            down: resp.daily.data[2].temperatureLow,
            humidity: resp.daily.data[2].humidity,
            windSpeed: resp.daily.data[2].windSpeed,
            precipProbability: resp.daily.data[2].precipProbability
        }
    }
    response.push(weatherForcastCurrent);
    response.push(weatherForcastdays);
    return response;


}


module.exports = getWeatherdata;