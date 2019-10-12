const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const chalk = require('chalk');
const weather =require('./routes/weather');
const path =require('path');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with,Content-Type,Accept,Authorization");
    if(req.meth ==="OPTIONS"){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
})
//const publicDirectoy=path.join(__dirname,'./view');
//app.use(express.static(publicDirectoy));

app.use('',weather);



module.exports = app;
// const promie = new Promise(function(resolve,reject){

//           resolve("sucesss");

//     })

// const data=()=>promie.then((hhh)=>console.log(hhh));
// data();
// console.log(weatherData);
// const fun=()=>{
//     weatherData().then(ff=>console.log(ff));
// }
/***************************************/

//fun();


/////////////////////////////////////////////////// Second Approach ///////////////////////////////////////////////////////
// get url of of location
/******************************************************************* */
// const getLongLatUrl = new Promise(function (resolve, reject) {
//     //setTimeout(() => resolve(1), 1000);
//     ipAddress().then(ip => {
//         const urlLongLat = ` http://api.ipstack.com/${ip}?access_key=473242ae5d7fc77fefe8874429c02d1f`;
//         resolve(urlLongLat);
//     })
//         .catch(err => {
//             console.log(err);
//         })
// })
// /******************************************************************* */
// //get long lat data
// /***************************************/
// const getLongLatdata = getLongLatUrl.then(function (longLatUrl) {
//     return longLatUrl;
// })
// .catch(err=>console.log(err));
// /***************************************/

// const setData=getLongLatdata.then(function(longLatUrl){
//     return new Promise(function (resolve, reject) {
//     //var data;
//     requirePromise({ url: longLatUrl, json: true }).then(
//     resp=>{
//        // console.log(resp);
//         const data = {
//             long: resp.longitude,
//             lat: resp.latitude,
//             countryemoj: resp.location.country_flag_emoji_unicode,
//             countryFlag:resp.location.country_flag
//         }
//         //console.log(data)
//         resolve(data);
//     }    
// )
// })
// })
// .catch(err=>console.log(err));
// //console.log(setData);
// // //getLongLatdata

// //get Weather data
// /***************************************/
// const getWeatherdata = setData.then(function (data) {
//     console.log(chalk.blue(data));
//     const secretkey = '96e15f22ac2422205eac74849a06e137';
//     const units = 'auto';
//     const urlApi = `https://api.darksky.net/forecast/${secretkey}/${data.lat},${data.long}?units=${units}&lang=${language[0].Arabic}`;

//     request({ url: urlApi, json: true }, (error, resp) => {
//         console.log(reverse(resp.body.daily.data[0].summary) + " " + "current tempature is " + resp.body.currently.temperature + " and probality of rain " + resp.body.currently.precipProbability + "%");
//     })
// })
// //getWeatherdata
// /***************************************/

// function reverse(s) {
//     return s.split("").reverse().join("");
// }

