const {rd_client} = require('../../adapters/database/redis');
const User = require('../../models/user');

const getUsers=async(req, res) => {

   

    const cacheKey="users";

    let cacheEntry= await rd_client.get(cacheKey);
    

    if(cacheEntry){
        cacheEntry = JSON.parse(cacheEntry);
        res.status(200).json({...cacheEntry, source :'from cache'})  
        
    }

    try {
        const data = await User();
        
        await rd_client.setEx(cacheKey,180,JSON.stringify(data));
        
       
        res.status(200).json({...data, source:"from database"});
    } catch (error) {
        return error
    
    }

}


module.exports = {getUsers}