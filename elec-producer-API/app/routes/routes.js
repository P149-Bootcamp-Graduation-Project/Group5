const {
  elecDataGet,
  elecDataPost,
} = require("../controllers/producer/producer");
const router = express.Router();

//Chain methods
router.route("/temp").get(elecDataGet).post(elecDataPost);

module.exports = {
  router,
};
