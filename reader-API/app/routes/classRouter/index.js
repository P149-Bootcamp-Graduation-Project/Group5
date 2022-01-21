const router = express.Router();
const { getClasses } = require("../../controllers/class");


router.route('/').get(getClasses);


module.exports = router;