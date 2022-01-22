const router = express.Router();
const { getSchool } = require("../../controllers/school");



router.route('/').get(getSchool);


module.exports = router;