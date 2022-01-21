const pg_client = require('../../adapters/database/postgresql')

const School = async ()=>{

    const text="select id, school_name, detail, city_id, total_class, created_at, created_by, is_active from schools"
   
    
    //const values =[];
    let dbValue= await pg_client.query(text);

    return dbValue.rows;
}


module.exports=School;