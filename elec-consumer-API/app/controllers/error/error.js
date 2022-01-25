const axios = require("axios");

const errorHandler = async (err) => {
  const data = err;
  const config = {
    method: "post",
    url: "http://localhost:3001/err",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    data: data,
  };

  await axios(config)
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

module.exports = errorHandler;
