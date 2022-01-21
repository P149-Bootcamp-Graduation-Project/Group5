const router = express.Router();
const { getSensors } = require("../../controllers/sensor");

router.route('/').get(getSensors);


module.exports = router;