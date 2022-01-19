const {
  tempDataPost,
  tempDataGet,
} = require("../controllers/producer/producer");
const router = express.Router();

//Chain methods
router.route("/temp").get(tempDataGet).post(tempDataPost);

module.exports = {
  router,
};
