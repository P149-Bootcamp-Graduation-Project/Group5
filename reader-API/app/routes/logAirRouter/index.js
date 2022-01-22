const router = express.Router();
const { getLogAir } = require("../../controllers/logAir");


router.route('/').get(getLogAir);


module.exports = router;