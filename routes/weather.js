const express = require('express');
const weather = express.Router();
const getWeatherdata = require('../dependencies/getWeatherData');


//get All Products
weather.get('/', (req, res, next) => {
    getWeatherdata().then(data => { 
        console.log(data)
        res.status(200).json({
            message: "success",
            weather:'changed'
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({
            message:"failed",
        })
    })
});

module.exports = weather
