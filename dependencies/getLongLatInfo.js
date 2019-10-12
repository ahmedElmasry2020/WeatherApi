
const ipAddress = require('./getIpAddress');
const requirePromise = require('request-promise');

// get url of of location
/******************************************************************* */
const getLongLatUrl = async function () {
    const ip = await ipAddress();
    const urlLongLat = await ` http://api.ipstack.com/${ip}?access_key=473242ae5d7fc77fefe8874429c02d1f`;
    return urlLongLat;
}
/******************************************************************* */
const getLatLong = async function () {
    const langLatUrl = await getLongLatUrl();
     //console.log(langLatUrl);
    const resp = await requirePromise({ url: langLatUrl, json: true });
    // console.log(resp);
    const data ={
        continent:resp.continent_name,
        country:resp.country_name,
        region:resp.region_name,
        long: resp.longitude,
        lat: resp.latitude,
        countryemoj: resp.location.country_flag_emoji_unicode,
        countryFlag: resp.location.country_flag
    }
    return data;
}

module.exports =getLatLong;