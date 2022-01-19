//const homeController = require('../controllers/home/home');
const { homeIndex, homeIndexGet } = require("../controllers/home/home");
const { tempPost } = require("../controllers/producer/producerTemp");
const router = express.Router();

//Chain methods
router.route("/home").post(homeIndex).get(homeIndexGet);
router.route("/temp").post(tempPost);

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
