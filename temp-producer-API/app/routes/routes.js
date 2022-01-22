const {
  tempDataPost,
  tempDataGet,
  tempErrGet,
} = require("../controllers/producer/producer");
const router = express.Router();

//Chain methods
router.route("/temp").get(tempDataGet).post(tempDataPost);
router.route("/tempErr").get(tempErrGet);

module.exports = {
  router,
};
