const {
  airDataPost,
  airDataGet,
  airErrGet,
} = require("../controllers/producer/producer");
const router = express.Router();

//Chain methods
router.route("/air").get(airDataGet).post(airDataPost);
router.route("/airErr").get(airErrGet);

module.exports = {
  router,
};
