const {
  elecDataGet,
  elecDataPost,
} = require("../controllers/producer/producer");
const router = express.Router();

//Chain methods
router.route("/elec").get(elecDataGet).post(elecDataPost);

module.exports = {
  router,
};
