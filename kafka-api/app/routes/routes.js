//const homeController = require('../controllers/home/home');
const { homeIndex, homeIndexGet } = require("../controllers/home/home");
const router = express.Router();
const {
  airGet,
  airPost,
  tempGet,
  tempPost,
  electricityGet,
  electricityPost,
} = require("../controllers/kafkaControllers");

router.route("/home").post(homeIndex).get(homeIndexGet);
router.route("/temp").post(tempPost).get(tempGet);
router.route("/air").post(airPost).get(airGet);
router.route("/electricity").post(electricityPost).get(electricityGet);

module.exports = {
  router,
};
