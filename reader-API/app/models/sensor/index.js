const pg_client = require('../../adapters/database/postgresql')

const Sensor = async ()=>{

    const text="select id, school_id, class_id, sensor_name, detail, default_protocol, default_ip, default_port, default_channel, created_at, connected_at, created_by, is_online, is_active  from sensors"
    
    //const values =[];
    let dbValue= await pg_client.query(text);

    return dbValue.rows;
}


module.exports=Sensor;