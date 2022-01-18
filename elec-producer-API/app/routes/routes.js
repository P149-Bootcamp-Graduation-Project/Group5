//const homeController = require('../controllers/home/home');
const { homeIndex, homeIndexGet } = require("../controllers/home/home");
const { electricityPost } = require("../controllers/producer/producerElec");
const router = express.Router();

//Chain methods
router.route("/home").post(homeIndex).get(homeIndexGet);
router.route("/elec").post(electricityPost);

//HTTP METHODS
/*
POST
GET
PATCH/PUT
DELETE
OPTIONS
*/
module.exports = {
  router,
};
