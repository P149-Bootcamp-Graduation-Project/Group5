const { airDataPost, airDataGet } = require("../controllers/producer/producer");
const router = express.Router();

//Chain methods
router.route("/air").get(airDataGet).post(airDataPost);

module.exports = {
  router,
};
