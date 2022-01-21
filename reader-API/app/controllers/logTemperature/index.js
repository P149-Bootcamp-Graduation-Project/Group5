const {rd_client} = require('../../adapters/database/redis');
const LogTemperature = require('../../models/logTemperature');

const getLogTemperature=async(req, res) => {

   

    const cacheKey="log-temperature";

    let cacheEntry= await rd_client.get(cacheKey);
    

    if(cacheEntry){
        cacheEntry = JSON.parse(cacheEntry);
        res.status(200).json({...cacheEntry, source :'from cache'})  
        
    }

    try {
        const data = await LogTemperature();
        
        await rd_client.setEx(cacheKey,180,JSON.stringify(data));
        
       
        res.status(200).json({...data, source:"from database"});
    } catch (error) {
        return error
    
    }

}


module.exports = {getLogTemperature}