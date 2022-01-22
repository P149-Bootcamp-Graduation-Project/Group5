const router = express.Router();
const { getLogTemperature } = require("../../controllers/logTemperature");


router.route('/').get(getLogTemperature);


module.exports = router;