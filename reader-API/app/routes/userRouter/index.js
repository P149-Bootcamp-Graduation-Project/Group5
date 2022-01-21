const router = express.Router();
const { getUsers } = require("../../controllers/user");

router.route('/').get(getUsers);


module.exports = router;