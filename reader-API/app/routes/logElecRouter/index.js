const router = express.Router();
const { getLogElectricity } = require("../../controllers/logElectricity");



router.route('/').get(getLogElectricity);


module.exports = router;