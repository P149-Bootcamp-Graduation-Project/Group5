const pg_client = require('../../adapters/database/postgresql')

const LogAir = async ()=>{

    const text="select id, school_id, class_id, sensor_id, sensor_data, read_at, created_at  from log_air_quality"
    
    
    //const values =[];
    let dbValue= await pg_client.query(text);

    return dbValue.rows;
}


module.exports=LogAir;