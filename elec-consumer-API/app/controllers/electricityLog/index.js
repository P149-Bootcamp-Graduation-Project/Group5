const airLogger = require("../../models/airLog")


const addAirLog = async (req, res)=>{
    const {}= req.body;
    await airLogger()
}


module.exports =addAirLog;