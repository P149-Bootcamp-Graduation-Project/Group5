const pg_client = require("../../adapters/database/postgresql");

const User = async () => {
  const text =
    "select id, user_title, user_name, user_pass, email, phone, last_login, created_at, is_active from users";

  //const values =[];
  let dbValue = await pg_client.query(text);

  return dbValue.rows;
};

module.exports = User;
