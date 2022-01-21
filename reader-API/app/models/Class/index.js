const pg_client = require('../../adapters/database/postgresql')

const Class = async ()=>{

    const text="select id, school_id, floor_num, class_name, detail, created_at, created_by, is_active from classes"
   
    
    //const values =[];
    let dbValue= await pg_client.query(text);

    return dbValue.rows;
}


module.exports=Class;