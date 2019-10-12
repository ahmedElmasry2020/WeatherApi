const publicIp = require('public-ip');
 
 const ipAdrress=async () => {
    const ip=await publicIp.v4();
    return  ip;
}

module.exports=ipAdrress;
