const {
  elecDataGet,
  elecDataPost,
  elecErrGet,
} = require("../controllers/producer/producer");
const router = express.Router();

//Chain methods
router.route("/elec").get(elecDataGet).post(elecDataPost);
router.route("/elecErr").get(elecErrGet);

module.exports = {
  router,
};
